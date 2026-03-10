import React, { useState } from "react";
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
  const [lang, setLang] = useState<'en' | 'hi'>('en');

  // Translation Data for testing purposes
  const translations = {
    en: {
      status: "NEW",
      citizenTitle: "Citizen Info",
      nameLabel: "NAME",
      phoneLabel: "PHONE",
      locLabel: "LOCATION",
      complaintTitle: "Complaint Info",
      catLabel: "CATEGORY",
      category: "Water Leakage",
      descLabel: "DESCRIPTION",
      description: "Main pipe burst near the community center. Water has been leaking for 3 hours, causing flooding in the street.",
      photoLabel: "UPLOADED PHOTO",
      assignBtn: "Assign Worker",
      approve: "Approve",
      reject: "Reject",
    },
    hi: {
      status: "नया",
      citizenTitle: "नागरिक सूचना",
      nameLabel: "नाम",
      phoneLabel: "फोन",
      locLabel: "स्थान",
      complaintTitle: "शिकायत जानकारी",
      catLabel: "श्रेणी",
      category: "जल रिसाव",
      descLabel: "विवरण",
      description: "कम्युनिटी सेंटर के पास मुख्य पाइप फट गया। पानी 3 घंटे से बह रहा है, जिससे सड़क पर जलभराव हो गया है।",
      photoLabel: "अपलोड की गई फोटो",
      assignBtn: "कर्मचारी नियुक्त करें",
      approve: "स्वीकार करें",
      reject: "अस्वीकार करें",
    }
  };

  const t = translations[lang];

  return (
    <SafeAreaView style={styles.container}>
      
        {/* HEADER */}
        <ScreenHeader title="COMPLAINT DETAILS" />
      <ScrollView
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{ paddingBottom: 120 }}
>
        {/* CITIZEN INFO */}
        <Text style={styles.sectionTitle}>
          {t.citizenTitle}
        </Text>

        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.value}>Rajesh Kumar</Text>
            </View>

            <View>
              <Text style={styles.value}>+91 98765 43210</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <Text style={styles.value}>
            Ward 5, Shanti Nagar, Metro Pillar 42
          </Text>
        </View>

        {/* COMPLAINT INFO */}
        <Text style={styles.sectionTitle}>
          {t.complaintTitle}
        </Text>

        <View style={styles.card}>

          <View style={styles.categoryBadge}>
            <MaterialIcons name="water-drop" size={16} color="#e05a2a" />
            <Text style={styles.categoryText}>
              {t.category}
            </Text>
          </View>

          <Text style={styles.desc}>{t.description}</Text>

          <Text style={[styles.label, { marginTop: 15 }]}>
            {t.photoLabel}
          </Text>

          <View style={styles.imageBox}>
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzb70TO_53PRo9hQ_uh9i9wPrBO67U-k_99Q&s",
              }}
              style={styles.image}
            />

            <Text style={styles.imageTime}>
              Oct 24, 2023 · 10:30 AM
            </Text>
          </View>
        </View>

        {/* ASSIGN BUTTON */}
        <TouchableOpacity 
          style={styles.assignBtn} 
          onPress={() => router.push("/Department/assign_worker")}
        >
          <Ionicons name="person-add" size={20} color="#fff" />
          <Text style={styles.assignText}>
            {t.assignBtn}
          </Text>
        </TouchableOpacity>


      </ScrollView>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>
        <NavItem 
          icon="home-outline" 
          label="Home" 
          onPress={() => router.push("/Department/department_dashboard")} 
        />
        <NavItem 
          icon="document-text-outline" 
          label="Complaints" 
          active 
          onPress={() => router.push("/Department/complaints")} 
        />
        <NavItem icon="people-outline" label="Workers" />
        <NavItem 
          icon="person-outline" 
          label="Profile" 
          onPress={() => router.push("/profile")} 
        />
      </View>
    </SafeAreaView>
  );
}

/* NAV ITEM COMPONENT */
const NavItem = ({ icon, label, active, onPress }: any) => (
  <TouchableOpacity style={styles.navItem} onPress={onPress}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F6F6",
  },
  langTabs: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 10,
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
    paddingBottom: 2,
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
    marginTop:10,
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  label: {
    fontSize: 12,
    color: "#64748B",
    fontWeight: "600",
  },
  value: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1E293B",
    marginTop: 2,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 12,
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
    marginTop: 8,
    color: "#374151",
    lineHeight: 20,
    fontSize: 14,
  },
  imageBox: {
    marginTop: 12,
  },
  image: {
    width: "100%",
    height: 200,
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
    elevation: 3,
  },
  assignText: {
    color: "#fff",
    fontWeight: "700",
    marginLeft: 8,
    fontSize: 16,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginBottom: 15,
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
    marginHorizontal: 20,
    marginBottom: 100, // Extra space for BottomNav
    padding: 16,
    borderRadius: 20,
    alignItems: "center",
    elevation: 2,
  },
  trackTitle: {
    fontWeight: "700",
    color: "#1E293B",
  },
  trackSub: {
    fontSize: 12,
    color: "#6B7280",
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
    marginTop: 4,
  },
});