import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import {
  ArrowLeft,
  Info,
  Landmark,
  Trash2,
  Droplets,
  Zap,
  Waves,
  Lightbulb,
  Activity,
  MoreHorizontal,
} from "lucide-react-native";
import { useRouter } from "expo-router";
import { Colors } from "../constants/theme";

const { width } = Dimensions.get("window");
const theme = Colors.light;

export default function IssuesScreen() {
  const router = useRouter();

  const categories = [
    { id: "roads", title: "address-verification", icon: Landmark },
    { id: "garbage", title: "commissioner", icon: Trash2 },
    { id: "water", title: "confirmation", icon: Droplets },
    { id: "electricity", title: "create-account", icon: Zap },
    { id: "drainage", title: "details", icon: Waves },
    { id: "lights", title: "eveidence", icon: Lightbulb },
    { id: "health", title: "history", icon: Activity },
    { id: "other", title: "identity-verification", icon: MoreHorizontal },
    { id: "1", title: "impact", icon: Activity },
    { id: "2", title: "index", icon: Activity },
    { id: "3", title: "login", icon: Activity },
    { id: "4", title: "profile", icon: Activity },
    { id: "5", title: "regional-performance", icon: Activity },
    { id: "6", title: "resolution", icon: Activity },
    { id: "7", title: "staff-dashboard", icon: Activity },
    { id: "8", title: "success", icon: Activity },
    { id: "9", title: "ticket_detail", icon: Activity },
    { id: "10", title: "worker_portal", icon: Activity },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.iconButton}
        >
          <ArrowLeft color={theme.brand} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Report Issue / शिकायत दर्ज करें</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Info color={theme.brand} size={22} />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.mainTitle}>Select a Category</Text>
        <Text style={styles.subTitle}>श्रेणी का चयन करें</Text>

        <View style={styles.grid}>
          {categories.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.categoryCard}
              activeOpacity={0.7}
              onPress={() => router.push(`/${item.title}`as any)}
            >
              <item.icon color={theme.brand} size={42} strokeWidth={1.5} />
              <Text style={styles.cardText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFBF7" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 18,
    backgroundColor: "#FFFBF7",
  },
  iconButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#1F2937",
    letterSpacing: -0.3,
  },
  scrollContent: { padding: 20, alignItems: "center", paddingBottom: 120 },
  mainTitle: {
    fontSize: 32,
    fontWeight: "900",
    color: "#0F172A",
    marginTop: 5,
  },
  subTitle: {
    fontSize: 15,
    color: "#64748B",
    marginTop: 6,
    marginBottom: 30,
    fontWeight: "500",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  categoryCard: {
    backgroundColor: "white",
    width: (width - 55) / 2,
    aspectRatio: 0.95,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    elevation: 4,
    shadowColor: "#E05D3D",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: "#FEE2E2",
  },
  cardText: {
    marginTop: 15,
    fontSize: 12,
    fontWeight: "800",
    color: "#1E293B",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
