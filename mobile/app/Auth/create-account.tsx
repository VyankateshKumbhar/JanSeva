import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { ChevronLeft, User, Phone, Lock, Eye, EyeOff, Check, ArrowRight, MapPin } from 'lucide-react-native';
import { Colors } from '../../constants/theme';
import { useRouter } from 'expo-router';

export default function CreateAccountScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  
  const theme = Colors.light; 

  // Function to handle the final sign up
  const handleSignUp = () => {
    // Add your backend logic here later
    // For now, redirect to the login or dashboard
    router.replace("/Auth/login");``
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <ChevronLeft size={24} color={theme.text} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.text }]}>Jan Seva | जन सेवा</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {/* Titles */}
          <View style={styles.titleSection}>
            <Text style={[styles.mainTitle, { color: theme.text }]}>Create Account</Text>
            <Text style={[styles.mainTitleHindi, { color: theme.text }]}>खाता बनाएँ</Text>
            <Text style={[styles.subTitle, { color: theme.textSecondary }]}>Join us to access civic services easily.</Text>
          </View>

          {/* Form Fields */}
          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>Full Name / पूरा नाम</Text>
              <View style={[styles.inputWrapper, { borderColor: theme.cardBorder }]}>
                <User size={20} color={theme.brand} style={styles.inputIcon} />
                <TextInput placeholder="e.g. Rahul Sharma" style={[styles.input, { color: theme.text }]} placeholderTextColor={theme.tabIconDefault} />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>Mobile Number / मोबाइल नंबर</Text>
              <View style={[styles.inputWrapper, { borderColor: theme.cardBorder }]}>
                <Phone size={20} color={theme.brand} style={styles.inputIcon} />
                <TextInput placeholder="9876543210" style={[styles.input, { color: theme.text }]} keyboardType="phone-pad" placeholderTextColor={theme.tabIconDefault} />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>Residential Address / आवासीय पता</Text>
              <View style={[styles.inputWrapper, { borderColor: theme.cardBorder }]}>
                <MapPin size={20} color={theme.brand} style={styles.inputIcon} />
                <TextInput placeholder="Enter your full address" style={[styles.input, { color: theme.text }]} placeholderTextColor={theme.tabIconDefault} />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>Create Password / पासवर्ड बनाएँ</Text>
              <View style={[styles.inputWrapper, { borderColor: theme.cardBorder }]}>
                <Lock size={20} color={theme.brand} style={styles.inputIcon} />
                <TextInput 
                  placeholder="At least 8 characters" 
                  style={[styles.input, { color: theme.text }]} 
                  secureTextEntry={!showPassword} 
                  placeholderTextColor={theme.tabIconDefault} 
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <EyeOff size={20} color={theme.tabIconDefault} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Terms */}
          <TouchableOpacity style={styles.termsContainer} onPress={() => setAgree(!agree)}>
            <View style={[styles.checkbox, { borderColor: theme.cardBorder }, agree && { backgroundColor: theme.brand, borderColor: theme.brand }]}>
              {agree && <Check size={12} color="#fff" strokeWidth={3} />}
            </View>
            <Text style={[styles.termsText, { color: theme.textSecondary }]}>I agree to the Terms of Service</Text>
          </TouchableOpacity>

          {/* SIGN UP BUTTON */}
          <TouchableOpacity
            style={[styles.signUpButton, { backgroundColor: theme.brand }]}
            onPress={handleSignUp}
          >
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
  titleSection: { marginTop: 10, marginBottom: 25 },
  mainTitle: { fontSize: 28, fontWeight: '800' },
  mainTitleHindi: { fontSize: 28, fontWeight: '800' },
  subTitle: { fontSize: 15, marginTop: 5 },
  formContainer: { marginBottom: 15 },
  inputGroup: { marginBottom: 18 },
  inputLabel: { fontSize: 14, fontWeight: '600', marginBottom: 8 },
  inputWrapper: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 12, backgroundColor: '#fff', height: 55, paddingHorizontal: 15 },
  inputIcon: { marginRight: 10 },
  input: { flex: 1, height: '100%', fontSize: 16 },
  termsContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  checkbox: { width: 20, height: 20, borderRadius: 6, borderWidth: 2, backgroundColor: '#fff', marginRight: 12, justifyContent: 'center', alignItems: 'center' },
  termsText: { fontSize: 13 },
  signUpButton: { flexDirection: 'row', borderRadius: 15, height: 60, justifyContent: 'center', alignItems: 'center', elevation: 3 },
  signUpButtonText: { fontSize: 18, color: '#fff', fontWeight: '700', marginRight: 10 },
});