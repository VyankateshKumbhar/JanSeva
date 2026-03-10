import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../../constants/theme';
import { useRouter } from "expo-router";
import axios from 'axios';
import { BASE_URL } from '../../constants/Config'; 

export default function LoginScreen() {
  const [userType, setUserType] = useState<'citizen' | 'staff'>('citizen');
  
  // Single state for either Phone (Citizen) or Email (Staff)
  const [identifier, setIdentifier] = useState(''); 
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const activeColor = userType === 'citizen' ? Colors.light.brand : '#1E40AF';
  const lightBg = userType === 'citizen' ? '#FFF7ED' : '#EFF6FF';
  const iconName = userType === 'citizen' ? "location-sharp" : "shield-checkmark";

  const handleLogin = async () => {
    if (!identifier || !password) {
      Alert.alert("Error", "Please enter your credentials");
      return;
    }

    setLoading(true);
    try {
      // Sending 'identifier' which handles both phone or email on backend
      const response = await axios.post(`${BASE_URL}/users/login`, { 
        identifier, 
        password 
      });
      
      if (response.data.success) {
        const { redirectedDashboard } = response.data.user;

        if (redirectedDashboard === 'Admin') {
          // This must match your folder name "Department" and filename exactly
          router.replace("/Department/department_dashboard"); 
        } else if (redirectedDashboard === 'Worker') {
          router.replace("/worker_portal"); 
        } else {
          // Default for Citizens
          router.replace("../index"); 
        }
      }
    } catch (error: any) {
      Alert.alert("Login Failed", error.response?.data?.message || "Invalid Credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: userType === 'citizen' ? '#F8FAFC' : '#F1F5F9' }]}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.flex}>
        <ScrollView contentContainerStyle={styles.scrollGrow} showsVerticalScrollIndicator={false}>
          
          <View style={styles.card}>
            <View style={styles.logoHeader}>
              <FontAwesome5 name="university" size={18} color={activeColor} />
              <Text style={[styles.brandTitle, { color: activeColor }]}>Jan Seva | जन सेवा</Text>
            </View>

            <View style={styles.centerItems}>
              <View style={[styles.iconCircle, { backgroundColor: lightBg, borderColor: userType === 'citizen' ? '#FFEDD5' : '#DBEAFE' }]}>
                <Ionicons name={iconName} size={38} color={activeColor} />
              </View>
              <Text style={styles.welcomeText}>
                {userType === 'citizen' ? 'Citizen Login' : 'Staff Portal'}
              </Text>
              <Text style={styles.subText}>
                {userType === 'citizen' 
                  ? "Access government services directly\nसरकारी सेवाओं तक सीधे पहुँचें"
                  : "Internal Management & Resolution\nआंतरिक प्रबंधन और शिकायत निवारण"}
              </Text>
            </View>

            <View style={styles.toggleSection}>
              <View style={styles.toggleContainer}>
                <TouchableOpacity 
                  activeOpacity={0.8}
                  style={[styles.toggleBtn, userType === 'citizen' && { backgroundColor: Colors.light.brand }]}
                  onPress={() => setUserType('citizen')}
                >
                  <Text style={[styles.toggleText, userType === 'citizen' && styles.toggleTextActive]}>Citizen | नागरिक</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  activeOpacity={0.8}
                  style={[styles.toggleBtn, userType === 'staff' && { backgroundColor: '#1E40AF' }]}
                  onPress={() => setUserType('staff')}
                >
                  <Text style={[styles.toggleText, userType === 'staff' && styles.toggleTextActive]}>Staff | कर्मचारी</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.form}>
              {/* Dynamic Input: Changes between Phone and Email based on userType */}
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>
                  {userType === 'citizen' ? 'Mobile Number | मोबाइल नंबर' : 'Official Email | आधिकारिक ईमेल'}
                </Text>
                <View style={[styles.inputWrapper, { borderColor: userType === 'staff' ? '#BFDBFE' : '#E2E8F0' }]}>
                  <Ionicons 
                    name={userType === 'citizen' ? "call-outline" : "mail-outline"} 
                    size={20} 
                    color={activeColor} 
                    style={styles.leftIcon} 
                  />
                  {userType === 'citizen' && <Text style={styles.prefix}>+91</Text>}
                  <TextInput 
                    placeholder={userType === 'citizen' ? "98765-43210" : "officer@janseva.gov"} 
                    keyboardType={userType === 'citizen' ? "phone-pad" : "email-address"}
                    style={styles.input}
                    autoCapitalize="none"
                    value={identifier}
                    onChangeText={setIdentifier}
                    placeholderTextColor="#94A3B8"
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Password | पासवर्ड</Text>
                <View style={[styles.inputWrapper, { borderColor: userType === 'staff' ? '#BFDBFE' : '#E2E8F0' }]}>
                  <Ionicons name="lock-closed-outline" size={20} color={activeColor} style={styles.leftIcon} />
                  <TextInput 
                    placeholder="••••••••" 
                    secureTextEntry={!showPassword}
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholderTextColor="#94A3B8"
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons name={showPassword ? "eye-outline" : "eye-off-outline"} size={20} color="#94A3B8" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <TouchableOpacity
              style={[styles.primaryBtn, { backgroundColor: activeColor }]}
              onPress={handleLogin}
              disabled={loading}
            >
              {loading ? <ActivityIndicator color="#fff" /> : (
                <>
                  <Text style={styles.primaryBtnText}>
                    {userType === 'citizen' ? 'Login | लॉगिन करें' : 'Login'}
                  </Text>
                  <Ionicons name="arrow-forward" size={20} color="#fff" />
                </>
              )}
            </TouchableOpacity>

            {userType === 'citizen' && (
              <>
                <View style={styles.dividerContainer}>
                  <View style={styles.dividerLine} />
                  <Text style={styles.dividerText}>NEW USER?</Text>
                  <View style={styles.dividerLine} />
                </View>
                <TouchableOpacity 
                  style={[styles.outlineBtn, { borderColor: activeColor }]}
                  onPress={() => router.push("/Auth/create-account")}
                >
                  <Text style={[styles.outlineBtnText, { color: activeColor }]}>Sign Up | पंजीकरण करें</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  flex: { flex: 1 },
  scrollGrow: { flexGrow: 1, justifyContent: 'center', padding: 20 },
  card: { backgroundColor: '#fff', borderRadius: 28, padding: 24, elevation: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 15 },
  logoHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20 },
  brandTitle: { fontSize: 14, fontWeight: '700', marginLeft: 8, letterSpacing: 1 },
  centerItems: { alignItems: 'center', marginBottom: 20 },
  iconCircle: { width: 75, height: 75, borderRadius: 37.5, justifyContent: 'center', alignItems: 'center', marginBottom: 12, borderWidth: 1.5 },
  welcomeText: { fontSize: 24, fontWeight: '900', color: '#1E293B' },
  subText: { fontSize: 13, color: '#64748B', textAlign: 'center', marginTop: 4, lineHeight: 18 },
  toggleSection: { marginBottom: 25 },
  toggleContainer: { flexDirection: 'row', backgroundColor: '#F1F5F9', borderRadius: 16, padding: 6 },
  toggleBtn: { flex: 1, paddingVertical: 12, alignItems: 'center', borderRadius: 12 },
  toggleText: { fontSize: 13, fontWeight: '700', color: '#94A3B8' },
  toggleTextActive: { color: '#fff' },
  form: { marginBottom: 10 },
  inputGroup: { marginBottom: 16 },
  inputLabel: { fontSize: 13, fontWeight: '700', color: '#475569', marginBottom: 6, marginLeft: 4 },
  inputWrapper: { flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderRadius: 14, paddingHorizontal: 16, height: 56, backgroundColor: '#F8FAFC' },
  leftIcon: { marginRight: 10 },
  prefix: { fontSize: 16, color: '#1E293B', marginRight: 10, fontWeight: '700' },
  input: { flex: 1, fontSize: 15, color: '#1E293B' },
  primaryBtn: { borderRadius: 16, height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 },
  primaryBtnText: { color: '#fff', fontSize: 16, fontWeight: '800', marginRight: 8 },
  dividerContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 20 },
  dividerLine: { flex: 1, height: 1, backgroundColor: '#E2E8F0' },
  dividerText: { marginHorizontal: 12, fontSize: 10, color: '#94A3B8', fontWeight: '800' },
  outlineBtn: { borderWidth: 2, borderRadius: 16, height: 56, alignItems: 'center', justifyContent: 'center' },
  outlineBtnText: { fontSize: 15, fontWeight: '700' },
});