import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native';
import { ChevronLeft, User, Phone, Lock, EyeOff, Check, ArrowRight, MapPin, Mail } from 'lucide-react-native';
import { Colors } from '../../constants/theme';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { BASE_URL } from '../../constants/Config';

export default function CreateAccountScreen() {
  const router = useRouter();
  const theme = Colors.light;

  // Form States
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState(''); // NEW EMAIL STATE
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleSignUp = async () => {
    if (!name || !phone || !email || !password) {
      Alert.alert("Error", "Please fill all required fields");
      return;
    }
    if (!agree) {
      Alert.alert("Error", "Please agree to the terms");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/users/register`, {
        name,
        phone,
        email,
        password,
        ward: address, // Using address as ward for now
        role: "Citizen" // Default
      });

      if (response.data.success) {
        Alert.alert("Success", "Account created! Now go to MongoDB and change your role to 'Admin' to test staff login.");
        router.replace("/Auth/login");
      }
    } catch (error: any) {
      Alert.alert("Signup Failed", error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}><ChevronLeft size={24} color={theme.text} /></TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.text }]}>Jan Seva | जन सेवा</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <Text style={[styles.mainTitle, { color: theme.text }]}>Create Account</Text>
          
          <View style={styles.formContainer}>
            {/* Name */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Full Name / पूरा नाम</Text>
              <View style={[styles.inputWrapper, { borderColor: theme.cardBorder }]}>
                <User size={20} color={theme.brand} style={styles.inputIcon} />
                <TextInput placeholder="Rahul Sharma" style={styles.input} value={name} onChangeText={setName} />
              </View>
            </View>

            {/* Email - NEWLY ADDED */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email / ईमेल</Text>
              <View style={[styles.inputWrapper, { borderColor: theme.cardBorder }]}>
                <Mail size={20} color={theme.brand} style={styles.inputIcon} />
                <TextInput placeholder="admin@officer.com" keyboardType="email-address" autoCapitalize="none" style={styles.input} value={email} onChangeText={setEmail} />
              </View>
            </View>

            {/* Phone */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Mobile / मोबाइल</Text>
              <View style={[styles.inputWrapper, { borderColor: theme.cardBorder }]}>
                <Phone size={20} color={theme.brand} style={styles.inputIcon} />
                <TextInput placeholder="9876543210" keyboardType="phone-pad" style={styles.input} value={phone} onChangeText={setPhone} />
              </View>
            </View>

            {/* Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Password / पासवर्ड</Text>
              <View style={[styles.inputWrapper, { borderColor: theme.cardBorder }]}>
                <Lock size={20} color={theme.brand} style={styles.inputIcon} />
                <TextInput secureTextEntry={!showPassword} placeholder="••••••••" style={styles.input} value={password} onChangeText={setPassword} />
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.termsContainer} onPress={() => setAgree(!agree)}>
            <View style={[styles.checkbox, agree && { backgroundColor: theme.brand, borderColor: theme.brand }]}>
              {agree && <Check size={12} color="#fff" />}
            </View>
            <Text style={styles.termsText}>I agree to the Terms of Service</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.signUpButton, { backgroundColor: theme.brand }]} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Sign Up / पंजीकरण करें</Text>
            <ArrowRight size={20} color="#fff" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1, paddingHorizontal: 20 },
  header: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15 },
  headerTitle: { fontSize: 18, fontWeight: '700', marginLeft: 20 },
  scrollContent: { paddingBottom: 40 },
  mainTitle: { fontSize: 28, fontWeight: '800', marginBottom: 20 },
  formContainer: { marginBottom: 15 },
  inputGroup: { marginBottom: 18 },
  inputLabel: { fontSize: 14, fontWeight: '600', marginBottom: 8, color: '#64748B' },
  inputWrapper: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 12, backgroundColor: '#fff', height: 55, paddingHorizontal: 15 },
  inputIcon: { marginRight: 10 },
  input: { flex: 1, height: '100%', fontSize: 16 },
  termsContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  checkbox: { width: 20, height: 20, borderRadius: 6, borderWidth: 2, borderColor: '#E2E8F0', marginRight: 12, justifyContent: 'center', alignItems: 'center' },
  termsText: { fontSize: 13, color: '#64748B' },
  signUpButton: { flexDirection: 'row', borderRadius: 15, height: 60, justifyContent: 'center', alignItems: 'center', elevation: 3 },
  signUpButtonText: { fontSize: 18, color: '#fff', fontWeight: '700', marginRight: 10 },
});