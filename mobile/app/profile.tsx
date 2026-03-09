import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch, SafeAreaView, Platform } from 'react-native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import { Colors } from '../constants/theme';
import { useRouter } from 'expo-router';
import ScreenHeader from "../components/screen_header";

// 1. Define your Translation Data
const translations = {
  en: {
    header: "PROFILE & SETTINGS",
    name: "Rahul",
    editProfile: "Edit Profile",
    langSection: "App Language",
    settingsSection: "Settings",
    notifications: "Push Notifications",
    notificationsDesc: "Receive alerts on your phone",
    sms: "SMS Updates",
    smsDesc: "Important status changes via SMS",
    supportSection: "Support",
    help: "Help & Support",
    helpDesc: "Get assistance",
    privacy: "Privacy Policy",
    privacyDesc: "How we use data",
    about: "About Jan Seva",
    aboutDesc: "Learn more about us",
    logout: "Logout",
    version: "JAN SEVA V2.4.0 • CRAFTED WITH CARE"
  },
  hi: {
    header: "प्रोफ़ाइल और सेटिंग्स",
    name: "राहुल",
    editProfile: "प्रोफ़ाइल संपादित करें",
    langSection: "ऐप की भाषा",
    settingsSection: "सेटिंग्स",
    notifications: "पुश नोटिफिकेशन",
    notificationsDesc: "अपने फोन पर अलर्ट प्राप्त करें",
    sms: "SMS अपडेट",
    smsDesc: "SMS के माध्यम से महत्वपूर्ण अपडेट",
    supportSection: "सहायता",
    help: "मदद और सहायता",
    helpDesc: "सहायता प्राप्त करें",
    privacy: "गोपनीयता नीति",
    privacyDesc: "हम डेटा का उपयोग कैसे करते हैं",
    about: "जन सेवा के बारे में",
    aboutDesc: "हमारे बारे में और जानें",
    logout: "लॉग आउट",
    version: "जन सेवा V2.4.0 • गर्व के साथ निर्मित"
  }
};

export default function ProfileScreen() {
  const [appAlerts, setAppAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [language, setLanguage] = useState<'en' | 'hi'>('hi');
  const router = useRouter();

  const theme = Colors.light;
  
  // 2. Access current strings based on state
  const t = translations[language];

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title={t.header} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Profile Header Card */}
        <View style={styles.headerCard}>
          <View style={styles.profileInfo}>
            <View style={styles.avatarContainer}>
              <View style={[styles.avatarPlaceholder, { backgroundColor: '#FFEDD5' }]}>
                <Ionicons name="person" size={50} color={theme.brand} />
              </View>
              <TouchableOpacity style={styles.editIcon}>
                <MaterialIcons name="camera-alt" size={14} color="#fff" />
              </TouchableOpacity>
            </View>
            
            <View style={styles.nameSection}>
              <Text style={styles.userName}>{t.name}</Text>
              <View style={styles.phoneBadge}>
                <Feather name="phone" size={12} color={theme.brand} />
                <Text style={styles.userPhone}>+91 98765-43210</Text>
              </View>
            </View>
          </View>
          
          <TouchableOpacity style={styles.editProfileBtn}>
            <Text style={styles.editProfileText}>{t.editProfile}</Text>
          </TouchableOpacity>
        </View>

        {/* Language Selection */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{t.langSection}</Text>
          </View>
          <View style={styles.languageContainer}>
            <TouchableOpacity 
              activeOpacity={0.7}
              style={[styles.langCard, language === 'hi' && styles.langCardActive]} 
              onPress={() => setLanguage('hi')}
            >
              <Text style={styles.langEmoji}>🇮🇳</Text>
              <Text style={[styles.langLabel, language === 'hi' && styles.langTextActive]}>हिन्दी</Text>
              {language === 'hi' && <Ionicons name="checkmark-circle" size={18} color="#fff" />}
            </TouchableOpacity>

            <TouchableOpacity 
              activeOpacity={0.7}
              style={[styles.langCard, language === 'en' && styles.langCardActive]} 
              onPress={() => setLanguage('en')}
            >
              
              <Text style={[styles.langLabel, language === 'en' && styles.langTextActive]}>English</Text>
              {language === 'en' && <Ionicons name="checkmark-circle" size={18} color="#fff" />}
            </TouchableOpacity>
          </View>
        </View>

        {/* Settings Group */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{t.settingsSection}</Text>
          </View>
          
          <View style={styles.settingsCard}>
            <View style={styles.settingRow}>
              <View style={[styles.iconBox, { backgroundColor: '#EEF2FF' }]}>
                <Ionicons name="notifications" size={20} color="#6366F1" />
              </View>
              <View style={styles.settingTextContent}>
                <Text style={styles.settingTitle}>{t.notifications}</Text>
                <Text style={styles.settingDesc}>{t.notificationsDesc}</Text>
              </View>
              <Switch value={appAlerts} onValueChange={setAppAlerts} trackColor={{ false: '#E2E8F0', true: theme.brand }} thumbColor="#fff" />
            </View>
            <View style={styles.divider} />
            <View style={styles.settingRow}>
              <View style={[styles.iconBox, { backgroundColor: '#ECFDF5' }]}>
                <Ionicons name="chatbox-ellipses" size={20} color="#10B981" />
              </View>
              <View style={styles.settingTextContent}>
                <Text style={styles.settingTitle}>{t.sms}</Text>
                <Text style={styles.settingDesc}>{t.smsDesc}</Text>
              </View>
              <Switch value={smsAlerts} onValueChange={setSmsAlerts} trackColor={{ false: '#E2E8F0', true: theme.brand }} thumbColor="#fff" />
            </View>
          </View>
        </View>

        {/* Support Group */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{t.supportSection}</Text>
          </View>
          <View style={styles.settingsCard}>
            <MenuLink icon="help-buoy" label={t.help} desc={t.helpDesc} color="#F59E0B" />
            <View style={styles.divider} />
            <MenuLink icon="shield-checkmark" label={t.privacy} desc={t.privacyDesc} color="#3B82F6" />
            <View style={styles.divider} />
            <MenuLink icon="information-circle" label={t.about} desc={t.aboutDesc} color={theme.brand} />
          </View>
        </View>

        {/* Logout Button */}
        <TouchableOpacity 
          activeOpacity={0.8}
          style={styles.logoutBtn}
          onPress={() => router.replace('/Auth/login' as any)}
        >
          <Ionicons name="log-out-outline" size={22} color="#EF4444" />
          <Text style={styles.logoutText}>{t.logout}</Text>
        </TouchableOpacity>

        <Text style={styles.versionText}>{t.version}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

// Helper Component for Menu Links
const MenuLink = ({ icon, label, desc, color }: any) => (
  <TouchableOpacity style={styles.settingRow}>
    <View style={[styles.iconBox, { backgroundColor: `${color}15` }]}>
      <Ionicons name={icon} size={20} color={color} />
    </View>
    <View style={styles.settingTextContent}>
      <Text style={styles.settingTitle}>{label}</Text>
      <Text style={styles.settingDesc}>{desc}</Text>
    </View>
    <Ionicons name="chevron-forward" size={18} color="#CBD5E1" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  scrollContent: { paddingBottom: 40, paddingHorizontal: 16 },
  headerCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10 },
      android: { elevation: 4 }
    })
  },
  profileInfo: { flexDirection: 'row', alignItems: 'center' },
  avatarContainer: { position: 'relative' },
  avatarPlaceholder: { width: 75, height: 75, borderRadius: 37.5, justifyContent: 'center', alignItems: 'center', borderWidth: 3, borderColor: '#F8FAFC' },
  editIcon: { position: 'absolute', bottom: 0, right: 0, backgroundColor: Colors.light.brand, padding: 5, borderRadius: 12, borderWidth: 2, borderColor: '#fff' },
  nameSection: { marginLeft: 15 },
  userName: { fontSize: 20, fontWeight: '800', color: '#1E293B' },
  phoneBadge: { flexDirection: 'row', alignItems: 'center', marginTop: 4, backgroundColor: '#FFF7ED', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  userPhone: { fontSize: 13, color: Colors.light.brand, fontWeight: '700', marginLeft: 5 },
  editProfileBtn: { backgroundColor: '#F1F5F9', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 10 },
  editProfileText: { fontSize: 12, color: '#64748B', fontWeight: '700' },
  sectionContainer: { marginTop: 25 },
  sectionHeader: { marginBottom: 12, marginLeft: 4 },
  sectionHeaderText: { fontSize: 13, fontWeight: '800', color: '#94A3B8', letterSpacing: 1, textTransform: 'uppercase' },
  languageContainer: { flexDirection: 'row', gap: 12 },
  langCard: { flex: 1, backgroundColor: '#fff', borderRadius: 16, padding: 16, flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderColor: '#F1F5F9' },
  langCardActive: { backgroundColor: Colors.light.brand, borderColor: Colors.light.brand },
  langEmoji: { fontSize: 20, marginRight: 10 },
  langLabel: { fontSize: 15, fontWeight: '700', color: '#475569', flex: 1 },
  langTextActive: { color: '#fff' },
  settingsCard: { backgroundColor: '#fff', borderRadius: 20, overflow: 'hidden' },
  settingRow: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  iconBox: { width: 42, height: 42, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  settingTextContent: { flex: 1 },
  settingTitle: { fontSize: 15, fontWeight: '700', color: '#1E293B' },
  settingDesc: { fontSize: 12, color: '#64748B', marginTop: 2 },
  divider: { height: 1, backgroundColor: '#F8FAFC', marginHorizontal: 16 },
  logoutBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FEF2F2', marginTop: 30, paddingVertical: 16, borderRadius: 16, borderWidth: 1, borderColor: '#FEE2E2' },
  logoutText: { marginLeft: 10, color: '#EF4444', fontSize: 16, fontWeight: '700' },
  versionText: { textAlign: 'center', marginTop: 30, fontSize: 10, color: '#94A3B8', fontWeight: '700', letterSpacing: 1.5 }
});