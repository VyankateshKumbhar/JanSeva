import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ScreenHeader from "../../components/screen_header";
import { useRouter } from "expo-router";
export default function ComplaintDetails() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        {/* HEADER */}
        <ScreenHeader title="COMPLAINT DETAILS" />

        {/* LANGUAGE TABS */}
        <View style={styles.langTabs}>
          <Text style={[styles.langText, styles.activeLang]}>English</Text>
          <Text style={styles.langText}>हिंदी</Text>
        </View>

        {/* STATUS BADGE */}
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>● NEW / नया</Text>
        </View>

        {/* CITIZEN INFO */}
        <Text style={styles.sectionTitle}>
          Citizen Info / नागरिक सूचना
        </Text>

        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.label}>NAME / नाम</Text>
              <Text style={styles.value}>Rajesh Kumar</Text>
            </View>

            <View>
              <Text style={styles.label}>PHONE / फोन</Text>
              <Text style={styles.value}>+91 98765 43210</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.label}>LOCATION / स्थान</Text>
          <Text style={styles.value}>
            Ward 5, Shanti Nagar, Metro Pillar 42
          </Text>
        </View>

        {/* COMPLAINT INFO */}
        <Text style={styles.sectionTitle}>
          Complaint Info / शिकायत जानकारी
        </Text>

        <View style={styles.card}>
          <Text style={styles.label}>CATEGORY / श्रेणी</Text>

          <View style={styles.categoryBadge}>
            <MaterialIcons name="water-drop" size={16} color="#e05a2a" />
            <Text style={styles.categoryText}>
              Water Leakage / जल रिसाव
            </Text>
          </View>

          <Text style={[styles.label, { marginTop: 15 }]}>
            DESCRIPTION / विवरण
          </Text>

          <Text style={styles.desc}>
            Main pipe burst near the community center. Water has been leaking
            for 3 hours, causing flooding in the street.
          </Text>

          <Text style={[styles.label, { marginTop: 15 }]}>
            UPLOADED PHOTO / अपलोड की गई फोटो
          </Text>

          <View style={styles.imageBox}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1504215680853-026ed2a45def",
              }}
              style={styles.image}
            />

            <Text style={styles.imageTime}>
              Oct 24, 2023 · 10:30 AM
            </Text>
          </View>
        </View>

        {/* ASSIGN BUTTON */}
        <TouchableOpacity style={styles.assignBtn} onPress={() => router.push("/Department/assign_worker")}>
          <Ionicons name="person-add" size={20} color="#fff" />
          <Text style={styles.assignText}>
            Assign Worker / कर्मचारी नियुक्त करें
          </Text>
        </TouchableOpacity>

        {/* APPROVE REJECT */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.approveBtn}>
            <Ionicons name="checkmark-circle" size={20} color="#1f7a3f" />
            <Text style={styles.approveText}>Approve</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.rejectBtn}>
            <Ionicons name="close-circle" size={20} color="#c23b3b" />
            <Text style={styles.rejectText}>Reject</Text>
          </TouchableOpacity>
        </View>

        {/* TRACK WORKER */}
        <TouchableOpacity style={styles.trackCard}>
          <MaterialIcons name="map" size={24} color="#e05a2a" />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.trackTitle}>Track Worker Progress</Text>
            <Text style={styles.trackSub}>
              Available after assignment
            </Text>
          </View>

          <Ionicons name="chevron-forward" size={22} color="#999" />
        </TouchableOpacity>

      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>
        <NavItem icon="home-outline" label="Home" />
        <NavItem icon="document-text-outline" label="Complaints" active />
        <NavItem icon="people-outline" label="Workers" />
        <NavItem icon="person-outline" label="Profile" />
      </View>
    </SafeAreaView>
  );
}

/* NAV ITEM */
const NavItem = ({ icon, label, active }: any) => (
  <TouchableOpacity style={styles.navItem}>
    <Ionicons
      name={icon}
      size={22}
      color={active ? "#e05a2a" : "#94A3B8"}
    />
    <Text style={[styles.navText, active && { color: "#e05a2a" }]}>
      {label}
    </Text>
  </TouchableOpacity>
);

/* STYLES */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F6F6",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },

  headerTitle: {
    fontWeight: "600",
    fontSize: 16,
  },

  langTabs: {
    flexDirection: "row",
    paddingHorizontal: 20,
  },

  langText: {
    marginRight: 20,
    fontSize: 16,
    color: "#666",
  },

  activeLang: {
    color: "#e05a2a",
    borderBottomWidth: 2,
    borderBottomColor: "#e05a2a",
  },

  statusBadge: {
    backgroundColor: "#fde6df",
    alignSelf: "flex-start",
    margin: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusText: {
    color: "#e05a2a",
    fontWeight: "600",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginHorizontal: 20,
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
  },

  label: {
    fontSize: 12,
    color: "#64748B",
  },

  value: {
    fontSize: 15,
    fontWeight: "600",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 10,
  },

  categoryBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fde6df",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 6,
  },

  categoryText: {
    marginLeft: 6,
    color: "#e05a2a",
    fontWeight: "600",
  },

  desc: {
    marginTop: 6,
    color: "#374151",
    lineHeight: 20,
  },

  imageBox: {
    marginTop: 10,
  },

  image: {
    width: "100%",
    height: 180,
    borderRadius: 14,
  },

  imageTime: {
    position: "absolute",
    bottom: 8,
    right: 10,
    backgroundColor: "#00000080",
    color: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    fontSize: 11,
  },

  assignBtn: {
    flexDirection: "row",
    backgroundColor: "#e05a2a",
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },

  assignText: {
    color: "#fff",
    fontWeight: "700",
    marginLeft: 8,
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },

  approveBtn: {
    flexDirection: "row",
    backgroundColor: "#D1FAE5",
    padding: 14,
    borderRadius: 30,
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
  },

  approveText: {
    marginLeft: 6,
    color: "#1f7a3f",
    fontWeight: "600",
  },

  rejectBtn: {
    flexDirection: "row",
    backgroundColor: "#FEE2E2",
    padding: 14,
    borderRadius: 30,
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
  },

  rejectText: {
    marginLeft: 6,
    color: "#c23b3b",
    fontWeight: "600",
  },

  trackCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 20,
    padding: 16,
    borderRadius: 20,
    alignItems: "center",
    elevation: 2,
  },

  trackTitle: {
    fontWeight: "700",
  },

  trackSub: {
    fontSize: 12,
    color: "#6B7280",
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#eee",
  },

  navItem: {
    alignItems: "center",
  },

  navText: {
    fontSize: 11,
    color: "#94A3B8",
  },
});