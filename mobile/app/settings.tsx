import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { User, Bell, Languages, ShieldCheck, LogOut, ChevronRight, Moon } from "lucide-react-native";
import { Colors } from "../constants/theme";
import { Header } from "../components/Header";
import { useRouter } from "expo-router";

const theme = Colors.light;

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]} edges={['top']}>
      <Header />
      
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Settings / सेटिंग्स</Text>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Account / खाता</Text>
          <SettingItem 
            icon={<User color={theme.brand} size={22} />} 
            label="Edit Profile" 
            onPress={() => {}} 
          />
          <SettingItem 
            icon={<ShieldCheck color={theme.brand} size={22} />} 
            label="Privacy & Security" 
            onPress={() => {}} 
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Preferences / प्राथमिकताएं</Text>
          <SettingItem 
            icon={<Languages color={theme.brand} size={22} />} 
            label="Language / भाषा" 
            value="Hindi (HI)"
            onPress={() => {}} 
          />
          <SettingItem 
            icon={<Bell color={theme.brand} size={22} />} 
            label="Notifications" 
            onPress={() => {}} 
          />
          <SettingItem 
            icon={<Moon color={theme.brand} size={22} />} 
            label="Dark Mode" 
            value="Off"
            onPress={() => {}} 
          />
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={() => router.replace("/login" as any)}>
          <LogOut color="#EF4444" size={22} />
          <Text style={styles.logoutText}>Log Out / लॉग आउट</Text>
        </TouchableOpacity>
        
        <Text style={styles.version}>JanSeva v1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

// Sub-component for individual settings rows
const SettingItem = ({ icon, label, value, onPress }: any) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <View style={styles.itemLeft}>
      <View style={styles.iconCircle}>{icon}</View>
      <Text style={styles.itemLabel}>{label}</Text>
    </View>
    <View style={styles.itemRight}>
      {value && <Text style={styles.valueText}>{value}</Text>}
      <ChevronRight color="#9CA3AF" size={20} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", color: "#1F2937", marginBottom: 25 },
  section: { marginBottom: 30 },
  sectionLabel: { fontSize: 14, fontWeight: "bold", color: "#9CA3AF", textTransform: "uppercase", marginBottom: 10, letterSpacing: 1 },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  itemLeft: { flexDirection: "row", alignItems: "center" },
  iconCircle: { width: 40, height: 40, borderRadius: 20, backgroundColor: "#F3F4F6", justifyContent: "center", alignItems: "center", marginRight: 15 },
  itemLabel: { fontSize: 16, color: "#374151", fontWeight: "500" },
  itemRight: { flexDirection: "row", alignItems: "center" },
  valueText: { color: "#6B7280", marginRight: 8, fontSize: 14 },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FEF2F2",
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
  },
  logoutText: { color: "#EF4444", fontWeight: "bold", marginLeft: 10, fontSize: 16 },
  version: { textAlign: "center", color: "#9CA3AF", marginTop: 30, fontSize: 12 },
});