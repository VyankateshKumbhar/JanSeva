import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
// FIXED: Updated SafeAreaView import
import { SafeAreaView } from "react-native-safe-area-context"; 
import { Megaphone, Info, Phone, Plus, Home as HomeIcon, ClipboardList, User, Settings } from "lucide-react-native";
import { Colors } from "../constants/theme";
import { Header } from "../components/Header"; 
import { StatusCard } from "../components/StatusCard";
import { ActivityCard } from "../components/ActivityCard";
import { useRouter } from "expo-router";
import { Stack } from "expo-router";

interface QuickLinkProps {
  icon: React.ReactNode;
  title: string;
  sub: string;
}

const theme = Colors.light;
const { width } = Dimensions.get("window");

export default function JanSevaDashboard() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
    <SafeAreaView
  style={[styles.container, { backgroundColor: theme.background }]}
  edges={['left', 'right']}
>
      <Header />

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>
            Namaste, <Text style={{ color: theme.brand }}>Rahul</Text>
          </Text>
          <Text style={styles.subText}>
            Welcome back to your citizen portal.
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.reportCard, { backgroundColor: theme.brand }]}
          activeOpacity={0.8}
          // FIXED: Path casting
          onPress={() => router.push("/complaint_form" as any)} 
        >
          <View>
            <Text style={styles.reportTitle}>Report New Complaint</Text>
            <Text style={styles.reportSubTitle}>शिकायत दर्ज करें</Text>
          </View>
          <View style={styles.megaphoneCircle}>
            <Megaphone color="white" size={32} />
          </View>
        </TouchableOpacity>

        <View style={styles.statusRow}>
          <StatusCard
            label="Resolved / सुलझाया गया"
            count="12"
            color={theme.success}
          />
          <StatusCard
            label="In Progress / प्रगति पर"
            count="02"
            color={theme.brand}
          />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Recent Activity / हाल की गतिविधि
          </Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2 ACTIVE</Text>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.activityScroll}
        >
          <ActivityCard
            tag="PENDING"
            time="2h ago"
            title="Pothole - Sector 4"
            desc="Road maintenance request"
            progress={0.4}
            color={theme.warning}
          />
          <ActivityCard
            tag="UNDER REVIEW"
            title="Street Light"
            desc="Power outage in Area B"
            progress={0.8}
            color={theme.info}
          />
        </ScrollView>

        <Text style={styles.sectionTitle}>Quick Links / त्वरित लिंक</Text>
        <QuickLinkItem
          icon={<Info color={theme.brand} size={20} />}
          title="Government Schemes"
          sub="सरकारी योजनाएं जानें"
        />
        <QuickLinkItem
          icon={<Phone color={theme.brand} size={20} />}
          title="Emergency Contacts"
          sub="आपातकालीन संपर्क"
        />
      </ScrollView>

      {/* FIXED BOTTOM NAV */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push("/" as any)}>
          <HomeIcon color={theme.brand} size={24} />
          <Text style={[styles.navLabel, { color: theme.brand }]}>HOME</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem} onPress={() => router.push("/issues" as any)}>
          <ClipboardList color="#9CA3AF" size={24} />
          <Text style={styles.navLabel}>ISSUES</Text>
        </TouchableOpacity>

        <View style={{ width: 60 }} />

        <TouchableOpacity style={styles.navItem} onPress={() => router.push("/profile" as any)}>
          <User color="#9CA3AF" size={24} />
          <Text style={styles.navLabel}>PROFILE</Text>
        </TouchableOpacity>

        <TouchableOpacity 
  style={styles.navItem} 
  activeOpacity={1} // Prevents the "fade" effect when clicked
  onPress={() => { /* Do nothing */ }}
>
  <Settings color="#9CA3AF" size={24} />
  <Text style={styles.navLabel}>SETTINGS</Text>
</TouchableOpacity>
      </View>

    </SafeAreaView>
    </>
  );
}

const QuickLinkItem = ({ icon, title, sub }: QuickLinkProps) => (
  <TouchableOpacity style={styles.linkItem}>
    <View style={styles.linkLeft}>
      <View style={styles.iconCircle}>{icon}</View>
      <View>
        <Text style={styles.linkTitle}>{title}</Text>
        <Text style={styles.linkSub}>{sub}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { padding: 20, paddingBottom: 100 },
  welcomeSection: { marginVertical: 24 },
  welcomeText: { fontSize: 34, fontWeight: "bold", color: "#1F2937" },
  subText: { color: "#6B7280", fontSize: 16, marginTop: 4 },
  reportCard: {
    borderRadius: 16,
    padding: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  reportTitle: { color: "white", fontSize: 24, fontWeight: "bold" },
  reportSubTitle: { color: "white", fontSize: 18, opacity: 0.9 },
  megaphoneCircle: {
    backgroundColor: "rgba(255,255,255,0.25)",
    padding: 15,
    borderRadius: 50,
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 12,
  },
  badge: {
    backgroundColor: "#FEE2E2",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: { color: "#EF4444", fontSize: 11, fontWeight: "bold" },
  activityScroll: { marginBottom: 28 },
  linkItem: {
    backgroundColor: "#FFF7F5",
    flexDirection: "row",
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#FEE2E2",
  },
  linkLeft: { flexDirection: "row", alignItems: "center" },
  iconCircle: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 12,
    marginRight: 14,
  },
  linkTitle: { fontSize: 17, fontWeight: "600", color: "#1F2937" },
  linkSub: { fontSize: 13, color: "#6B7280", marginTop: 2 },
  bottomNav: {
    flexDirection: "row",
    height: 75,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 15,
  },
  navItem: { alignItems: "center", justifyContent: "center" },
  navLabel: { fontSize: 10, fontWeight: "bold", marginTop: 4, color: "#9CA3AF" },
  fab: {
    position: "absolute",
    bottom: 30,
    left: (width / 2) - 34,
    width: 68,
    height: 68,
    borderRadius: 34,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    zIndex: 2000,
    borderWidth: 5,
    borderColor: "white",
  },
});