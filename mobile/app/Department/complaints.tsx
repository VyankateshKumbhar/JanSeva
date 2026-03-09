import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function ComplaintsScreen() {
  const [activeTab, setActiveTab] = useState("Pending");

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      {/* STATUS TABS */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabs}
      >
        {["Pending", "Assigned", "In Progress", "Completed"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={styles.tabItem}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>

            {activeTab === tab && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* FILTERS */}
      <View style={styles.filters}>
        <FilterChip label="All Wards" icon="chevron-down" />
        <FilterChip label="Today" icon="calendar-outline" />
        <FilterChip label="Priority" icon="alert-circle-outline" />
      </View>

      {/* LIST */}
      <ScrollView style={{ paddingHorizontal: 16 }}>

        <ComplaintCard
          id="C101"
          title="Garbage / कचरा"
          location="Ward 5, Krishna Nagar"
          time="Reported: 2h ago"
          status="PENDING"
          statusColor="#F59E0B"
        />

        <ComplaintCard
          id="C102"
          title="Road Damage / सड़क क्षति"
          location="Ward 3, Subhash Road"
          time="Engineer: Rajesh Kumar"
          status="ASSIGNED"
          statusColor="#3B82F6"
        />

        <ComplaintCard
          id="C105"
          title="Street Light / स्ट्रीट लाइट"
          location="Ward 12, Civil Lines"
          time="Repair ongoing"
          status="IN PROGRESS"
          statusColor="#6366F1"
        />

        <ComplaintCard
          id="C098"
          title="Water Leak / पानी का रिसाव"
          location="Ward 8"
          time="Reason: Incorrect location provided"
          status="REJECTED"
          statusColor="#EF4444"
        />

      </ScrollView>

      {/* FLOAT BUTTON */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNav}>
        <NavItem icon="home-outline" label="Home" />
        <NavItem icon="list" label="Complaints" active />
        <NavItem icon="bar-chart-outline" label="Reports" />
        <NavItem icon="person-outline" label="Profile" />
      </View>
    </SafeAreaView>
  );
}

/* ---------- COMPONENTS ---------- */

const FilterChip = ({ label, icon }: any) => (
  <TouchableOpacity style={styles.chip}>
    <Text style={styles.chipText}>{label}</Text>
    <Ionicons name={icon} size={16} style={{ marginLeft: 6 }} />
  </TouchableOpacity>
);

const ComplaintCard = ({
  id,
  title,
  location,
  time,
  status,
  statusColor,
}: any) => (
  <View style={styles.card}>
    <View style={styles.cardTop}>
      <View style={styles.idBadge}>
        <Text style={styles.idText}>{id}</Text>
      </View>

      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>

      <View style={[styles.statusBadge, { backgroundColor: `${statusColor}20` }]}>
        <Text style={[styles.statusText, { color: statusColor }]}>{status}</Text>
      </View>
    </View>

    <View style={styles.row}>
      <Ionicons name="location-outline" size={16} color="#6B7280" />
      <Text style={styles.infoText}>{location}</Text>
    </View>

    <View style={styles.row}>
      <Ionicons name="time-outline" size={16} color="#6B7280" />
      <Text style={styles.infoText}>{time}</Text>
    </View>

    <View style={styles.divider} />

    <TouchableOpacity style={styles.details}>
      <Text style={styles.detailsText}>View Details</Text>
      <Ionicons name="chevron-forward" size={16} color="#e05a2a" />
    </TouchableOpacity>
  </View>
);

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

/* ---------- STYLES ---------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F6F6",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
  },

  subtitle: {
    fontSize: 12,
    color: "#e05a2a",
  },

  tabs: {
    paddingHorizontal: 10,
  },

  tabItem: {
    marginHorizontal: 12,
    paddingBottom: 10,
  },

  tabText: {
    fontSize: 15,
    color: "#64748B",
  },

  activeTabText: {
    color: "#e05a2a",
    fontWeight: "600",
  },

  tabIndicator: {
    height: 3,
    backgroundColor: "#e05a2a",
    marginTop: 6,
    borderRadius: 2,
  },

  filters: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginVertical: 10,
  },

  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3E2DC",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 10,
  },

  chipText: {
    fontSize: 13,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,
    elevation: 2,
  },

  cardTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  idBadge: {
    backgroundColor: "#e05a2a",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },

  idText: {
    color: "#fff",
    fontWeight: "600",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
  },

  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  statusText: {
    fontSize: 12,
    fontWeight: "700",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  infoText: {
    marginLeft: 6,
    color: "#64748B",
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 10,
  },

  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  detailsText: {
    color: "#e05a2a",
    marginRight: 4,
    fontWeight: "600",
  },

  fab: {
    position: "absolute",
    bottom: 90,
    right: 20,
    backgroundColor: "#e05a2a",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
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