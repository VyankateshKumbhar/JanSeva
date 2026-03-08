import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { ChevronLeft, Camera, Image as ImageIcon, ShieldCheck } from 'lucide-react-native';
import { Colors } from '../constants/theme';
import { useRouter } from 'expo-router';

export default function IdentityVerification() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState('Aadhaar');
  const theme = Colors.light;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft size={24} color={theme.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.text }]}>
          Identity Verification / पहचान सत्यापन
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Progress Bar */}
        <View style={styles.progressRow}>
          <Text style={[styles.progressLabel, { color: theme.textSecondary }]}>
            Verification Progress / सत्यापन प्रगति
          </Text>
          <Text style={[styles.stepText, { color: theme.brand }]}>Step 2 of 3</Text>
        </View>
        <View style={[styles.progressBarBg, { backgroundColor: theme.cardBorder }]}>
          <View style={[styles.progressBarFill, { backgroundColor: theme.brand, width: '66%' }]} />
        </View>

        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={[styles.mainTitle, { color: theme.text }]}>Scan or Upload Govt ID</Text>
          <Text style={[styles.subTitle, { color: theme.textSecondary }]}>
            Please provide your Aadhaar or Voter ID for secure verification{"\n"}
            सत्यापन के लिए आधार या मतदाता कार्ड प्रदान करें
          </Text>
        </View>

        {/* Custom Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tab, selectedTab === 'Aadhaar' && { borderBottomColor: theme.brand, borderBottomWidth: 2 }]}
            onPress={() => setSelectedTab('Aadhaar')}
          >
            <Text style={[styles.tabText, selectedTab === 'Aadhaar' ? { color: theme.brand, fontWeight: '700' } : { color: theme.textSecondary }]}>
              Aadhaar Card
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, selectedTab === 'Voter' && { borderBottomColor: theme.brand, borderBottomWidth: 2 }]}
            onPress={() => setSelectedTab('Voter')}
          >
            <Text style={[styles.tabText, selectedTab === 'Voter' ? { color: theme.brand, fontWeight: '700' } : { color: theme.textSecondary }]}>
              Voter ID
            </Text>
          </TouchableOpacity>
        </View>

        {/* Camera / Scanner Area */}
        <View style={[styles.scannerContainer, { borderColor: theme.cardBorder }]}>
            {/* Corner Markers */}
            <View style={[styles.corner, styles.topLeft, { borderColor: theme.brand }]} />
            <View style={[styles.corner, styles.topRight, { borderColor: theme.brand }]} />
            <View style={[styles.corner, styles.bottomLeft, { borderColor: theme.brand }]} />
            <View style={[styles.corner, styles.bottomRight, { borderColor: theme.brand }]} />
            
            <TouchableOpacity style={[styles.cameraButton, { backgroundColor: theme.brand }]}>
                <Camera size={20} color="#fff" />
                <Text style={styles.cameraButtonText}>Open Camera / कैमरा खोलें</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.dividerRow}>
            <View style={[styles.dividerLine, { backgroundColor: theme.cardBorder }]} />
            <Text style={[styles.dividerText, { color: theme.textSecondary }]}>OR</Text>
            <View style={[styles.dividerLine, { backgroundColor: theme.cardBorder }]} />
        </View>

        {/* Gallery Upload Button */}
        <TouchableOpacity style={[styles.uploadButton, { backgroundColor: theme.brandLight }]}>
            <ImageIcon size={20} color={theme.brand} style={styles.iconMargin} />
            <View>
                <Text style={[styles.uploadText, { color: theme.brand }]}>Upload from Gallery</Text>
                <Text style={[styles.uploadSubText, { color: theme.brand }]}>गैलरी से अपलोड करें</Text>
            </View>
        </TouchableOpacity>

        {/* Security Banner */}
        <View style={[styles.securityBanner, { backgroundColor: '#F0FDF4' }]}>
            <ShieldCheck size={20} color="#16A34A" style={styles.iconMargin} />
            <View style={styles.flexShrink}>
                <Text style={[styles.securityTitle, { color: '#16A34A' }]}>Encrypted & Secure / सुरक्षित और एन्क्रिप्टेड</Text>
                <Text style={[styles.securitySubText, { color: '#16A34A' }]}>
                    Your data is only used for verification. / आपका डेटा सुरक्षित है।
                </Text>
            </View>
        </View>

        {/* Action Button */}
        <TouchableOpacity 
            style={[styles.verifyButton, { backgroundColor: theme.brand }]}
            onPress={() => router.push('/address-verification')} // Path to Step 3
        >
            <Text style={styles.verifyButtonText}>Verify Identity</Text>
            <Text style={styles.verifyButtonSubText}>पहचान सत्यापित करें</Text>
        </TouchableOpacity>

        <Text style={styles.termsNote}>
            By continuing, you agree to Jan Seva's Terms of Service.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  headerTitle: { fontSize: 16, fontWeight: '700', marginLeft: 12 },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 40 },
  progressRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 8 },
  progressLabel: { fontSize: 13, fontWeight: '600' },
  stepText: { fontSize: 13, fontWeight: '700' },
  progressBarBg: { height: 6, borderRadius: 3, marginBottom: 25 },
  progressBarFill: { height: '100%', borderRadius: 3 },
  titleSection: { alignItems: 'center', marginBottom: 20 },
  mainTitle: { fontSize: 22, fontWeight: '800', marginBottom: 8 },
  subTitle: { fontSize: 13, textAlign: 'center', lineHeight: 18 },
  tabContainer: { flexDirection: 'row', marginBottom: 25 },
  tab: { flex: 1, paddingVertical: 12, alignItems: 'center' },
  tabText: { fontSize: 15, fontWeight: '600' },
  scannerContainer: { 
    height: 220, 
    borderWidth: 1, 
    borderRadius: 20, 
    borderStyle: 'dashed', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff',
    position: 'relative',
    marginBottom: 20
  },
  cameraButton: { flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 12, borderRadius: 12, alignItems: 'center', elevation: 4 },
  cameraButtonText: { color: '#fff', fontWeight: '700', marginLeft: 10 },
  corner: { position: 'absolute', width: 30, height: 30, borderWidth: 4 },
  topLeft: { top: -2, left: -2, borderBottomWidth: 0, borderRightWidth: 0, borderTopLeftRadius: 20 },
  topRight: { top: -2, right: -2, borderBottomWidth: 0, borderLeftWidth: 0, borderTopRightRadius: 20 },
  bottomLeft: { bottom: -2, left: -2, borderTopWidth: 0, borderRightWidth: 0, borderBottomLeftRadius: 20 },
  bottomRight: { bottom: -2, right: -2, borderTopWidth: 0, borderLeftWidth: 0, borderBottomRightRadius: 20 },
  dividerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  dividerLine: { flex: 1, height: 1 },
  dividerText: { marginHorizontal: 10, fontSize: 12, fontWeight: '700' },
  uploadButton: { flexDirection: 'row', alignItems: 'center', padding: 15, borderRadius: 16, marginBottom: 20 },
  iconMargin: { marginRight: 12 },
  uploadText: { fontSize: 15, fontWeight: '700' },
  uploadSubText: { fontSize: 12 },
  securityBanner: { flexDirection: 'row', padding: 12, borderRadius: 12, marginBottom: 30 },
  flexShrink: { flex: 1 },
  securityTitle: { fontSize: 13, fontWeight: '700' },
  securitySubText: { fontSize: 11 },
  verifyButton: { borderRadius: 18, height: 65, justifyContent: 'center', alignItems: 'center', elevation: 3 },
  verifyButtonText: { color: '#fff', fontSize: 18, fontWeight: '800' },
  verifyButtonSubText: { color: '#fff', fontSize: 14 },
  termsNote: { textAlign: 'center', fontSize: 10, color: '#9CA3AF', marginTop: 15 }
});