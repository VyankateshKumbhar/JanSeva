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
import { MaterialIcons } from "@expo/vector-icons";
import { Header } from "../../components/Header";
import { useRouter } from "expo-router";
export default function DeptDashboard() {
    const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* Dashboard Overview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dashboard Overview</Text>

          <View style={styles.grid}>
            <StatCard title="New" value="12" icon="fiber-new" color="#3b82f6" />
            <StatCard title="In Progress" value="7" icon="pending-actions" color="#f59e0b" />
            <StatCard title="Resolved" value="5" icon="check-circle" color="#10b981" />
            <StatCard title="Overdue" value="2" icon="priority-high" color="#ef4444" />
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.smallTitle}>Quick Actions</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ActionButton
  icon="assignment"
  label="Complaints"
  onPress={() => router.push("/Department/complaints")}
/>
              <ActionButton icon="engineering" label="Workers" />
            <ActionButton icon="trending-up" label="Escalations" />
          </ScrollView>
        </View>

        {/* Recent Complaints */}
        <View style={styles.section}>
          <View style={styles.rowBetween}>
            <Text style={styles.sectionTitle}>Recent Complaints</Text>
            <TouchableOpacity onPress={() => router.push("/Department/complaints")}>
  <Text style={styles.link}>View All</Text>
</TouchableOpacity>
          </View>

          <ComplaintCard
            title="C101 Garbage Collection"
            location="Ward 12, Main Street"
            status="Pending"
            icon="delete-outline"
          />

          <ComplaintCard
            title="C102 Streetlight Issue"
            location="Green Park Area"
            status="Assigned"
            icon="lightbulb-outline"
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------- COMPONENTS ---------- */

const StatCard = ({ title, value, icon, color }: any) => (
  <View style={styles.card}>
    <MaterialIcons name={icon} size={24} color={color} />
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{title}</Text>
  </View>
);

const ActionButton = ({ icon, label }: any) => (
  <TouchableOpacity style={styles.actionBtn}>
    <MaterialIcons name={icon} size={22} color="#d95d3a" />
    <Text style={styles.actionText}>{label}</Text>
  </TouchableOpacity>
);

const ComplaintCard = ({ title, location, status, icon }: any) => (
  <View style={styles.complaintCard}>
    <MaterialIcons name={icon} size={26} color="#555" />

    <View style={{ flex: 1, marginLeft: 10 }}>
      <Text style={styles.complaintTitle}>{title}</Text>
      <Text style={styles.complaintLocation}>{location}</Text>
    </View>

    <View style={styles.status}>
      <Text style={styles.statusText}>{status}</Text>
    </View>
  </View>
);

/* ---------- STYLES ---------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f6f6",
  },

  scrollContainer: {
    paddingBottom: 120,
    paddingTop: 10,
  },

  section: {
    paddingHorizontal: 20,
    marginTop: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },

  smallTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#6b7280",
    marginBottom: 10,
  },

  /* Grid */

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  /* Dashboard Cards */

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    justifyContent: "center",
    elevation: 2,
  },

  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 6,
  },

  statLabel: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 2,
  },

  /* Quick Actions */

  actionBtn: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    width: 95,
    elevation: 2,
  },

  actionText: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: "600",
  },

  /* Complaints */

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  link: {
    color: "#d95d3a",
    fontWeight: "600",
  },

  complaintCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    elevation: 2,
  },

  complaintTitle: {
    fontWeight: "bold",
    fontSize: 14,
  },

  complaintLocation: {
    fontSize: 12,
    color: "#6b7280",
  },

  status: {
    backgroundColor: "#fde68a",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },

  statusText: {
    fontSize: 11,
    fontWeight: "700",
  },
});