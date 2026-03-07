import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";
import { ArrowLeft, Bell, Search, MapPin, Clock } from "lucide-react-native";
import { useRouter } from "expo-router";
import { Colors } from "../constants/theme";

const theme = Colors.light;

export default function MyGrievancesScreen() {
  const router = useRouter();

  const reports = [
    {
      id: "1",
      title: "Deep Pothole",
      location: "MG Road, North Sector",
      status: "PENDING",
      time: "SUBMITTED 2H AGO",
      image: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded",
    },
    {
      id: "2",
      title: "Garbage Overflow",
      location: "Central Market Square",
      status: "IN PROGRESS",
      time: "SUBMITTED OCT 24, 2023",
      image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18",
    },
    {
      id: "3",
      title: "Streetlight Out",
      location: "5th Cross, Gandhi Nagar",
      status: "RESOLVED",
      time: "SUBMITTED OCT 20, 2023",
      image: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054",
    },
    {
      id: "4",
      title: "Water Pipeline Leak",
      location: "Nehru Stadium Road",
      status: "RESOLVED",
      time: "SUBMITTED OCT 15, 2023",
      image: "https://images.unsplash.com/photo-1542044896530-05d85be9b11a",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.headerBtn}
        >
          <ArrowLeft color={theme.brand} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>MY GRIEVANCES</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <Bell color="#334155" size={24} />
          <View style={styles.notifBadge} />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Search color="#94A3B8" size={20} style={styles.searchIcon} />
          <TextInput
            placeholder="Search your reports (e.g. Pothole, Streetlight)"
            style={styles.searchInput}
            placeholderTextColor="#94A3B8"
          />
        </View>

        {/* Filter Chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filterRow}
        >
          <TouchableOpacity
            style={[styles.filterChip, styles.filterChipActive]}
          >
            <Text style={styles.filterTextActive}>All Reports</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <View style={[styles.dot, { backgroundColor: "#F59E0B" }]} />
            <Text style={styles.filterText}>Pending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterChip}>
            <View style={[styles.dot, { backgroundColor: "#3B82F6" }]} />
            <Text style={styles.filterText}>In Progress</Text>
          </TouchableOpacity>
        </ScrollView>

        <Text style={styles.sectionLabel}>RECENT SUBMISSIONS</Text>

        {/* Grievance List */}
        {reports.map((item) => (
          <GrievanceCard key={item.id} data={item} />
        ))}

        {/* Footer Button */}
        <TouchableOpacity style={styles.loadMoreBtn}>
          <Text style={styles.loadMoreText}>LOAD OLDER GRIEVANCES</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// Sub-component for Grievance Card
const GrievanceCard = ({ data }: any) => {
  const router = useRouter();
  const isResolved = data.status === "RESOLVED";
  const statusColor =
    data.status === "PENDING"
      ? "#F59E0B"
      : data.status === "IN PROGRESS"
        ? "#3B82F6"
        : "#10B981";
  const statusBg =
    data.status === "PENDING"
      ? "#FEF3C7"
      : data.status === "IN PROGRESS"
        ? "#DBEAFE"
        : "#D1FAE5";

  return (
    <View style={[styles.card, { borderBottomColor: statusColor }]}>
      <View style={styles.cardMain}>
        <Image source={{ uri: data.image }} style={styles.cardImg} />
        <View style={styles.cardInfo}>
          <View style={styles.cardTopRow}>
            <Text style={styles.cardTitle}>{data.title}</Text>
            <View style={[styles.statusBadge, { backgroundColor: statusBg }]}>
              <Text style={[styles.statusText, { color: statusColor }]}>
                {data.status}
              </Text>
            </View>
          </View>
          <View style={styles.locationRow}>
            <MapPin color="#64748B" size={14} />
            <Text style={styles.locationText}>{data.location}</Text>
          </View>
          <View style={styles.footerRow}>
            <Text style={styles.timeText}>{data.time}</Text>
            <TouchableOpacity>
              <Text
                style={[styles.viewBtn, { color: theme.brand }]}
                onPress={() => router.push("/details")}
              >
                {isResolved ? "VIEW HISTORY" : "VIEW DETAILS"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8FAFC" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
    backgroundColor: "white",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#E05D3D",
    letterSpacing: 1,
  },
  headerBtn: { padding: 8 },
  notifBadge: {
    position: "absolute",
    right: 8,
    top: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#EF4444",
    borderWidth: 1,
    borderColor: "white",
  },
  scrollContent: { padding: 20, paddingBottom: 100 },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 20,
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 14, color: "#1E293B" },
  filterRow: { marginBottom: 25, flexDirection: "row" },
  filterChip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  filterChipActive: { backgroundColor: "#E05D3D", borderColor: "#E05D3D" },
  filterTextActive: { color: "white", fontWeight: "bold" },
  filterText: { color: "#64748B", fontWeight: "bold" },
  dot: { width: 8, height: 8, borderRadius: 4, marginRight: 8 },
  sectionLabel: {
    fontSize: 12,
    fontWeight: "900",
    color: "#64748B",
    letterSpacing: 1,
    marginBottom: 15,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 15,
    padding: 15,
    borderBottomWidth: 4,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  cardMain: { flexDirection: "row" },
  cardImg: { width: 80, height: 80, borderRadius: 15 },
  cardInfo: { flex: 1, marginLeft: 15 },
  cardTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: "#1E293B", flex: 1 },
  statusBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  statusText: { fontSize: 10, fontWeight: "bold" },
  locationRow: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  locationText: { color: "#64748B", fontSize: 13, marginLeft: 5 },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  timeText: { fontSize: 11, color: "#94A3B8", fontWeight: "bold" },
  viewBtn: { fontSize: 12, fontWeight: "bold" },
  loadMoreBtn: {
    padding: 18,
    borderRadius: 25,
    backgroundColor: "#FFF7F5",
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#FEE2E2",
  },
  loadMoreText: {
    color: "#E05D3D",
    fontWeight: "900",
    fontSize: 12,
    letterSpacing: 1,
  },
});
