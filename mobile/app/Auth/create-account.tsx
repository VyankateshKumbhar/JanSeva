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
import { ChevronLeft, User, Phone, Lock, Eye, EyeOff, Check, ArrowRight } from 'lucide-react-native';
import { Colors } from '../../constants/theme';
import { useRouter } from 'expo-router';

export default function CreateAccountScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  
  // Accessing your theme directly
  const theme = Colors.light; 

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
          {/* Progress Bar Area */}
          <View style={styles.progressContainer}>
            <Text style={[styles.stepText, { color: theme.textSecondary }]}>Step 1: Account Setup / चरण 1</Text>
            <Text style={[styles.stepCount, { color: theme.textSecondary }]}>1/3</Text>
          </View>
          <View style={[styles.progressBarBg, { backgroundColor: theme.cardBorder }]}>
            <View style={[styles.progressBarFill, { backgroundColor: theme.brand }]} />
          </View>

          {/* Titles */}
          <Text style={[styles.mainTitle, { color: theme.text }]}>Create Account</Text>
          <Text style={[styles.mainTitleHindi, { color: theme.text }]}>खाता बनाएँ</Text>
          
          <Text style={[styles.subTitle, { color: theme.textSecondary }]}>Join us to access civic services easily.</Text>
          <Text style={[styles.subTitleHindi, { color: theme.textSecondary }]}>नागरिक सेवाओं के लिए हमसे जुड़ें।</Text>

          {/* Form Fields */}
          <View style={styles.formContainer}>
            {/* Full Name */}
            <View style={styles.inputGroup}>
              <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>Full Name / पूरा नाम</Text>
              <View style={[styles.inputWrapper, { borderColor: theme.cardBorder }]}>
                <User size={20} color={theme.brand} style={styles.inputIcon} />
                <TextInput 
                  placeholder="e.g. Rahul Sharma"
                  style={[styles.input, { color: theme.text }]}
                  placeholderTextColor={theme.tabIconDefault}
                />
              </View>
            </View>

            {/* Mobile Number */}
            <View style={styles.inputGroup}>
              <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>Mobile Number / मोबाइल नंबर</Text>
              <View style={[styles.inputWrapper, { borderColor: theme.cardBorder }]}>
                <Phone size={20} color={theme.brand} style={styles.inputIcon} />
                <View style={styles.countryCodeContainer}>
                    <Text style={[styles.countryCode, { color: theme.text }]}>+91</Text>
                    <View style={[styles.vDivider, { backgroundColor: theme.cardBorder }]} />
                </View>
                <TextInput 
                  placeholder="9876543210"
                  style={[styles.input, { color: theme.text }]}
                  keyboardType="phone-pad"
                  placeholderTextColor={theme.tabIconDefault}
                />
              </View>
            </View>

            {/* Password */}
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

          {/* Terms Checkbox */}
          <TouchableOpacity style={styles.termsContainer} onPress={() => setAgree(!agree)}>
            <View style={[
                styles.checkbox, 
                { borderColor: theme.cardBorder },
                agree && { backgroundColor: theme.brand, borderColor: theme.brand }
            ]}>
              {agree && <Check size={12} color="#fff" strokeWidth={3} />}
            </View>
            <View style={styles.termsTextWrapper}>
                <Text style={[styles.termsText, { color: theme.textSecondary }]}>
                    By proceeding, I agree to the <Text style={{ color: theme.brand, fontWeight: '700' }}>Terms of Service</Text>
                </Text>
            </View>
          </TouchableOpacity>

          {/* Next Button */}
          <TouchableOpacity
  style={[styles.nextButton, { backgroundColor: theme.brand }]}
  onPress={() => router.push("/Auth/identity-verification")}
>
  <Text style={styles.nextButtonText}>Next / अगला</Text>
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
  progressContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 5 },
  stepText: { fontSize: 14, fontWeight: '600' },
  stepCount: { fontSize: 14 },
  progressBarBg: { height: 6, borderRadius: 3, marginBottom: 25 },
  progressBarFill: { height: '100%', width: '33%', borderRadius: 3 },
  mainTitle: { fontSize: 28, fontWeight: '800' },
  mainTitleHindi: { fontSize: 28, fontWeight: '800', marginBottom: 10 },
  subTitle: { fontSize: 15 },
  subTitleHindi: { fontSize: 15, marginBottom: 30 },
  formContainer: { marginBottom: 15 },
  inputGroup: { marginBottom: 20 },
  inputLabel: { fontSize: 14, fontWeight: '600', marginBottom: 8 },
  inputWrapper: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 12, backgroundColor: '#fff', height: 55, paddingHorizontal: 15 },
  inputIcon: { marginRight: 10 },
  countryCodeContainer: { flexDirection: 'row', alignItems: 'center', marginRight: 10 },
  countryCode: { fontSize: 16, fontWeight: '600' },
  vDivider: { width: 1, height: 20, marginLeft: 10 },
  input: { flex: 1, height: '100%', fontSize: 16 },
  termsContainer: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 30 },
  checkbox: { width: 20, height: 20, borderRadius: 6, borderWidth: 2, backgroundColor: '#fff', marginTop: 3, justifyContent: 'center', alignItems: 'center' },
  termsTextWrapper: { flex: 1, marginLeft: 12 },
  termsText: { fontSize: 13, lineHeight: 18 },
  nextButton: { flexDirection: 'row', borderRadius: 15, height: 60, justifyContent: 'center', alignItems: 'center', elevation: 3 },
  nextButtonText: { fontSize: 18, color: '#fff', fontWeight: '700', marginRight: 10 },
});