import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Megaphone, Info, Phone, Home, Plus } from "lucide-react-native";
import { Colors } from "../constants/theme";

// Ensure these components use 'export const' in their own files
import { StatusCard } from "../components/StatusCard";
import { ActivityCard } from "../components/ActivityCard";

const theme = Colors.light;

export default function JanSevaDashboard() {
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={[styles.logoIcon, { backgroundColor: theme.brand }]}>
            <Home color="white" size={16} />
          </View>
          <Text style={[styles.logoText, { color: theme.brand }]}>
            JAN SEVA
          </Text>
        </View>
        <View style={styles.langSwitch}>
          <Text style={styles.langTextActive}>HI</Text>
          <Text style={styles.langDivider}>|</Text>
          <Text style={styles.langText}>EN</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
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

      {/* FAB: Stays on this page only */}
      <TouchableOpacity style={[styles.fab, { backgroundColor: theme.brand }]}>
        <Plus color="white" size={34} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const QuickLinkItem = ({ icon, title, sub }: any) => (
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
  scrollContent: { padding: 20, paddingBottom: 160 }, // Extra padding for Nav Bar
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  logoContainer: { flexDirection: "row", alignItems: "center" },
  logoIcon: { padding: 4, borderRadius: 4, marginRight: 8 },
  logoText: { fontWeight: "900", fontSize: 18, letterSpacing: 0.5 },
  langSwitch: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#3B82F6",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignItems: "center",
  },
  langTextActive: { color: "#3B82F6", fontWeight: "bold", fontSize: 12 },
  langText: { color: "#9CA3AF", fontSize: 12 },
  langDivider: { marginHorizontal: 4, color: "#E5E7EB" },
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
  fab: {
    position: "absolute",
    bottom: 45,
    alignSelf: "center",
    width: 68,
    height: 68,
    borderRadius: 34,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    zIndex: 1100,
    borderWidth: 5,
    borderColor: "white",
  },
});
