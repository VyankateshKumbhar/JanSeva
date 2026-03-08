import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Switch, SafeAreaView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../constants/theme'; // Adjust path if needed
import { useRouter } from 'expo-router';
export default function ProfileScreen() {
  const [appAlerts, setAppAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [language, setLanguage] = useState('hi'); // 'hi' for Hindi
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>प्रोफ़ाइल और सेटिंग्स | Profile</Text>
        <View style={{ width: 24 }} /> 
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarPlaceholder}>
               <Ionicons name="person" size={60} color="#fff" />
            </View>
            <TouchableOpacity style={styles.editIcon}>
              <MaterialIcons name="edit" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>राहुल | Rahul</Text>
          <Text style={styles.userPhone}>+91 98765-43210</Text>
        </View>

        {/* Language Selector */}
        <View style={styles.sectionHeader}>
          <Ionicons name="globe-outline" size={20} color={Colors.light.textSecondary} />
          <Text style={styles.sectionHeaderText}>भाषा प्राथमिकता | LANGUAGE</Text>
        </View>
        <View style={styles.languageToggle}>
          <TouchableOpacity 
            style={[styles.langButton, language === 'hi' && styles.langButtonActive]} 
            onPress={() => setLanguage('hi')}
          >
            <Text style={[styles.langText, language === 'hi' && styles.langTextActive]}>हिन्दी</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.langButton, language === 'en' && styles.langButtonActive]} 
            onPress={() => setLanguage('en')}
          >
            <Text style={[styles.langText, language === 'en' && styles.langTextActive]}>English</Text>
          </TouchableOpacity>
        </View>

        {/* Notifications Section */}
        <View style={styles.sectionHeader}>
          <Ionicons name="notifications-outline" size={20} color={Colors.light.textSecondary} />
          <Text style={styles.sectionHeaderText}>सूचनाएं | NOTIFICATIONS</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.settingItem}>
            <View>
              <Text style={styles.settingLabel}>ऐप अलर्ट्स | App Alerts</Text>
              <Text style={styles.settingSubLabel}>त्वरित नोटिफिकेशन प्राप्त करें</Text>
            </View>
            <Switch 
              value={appAlerts} 
              onValueChange={setAppAlerts} 
              trackColor={{ false: '#D1D5DB', true: Colors.light.brand }}
              thumbColor="#fff"
            />
          </View>
          <View style={[styles.settingItem, { borderTopWidth: 1, borderTopColor: '#F3F4F6' }]}>
            <View>
              <Text style={styles.settingLabel}>SMS अलर्ट्स | SMS Alerts</Text>
              <Text style={styles.settingSubLabel}>जरूरी अपडेट्स के लिए</Text>
            </View>
            <Switch 
              value={smsAlerts} 
              onValueChange={setSmsAlerts} 
              trackColor={{ false: '#D1D5DB', true: Colors.light.brand }}
              thumbColor="#fff"
            />
          </View>
        </View>

        {/* Help Section */}
        <View style={styles.sectionHeader}>
          <Ionicons name="information-circle-outline" size={20} color={Colors.light.textSecondary} />
          <Text style={styles.sectionHeaderText}>सहायता और जानकारी | HELP</Text>
        </View>
        <View style={styles.card}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconCircle}>
                <Ionicons name="help-circle-outline" size={22} color={Colors.light.brand} />
            </View>
            <Text style={styles.menuText}>मदद और सहायता | Help & Support</Text>
            <Ionicons name="chevron-forward" size={20} color="#D1D5DB" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconCircle}>
                <Ionicons name="document-text-outline" size={22} color={Colors.light.brand} />
            </View>
            <Text style={styles.menuText}>जन सेवा के बारे में | About Jan Seva</Text>
            <Ionicons name="chevron-forward" size={20} color="#D1D5DB" />
          </TouchableOpacity>

          <TouchableOpacity 
  style={styles.menuItem}
  onPress={() => router.replace('/login')}
>
  <View style={[styles.menuIconCircle, { backgroundColor: '#FEE2E2' }]}>
      <Ionicons name="log-out-outline" size={22} color="#EF4444" />
  </View>
  <Text style={[styles.menuText, { color: '#EF4444' }]}>लॉग आउट | Logout</Text>
</TouchableOpacity>
        </View>

        <Text style={styles.versionText}>JAN SEVA V2.4.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#11181C',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFD7C4', // Matches the light orange in Figma
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#fff',
  },
  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: Colors.light.brand,
    padding: 6,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#fff',
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#11181C',
  },
  userPhone: {
    fontSize: 16,
    color: Colors.light.brand,
    marginTop: 4,
    fontWeight: '600',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 25,
    marginBottom: 10,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.textSecondary,
    marginLeft: 8,
    textTransform: 'uppercase',
  },
  languageToggle: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    marginHorizontal: 20,
    borderRadius: 25,
    padding: 4,
  },
  langButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 22,
  },
  langButtonActive: {
    backgroundColor: Colors.light.brand,
  },
  langText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.light.textSecondary,
  },
  langTextActive: {
    color: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 16,
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#11181C',
  },
  settingSubLabel: {
    fontSize: 12,
    color: Colors.light.textSecondary,
    marginTop: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  menuIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF7ED',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#374151',
  },
  versionText: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 12,
    color: '#9CA3AF',
    letterSpacing: 2,
  },
});