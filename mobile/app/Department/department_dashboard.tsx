import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Header } from "../../components/Header";
import { useRouter } from "expo-router";

export default function DeptDashboard() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
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

            <ActionButton
              icon="engineering"
              label="Workers"
            />

            <ActionButton
              icon="trending-up"
              label="Escalations"
            />
          </ScrollView>
        </View>

        {/* Recent Complaints */}
        <View style={styles.section}>
          <View style={styles.rowBetween}>
            <Text style={styles.sectionTitle}>Recent Complaints</Text>

            <TouchableOpacity
              onPress={() => router.push("/Department/complaints")}
            >
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

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <NavItem
          icon="home-outline"
          label="Home"
          active
          onPress={() => router.push("/Department/department_dashboard")}
        />

        <NavItem
          icon="document-text-outline"
          label="Complaints"
          onPress={() => router.push("/Department/complaints")}
        />

        <NavItem
          icon="people-outline"
          label="Workers"
        />

        <NavItem
          icon="person-outline"
          label="Profile"
          onPress={() => router.push("/profile")}
        />
      </View>
    </SafeAreaView>
  );
}

/* COMPONENTS */

const StatCard = ({ title, value, icon, color }: any) => (
  <View style={styles.card}>
    <MaterialIcons name={icon} size={28} color={color} />
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{title}</Text>
  </View>
);

const ActionButton = ({ icon, label, onPress }: any) => (
  <TouchableOpacity style={styles.actionBtn} onPress={onPress}>
    <MaterialIcons name={icon} size={26} color="#e05a2a" />
    <Text style={styles.actionText}>{label}</Text>
  </TouchableOpacity>
);

const ComplaintCard = ({ title, location, status, icon }: any) => {
  const getStatusColor = () => {
    if (status === "Pending") return "#FDE68A";
    if (status === "Assigned") return "#BFDBFE";
    if (status === "Resolved") return "#BBF7D0";
    return "#E5E7EB";
  };

  return (
    <View style={styles.complaintCard}>
      <MaterialIcons name={icon} size={26} color="#6B7280" />

      <View style={{ flex: 1, marginLeft: 12 }}>
        <Text style={styles.complaintTitle}>{title}</Text>
        <Text style={styles.complaintLocation}>{location}</Text>
      </View>

      <View style={[styles.status, { backgroundColor: getStatusColor() }]}>
        <Text style={styles.statusText}>{status}</Text>
      </View>
    </View>
  );
};

const NavItem = ({
  icon,
  label,
  active = false,
  onPress,
}: {
  icon: any;
  label: string;
  active?: boolean;
  onPress?: () => void;
}) => (
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

/* STYLES */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F6F6",
  },

  scrollContainer: {
    paddingBottom: 120,
  },

  section: {
    paddingHorizontal: 20,
    marginTop: 22,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    color: "#1E293B",
  },

  smallTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#6B7280",
    marginBottom: 10,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    marginBottom: 12,
    elevation: 4,
  },

  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 6,
    color: "#1E293B",
  },

  statLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },

  actionBtn: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 18,
    width: 100,
    elevation: 4,
  },

  actionText: {
    fontSize: 12,
    marginTop: 6,
    fontWeight: "600",
    color: "#374151",
  },

  complaintCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 18,
    marginBottom: 12,
    elevation: 4,
  },

  complaintTitle: {
    fontWeight: "700",
    fontSize: 14,
    color: "#1E293B",
  },

  complaintLocation: {
    fontSize: 12,
    color: "#6B7280",
  },

  status: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },

  statusText: {
    fontSize: 11,
    fontWeight: "700",
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  link: {
    color: "#e05a2a",
    fontWeight: "600",
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#eee",
    elevation: 10,
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