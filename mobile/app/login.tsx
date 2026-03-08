import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../constants/theme';
import { useRouter } from "expo-router";
export default function LoginScreen() {
  const [userType, setUserType] = useState('citizen'); // 'citizen' or 'staff'
const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.flex}
      >
        <View style={styles.card}>
          {/* Logo Header */}
          <View style={styles.logoHeader}>
            <FontAwesome5 name="university" size={24} color={Colors.light.brand} />
            <Text style={styles.brandTitle}>Jan Seva | जन सेवा</Text>
          </View>

          {/* Welcome Section */}
          <View style={styles.centerItems}>
            <View style={styles.iconCircle}>
               <Ionicons name="location-sharp" size={40} color={Colors.light.brand} />
            </View>
            <Text style={styles.welcomeText}>Welcome | स्वागत है</Text>
            <Text style={styles.subText}>Access government services directly | सरकारी सेवाओं तक सीधे पहुँचें</Text>
          </View>

          {/* Toggle Login Type */}
          <Text style={styles.labelSmall}>LOGIN AS | इस रूप में लॉगिन करें</Text>
          <View style={styles.toggleContainer}>
            <TouchableOpacity 
              style={[styles.toggleBtn, userType === 'citizen' && styles.toggleBtnActive]}
              onPress={() => setUserType('citizen')}
            >
              <Text style={[styles.toggleText, userType === 'citizen' && styles.toggleTextActive]}>Citizen | नागरिक</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.toggleBtn, userType === 'staff' && styles.toggleBtnActive]}
              onPress={() => setUserType('staff')}
            >
              <Text style={[styles.toggleText, userType === 'staff' && styles.toggleTextActive]}>Staff | कर्मचारी</Text>
            </TouchableOpacity>
          </View>

          {/* Input Fields */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Mobile Number | मोबाइल नंबर</Text>
            <View style={styles.inputWrapper}>
              <Text style={styles.prefix}>+91</Text>
              <TextInput 
                placeholder="00000-00000" 
                keyboardType="phone-pad"
                style={styles.input}
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Password | पासवर्ड</Text>
            <TextInput 
              placeholder="Enter your password | पासवर्ड दर्ज करें" 
              secureTextEntry
              style={[styles.input, styles.singleInput]}
              placeholderTextColor="#9CA3AF"
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.primaryBtn}>
            <Text style={styles.primaryBtnText}>Send OTP | ओटीपी भेजें</Text>
            <Ionicons name="arrow-forward" size={20} color="#fff" />
          </TouchableOpacity>

          {/* Footer */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>NEW USER? | नए उपयोगकर्ता?</Text>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity 
  style={styles.outlineBtn}
  onPress={() => router.push("/create-account")}
>
  <Text style={styles.outlineBtnText}>Sign Up | पंजीकरण करें</Text>
</TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6', justifyContent: 'center', padding: 20 },
  flex: { flex: 1, justifyContent: 'center' },
  card: { backgroundColor: '#fff', borderRadius: 20, padding: 24, elevation: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8 },
  logoHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 30 },
  brandTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 10, color: '#1F2937' },
  centerItems: { alignItems: 'center', marginBottom: 30 },
  iconCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#FFF7ED', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  welcomeText: { fontSize: 22, fontWeight: 'bold', color: '#111827' },
  subText: { fontSize: 13, color: '#6B7280', textAlign: 'center', marginTop: 5, paddingHorizontal: 10 },
  labelSmall: { fontSize: 11, fontWeight: '700', color: '#374151', textAlign: 'center', marginBottom: 10 },
  toggleContainer: { flexDirection: 'row', backgroundColor: '#F3F4F6', borderRadius: 12, padding: 4, marginBottom: 25 },
  toggleBtn: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 10 },
  toggleBtnActive: { backgroundColor: Colors.light.brand },
  toggleText: { fontSize: 14, fontWeight: '600', color: '#6B7280' },
  toggleTextActive: { color: '#fff' },
  inputGroup: { marginBottom: 15 },
  inputLabel: { fontSize: 14, fontWeight: '600', color: '#374151', marginBottom: 8 },
  inputWrapper: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12, paddingHorizontal: 15 },
  prefix: { fontSize: 16, color: '#374151', marginRight: 10, fontWeight: '500' },
  input: { flex: 1, height: 50, fontSize: 16, color: '#111827' },
  singleInput: { borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12, paddingHorizontal: 15 },
  primaryBtn: { backgroundColor: Colors.light.brand, borderRadius: 12, height: 55, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 },
  primaryBtnText: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginRight: 10 },
  dividerContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 25 },
  dividerLine: { flex: 1, height: 1, backgroundColor: '#E5E7EB' },
  dividerText: { marginHorizontal: 10, fontSize: 10, color: '#9CA3AF', fontWeight: 'bold' },
  outlineBtn: { borderWidth: 1, borderColor: Colors.light.brand, borderRadius: 12, height: 55, alignItems: 'center', justifyContent: 'center' },
  outlineBtnText: { color: Colors.light.brand, fontSize: 18, fontWeight: 'bold' },
});