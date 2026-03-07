import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import { ChevronLeft, MapPin, Navigation, CheckCircle2 } from 'lucide-react-native';
import { Colors } from '../constants/theme';
import { useRouter } from 'expo-router';

export default function AddressVerification() {
  const router = useRouter();
  const theme = Colors.light;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft size={24} color={theme.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.text }]}>
          Address Details / पते का विवरण
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Progress Bar - 100% for Step 3 */}
        <View style={styles.progressRow}>
          <Text style={[styles.progressLabel, { color: theme.textSecondary }]}>
            Final Step / अंतिम चरण
          </Text>
          <Text style={[styles.stepText, { color: theme.brand }]}>Step 3 of 3</Text>
        </View>
        <View style={[styles.progressBarBg, { backgroundColor: theme.cardBorder }]}>
          <View style={[styles.progressBarFill, { backgroundColor: theme.brand, width: '100%' }]} />
        </View>

        {/* Location Auto-detect */}
        <TouchableOpacity style={[styles.locationCard, { borderColor: theme.brand }]}>
          <View style={[styles.iconCircle, { backgroundColor: theme.brandLight }]}>
            <Navigation size={24} color={theme.brand} />
          </View>
          <View style={styles.locationTextContainer}>
            <Text style={[styles.locationTitle, { color: theme.brand }]}>Use Current Location</Text>
            <Text style={[styles.locationSubTitle, { color: theme.textSecondary }]}>वर्तमान स्थान का उपयोग करें</Text>
          </View>
        </TouchableOpacity>

        {/* Manual Address Form */}
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>House / Flat No. (मकान नंबर)</Text>
            <TextInput 
              style={[styles.input, { borderColor: theme.cardBorder, color: theme.text }]} 
              placeholder="e.g. 123, Ward 5"
              placeholderTextColor={theme.tabIconDefault}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>Area / Colony (क्षेत्र / कॉलोनी)</Text>
            <TextInput 
              style={[styles.input, { borderColor: theme.cardBorder, color: theme.text }]} 
              placeholder="Enter area name"
              placeholderTextColor={theme.tabIconDefault}
            />
          </View>

          <View style={styles.row}>
            <View style={[styles.inputGroup, { flex: 1, marginRight: 10 }]}>
              <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>Pincode (पिनकोड)</Text>
              <TextInput 
                style={[styles.input, { borderColor: theme.cardBorder, color: theme.text }]} 
                placeholder="400001"
                keyboardType="numeric"
                placeholderTextColor={theme.tabIconDefault}
              />
            </View>
            <View style={[styles.inputGroup, { flex: 1 }]}>
              <Text style={[styles.inputLabel, { color: theme.textSecondary }]}>District (ज़िला)</Text>
              <TextInput 
                style={[styles.input, { borderColor: theme.cardBorder, color: theme.text }]} 
                placeholder="e.g. Pune"
                placeholderTextColor={theme.tabIconDefault}
              />
            </View>
          </View>
        </View>

        {/* Finish Button */}
        <TouchableOpacity 
          style={[styles.submitButton, { backgroundColor: theme.brand }]}
          onPress={() => router.push('/profile')} // Takes user to the profile we built earlier
        >
          <Text style={styles.submitButtonText}>Complete Setup</Text>
          <Text style={styles.submitButtonSubText}>सेटअप पूरा करें</Text>
          <CheckCircle2 size={20} color="#fff" style={styles.checkIcon} />
        </TouchableOpacity>

        <Text style={styles.footerNote}>
          Your address is verified against your submitted Govt ID.
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
  progressBarBg: { height: 6, borderRadius: 3, marginBottom: 30 },
  progressBarFill: { height: '100%', borderRadius: 3 },
  locationCard: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 16, 
    borderRadius: 16, 
    borderWidth: 1, 
    borderStyle: 'dashed',
    backgroundColor: '#fff',
    marginBottom: 25
  },
  iconCircle: { width: 48, height: 48, borderRadius: 24, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  locationTextContainer: { flex: 1 },
  locationTitle: { fontSize: 16, fontWeight: '700' },
  locationSubTitle: { fontSize: 12 },
  form: { marginBottom: 30 },
  inputGroup: { marginBottom: 20 },
  inputLabel: { fontSize: 13, fontWeight: '700', marginBottom: 8 },
  input: { height: 55, borderWidth: 1, borderRadius: 12, paddingHorizontal: 15, fontSize: 16, backgroundColor: '#fff' },
  row: { flexDirection: 'row' },
  submitButton: { borderRadius: 18, height: 70, justifyContent: 'center', alignItems: 'center', elevation: 4, position: 'relative' },
  submitButtonText: { color: '#fff', fontSize: 18, fontWeight: '800' },
  submitButtonSubText: { color: '#fff', fontSize: 13 },
  checkIcon: { position: 'absolute', right: 25 },
  footerNote: { textAlign: 'center', fontSize: 11, color: '#9CA3AF', marginTop: 20 }
});