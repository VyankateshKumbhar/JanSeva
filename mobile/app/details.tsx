import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Platform,
} from "react-native";
import {
  ArrowLeft,
  Share2,
  Phone,
  MessageSquare,
  Star,
  MapPin,
  Check,
  Clock,
  User,
  Camera,
} from "lucide-react-native";
import { useRouter } from "expo-router";
import { Colors } from "../constants/theme";

const theme = Colors.light;

export default function GrievanceDetailsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft color="#1E293B" size={24} />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Grievance Details</Text>
          <Text style={styles.headerSub}>शिकायत विवरण</Text>
        </View>
        <TouchableOpacity>
          <Share2 color="#E05D3D" size={24} />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Status Section */}
        <View style={styles.statusCard}>
          <View style={styles.statusRow}>
            <View>
              <Text style={styles.statusLabel}>Status | स्थिति</Text>
              <Text style={styles.statusMain}>
                Under Resolution | समाधान के तहत
              </Text>
            </View>
            <View style={styles.idBadge}>
              <Text style={styles.idText}>ID: #JS-98231</Text>
            </View>
          </View>
          <View style={styles.progressContainer}>
            <View style={[styles.progressBar, { width: "75%" }]} />
          </View>
          <View style={styles.progressLabels}>
            <Text style={styles.progressText}>75% Completed</Text>
            <Text style={styles.progressText}>Expected: Oct 30</Text>
          </View>
        </View>

        {/* Track Progress (Vertical Stepper) */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>
            Track Progress | प्रगति ट्रैक करें
          </Text>

          <StepItem
            title="Grievance Raised"
            sub="Oct 24, 2023 • 10:30 AM"
            status="completed"
            isLast={false}
          />
          <StepItem
            title="Assigned to Officer"
            sub="Oct 25, 2023 • 02:15 PM"
            status="completed"
            isLast={false}
          />
          <StepItem
            title="Work in Progress"
            sub="Started on Oct 27, 2023"
            status="current"
            isLast={false}
          />
          <StepItem
            title="Resolved"
            sub="Pending verification"
            status="pending"
            isLast={true}
          />
        </View>

        {/* Assigned Professional */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>
            Assigned Professional | नियुक्त कार्यकर्ता
          </Text>
          <View style={styles.professionalRow}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1618401471353-b98aadebc24c",
              }}
              style={styles.profilePic}
            />
            <View style={styles.profInfo}>
              <Text style={styles.profName}>Rajesh Kumar</Text>
              <Text style={styles.profRole}>Field Supervisor</Text>
              <View style={styles.ratingRow}>
                <Star size={14} color="#F59E0B" fill="#F59E0B" />
                <Text style={styles.ratingText}>4.8 Rating</Text>
              </View>
            </View>
            <View style={styles.contactIcons}>
              <TouchableOpacity style={styles.callIcon}>
                <Phone size={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.msgIcon}>
                <MessageSquare size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Reported Photo */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>
            Reported Issue Photo | रिपोर्ट की गई फोटो
          </Text>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1471922694854-ff1b63b20054",
            }}
            style={styles.issuePhoto}
          />
          <View style={styles.photoOverlay}>
            <MapPin size={12} color="white" />
            <Text style={styles.photoLocation}>
              Location Tagged: Karol Bagh, Delhi
            </Text>
          </View>
          <Text style={styles.categoryLabel}>
            Category: Street Light Maintenance
          </Text>
          <Text style={styles.issueDesc}>
            "Street light outside House No. 42 is not working for 3 days. Its
            dark and unsafe for elders."
          </Text>
        </View>

        {/* Live Updates (Chat Style) */}
        <View style={styles.sectionCard}>
          <View style={styles.liveHeader}>
            <Text style={styles.sectionTitle}>Live Updates | लाइव अपडेट</Text>
            <View style={styles.activeBadge}>
              <Text style={styles.activeText}>• ACTIVE</Text>
            </View>
          </View>

          <View style={styles.chatBubble}>
            <Text style={styles.chatText}>
              नमस्ते, हम आपकी शिकायत पर काम कर रहे हैं। कर्मचारी टीम मौके पर
              पहुंच रही है।
            </Text>
            <Text style={styles.chatTime}>08:00 AM</Text>
          </View>

          <View style={styles.statusUpdateLine}>
            <Text style={styles.statusUpdateText}>
              Officer Rajesh Kumar updated status to 'Work In Progress'
            </Text>
          </View>

          <View style={styles.chatBubble}>
            <Text style={styles.chatText}>
              The spare parts for the light pole are being brought from the
              central depot. Work should be finished by evening.
            </Text>
            <Text style={styles.chatTime}>11:45 AM</Text>
          </View>
        </View>

        {/* Feedback Button */}
        <TouchableOpacity style={styles.feedbackBtn}>
          <MessageSquare color="white" size={20} style={{ marginRight: 10 }} />
          <Text style={styles.feedbackText}>
            Give Feedback | प्रतिक्रिया दें
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// Stepper Component
const StepItem = ({ title, sub, status, isLast }: any) => {
  const iconColor =
    status === "completed"
      ? "#357156"
      : status === "current"
        ? "#E05D3D"
        : "#CBD5E1";
  return (
    <View style={styles.stepContainer}>
      <View style={styles.stepLeft}>
        <View style={[styles.stepCircle, { backgroundColor: iconColor }]}>
          {status === "completed" ? (
            <Check size={14} color="white" />
          ) : (
            <Clock size={14} color="white" />
          )}
        </View>
        {!isLast && (
          <View
            style={[
              styles.stepLine,
              {
                backgroundColor: status === "completed" ? "#357156" : "#E2E8F0",
              },
            ]}
          />
        )}
      </View>
      <View style={styles.stepRight}>
        <Text
          style={[
            styles.stepTitle,
            status === "current" && { color: "#E05D3D" },
          ]}
        >
          {title}
        </Text>
        <Text style={styles.stepSub}>{sub}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "white",
  },
  headerTitleContainer: { alignItems: "center" },
  headerTitle: { fontSize: 18, fontWeight: "bold", color: "#1E293B" },
  headerSub: { fontSize: 12, color: "#64748B" },
  scrollContent: { padding: 15, paddingBottom: 40 },
  statusCard: {
    backgroundColor: "white",
    borderRadius: 25,
    padding: 20,
    marginBottom: 15,
    elevation: 2,
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusLabel: { fontSize: 14, fontWeight: "bold", color: "#1E293B" },
  statusMain: {
    fontSize: 16,
    color: "#357156",
    fontWeight: "bold",
    marginTop: 4,
  },
  idBadge: {
    backgroundColor: "#FEE2E2",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 20,
  },
  idText: { color: "#E05D3D", fontWeight: "bold", fontSize: 12 },
  progressContainer: {
    height: 8,
    backgroundColor: "#F1F5F9",
    borderRadius: 4,
    marginVertical: 15,
    overflow: "hidden",
  },
  progressBar: { height: 8, backgroundColor: "#E05D3D" },
  progressLabels: { flexDirection: "row", justifyContent: "space-between" },
  progressText: { fontSize: 12, color: "#64748B", fontWeight: "500" },
  sectionCard: {
    backgroundColor: "white",
    borderRadius: 25,
    padding: 20,
    marginBottom: 15,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#64748B",
    marginBottom: 20,
  },
  stepContainer: { flexDirection: "row" },
  stepLeft: { alignItems: "center", marginRight: 15 },
  stepCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  stepLine: { width: 2, flex: 1, marginVertical: 4 },
  stepRight: { paddingBottom: 25 },
  stepTitle: { fontSize: 15, fontWeight: "bold", color: "#1E293B" },
  stepSub: { fontSize: 12, color: "#94A3B8", marginTop: 4 },
  professionalRow: { flexDirection: "row", alignItems: "center" },
  profilePic: { width: 60, height: 60, borderRadius: 30 },
  profInfo: { flex: 1, marginLeft: 15 },
  profName: { fontSize: 16, fontWeight: "bold", color: "#1E293B" },
  profRole: { fontSize: 13, color: "#64748B" },
  ratingRow: { flexDirection: "row", alignItems: "center", marginTop: 4 },
  ratingText: {
    fontSize: 12,
    color: "#1E293B",
    fontWeight: "bold",
    marginLeft: 4,
  },
  contactIcons: { flexDirection: "row" },
  callIcon: {
    backgroundColor: "#357156",
    padding: 10,
    borderRadius: 25,
    marginRight: 10,
  },
  msgIcon: { backgroundColor: "#E05D3D", padding: 10, borderRadius: 25 },
  issuePhoto: { width: "100%", height: 200, borderRadius: 20 },
  photoOverlay: {
    position: "absolute",
    bottom: 120,
    right: 30,
    backgroundColor: "rgba(0,0,0,0.6)",
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    borderRadius: 10,
  },
  photoLocation: { color: "white", fontSize: 10, marginLeft: 4 },
  categoryLabel: { fontSize: 14, color: "#94A3B8", marginTop: 15 },
  issueDesc: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 5,
    fontStyle: "italic",
  },
  liveHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  activeBadge: {
    backgroundColor: "#F0FDF4",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  activeText: { color: "#16A34A", fontSize: 10, fontWeight: "bold" },
  chatBubble: {
    backgroundColor: "#F8FAFC",
    padding: 15,
    borderRadius: 20,
    marginBottom: 10,
    borderBottomLeftRadius: 0,
    borderWidth: 1,
    borderColor: "#F1F5F9",
  },
  chatText: { fontSize: 14, color: "#1E293B", lineHeight: 20 },
  chatTime: { fontSize: 10, color: "#94A3B8", marginTop: 8 },
  statusUpdateLine: {
    alignItems: "center",
    marginVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
    paddingTop: 10,
  },
  statusUpdateText: {
    fontSize: 11,
    color: "#3B82F6",
    backgroundColor: "#EFF6FF",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 10,
  },
  feedbackBtn: {
    backgroundColor: "#357156",
    flexDirection: "row",
    padding: 18,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  feedbackText: { color: "white", fontSize: 16, fontWeight: "bold" },
});
