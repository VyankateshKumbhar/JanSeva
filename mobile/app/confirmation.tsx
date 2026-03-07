import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  ArrowLeft,
  CheckCircle2,
  Ticket,
  Clock,
  ArrowRight,
} from "lucide-react-native";
import { useRouter } from "expo-router";
import { Colors } from "../constants/theme";

const theme = Colors.light;

export default function ConfirmationScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft color="#1F2937" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Jan Seva</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Success Icon */}
        <View style={styles.iconContainer}>
          <View style={styles.iconCircle}>
            <CheckCircle2 color="white" size={60} strokeWidth={2.5} />
          </View>
        </View>

        {/* Success Message */}
        <Text style={styles.thanksText}>Thank You! / धन्यवाद!</Text>
        <Text style={styles.subText}>
          Your grievance has been successfully submitted.
        </Text>

        {/* Reference Card */}
        <View style={styles.infoCard}>
          <View style={styles.cardRow}>
            <View>
              <Text style={styles.label}>REFERENCE NUMBER</Text>
              <Text style={styles.refNumber}>#KD - 9921</Text>
            </View>
            <View style={styles.ticketIcon}>
              <Ticket color={theme.brand} size={24} />
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.timelineRow}>
            <Clock color="#64748B" size={24} />
            <View style={styles.timelineTextContainer}>
              <Text style={styles.resolutionTitle}>
                Expected resolution: 48 Hours
              </Text>
              <Text style={styles.resolutionSub}>
                Our officers are reviewing your request.
              </Text>
            </View>
          </View>
        </View>

        {/* Location Image Summary */}
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded",
          }}
          style={styles.summaryImage}
        />

        {/* Action Buttons */}
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusButtonText}>
            View Status / स्थिति देखें
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => router.push("/")}
        >
          <Text style={styles.homeButtonText}>Return to Home</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: { fontSize: 18, fontWeight: "900", color: "#101828" },
  scrollContent: { padding: 25, alignItems: "center", paddingBottom: 100 },
  iconContainer: { marginVertical: 30 },
  iconCircle: {
    backgroundColor: "#357156", // Forest green from screenshot
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: "#357156",
    shadowOpacity: 0.2,
    shadowRadius: 15,
  },
  thanksText: {
    fontSize: 28,
    fontWeight: "900",
    color: "#101828",
    textAlign: "center",
  },
  subText: {
    fontSize: 16,
    color: "#64748B",
    textAlign: "center",
    marginTop: 15,
    lineHeight: 24,
  },
  infoCard: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 30,
    padding: 25,
    marginVertical: 35,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    fontWeight: "800",
    color: "#94A3B8",
    letterSpacing: 1,
  },
  refNumber: {
    fontSize: 22,
    fontWeight: "900",
    color: "#E05D3D",
    marginTop: 5,
  },
  ticketIcon: { backgroundColor: "#FFF7F5", padding: 10, borderRadius: 12 },
  divider: { height: 1, backgroundColor: "#F1F5F9", marginVertical: 20 },
  timelineRow: { flexDirection: "row", alignItems: "center" },
  timelineTextContainer: { marginLeft: 15 },
  resolutionTitle: { fontSize: 15, fontWeight: "800", color: "#1E293B" },
  resolutionSub: { fontSize: 13, color: "#64748B", marginTop: 2 },
  summaryImage: {
    width: "100%",
    height: 200,
    borderRadius: 30,
    marginBottom: 35,
  },
  statusButton: {
    backgroundColor: "#E05D3D",
    width: "100%",
    height: 65,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    elevation: 5,
  },
  statusButtonText: { color: "white", fontSize: 18, fontWeight: "bold" },
  homeButton: {
    backgroundColor: "white",
    width: "100%",
    height: 65,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FEE2E2",
  },
  homeButtonText: { color: "#E05D3D", fontSize: 18, fontWeight: "bold" },
});
