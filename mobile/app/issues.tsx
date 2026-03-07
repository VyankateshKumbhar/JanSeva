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
    { id: "roads", title: "ROADS / सड़कें", icon: Landmark },
    { id: "garbage", title: "GARBAGE / कचरा", icon: Trash2 },
    { id: "water", title: "WATER / पानी", icon: Droplets },
    { id: "electricity", title: "ELECTRICITY / बिजली", icon: Zap },
    { id: "drainage", title: "DRAINAGE / जल निकासी", icon: Waves },
    { id: "lights", title: "STREETLIGHTS / लाइट", icon: Lightbulb },
    { id: "health", title: "HEALTH / स्वास्थ्य", icon: Activity },
    { id: "other", title: "OTHER / अन्य", icon: MoreHorizontal },
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
              onPress={() =>
                router.push({
                  pathname: "/eveidence",
                  params: { category: item.id },
                })
              }
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
