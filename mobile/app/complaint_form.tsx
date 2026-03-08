import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import { ArrowLeft, Camera, MapPin, ChevronDown } from "lucide-react-native";
import { useRouter } from "expo-router";
import ScreenHeader from "../components/screen_header";
export default function ReportComplaint() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
        <ScreenHeader title="REPORT COMPLAINT" />
      <ScrollView
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{ paddingBottom: 120 }}
>
        

        {/* ADD PHOTO */}
        <View style={styles.section}>
          <Text style={styles.label}>Add Photo /</Text>
          <Text style={styles.hindi}>फोटो जोड़ें</Text>

          <TouchableOpacity style={styles.photoBox}>
            <Camera color="#F97316" size={30} />
            <Text style={styles.photoText}>Tap to Capture or Upload</Text>
          </TouchableOpacity>
        </View>

        {/* DEPARTMENT */}
        <View style={styles.section}>
          <Text style={styles.label}>Select Department /</Text>
          <Text style={styles.hindi}>विभाग चुनें</Text>

          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Select Department...</Text>
            <ChevronDown color="#64748B" size={18} />
          </TouchableOpacity>
        </View>

        {/* DESCRIPTION */}
        <View style={styles.section}>
          <Text style={styles.label}>Description /</Text>
          <Text style={styles.hindi}>विवरण</Text>

          <TextInput
            multiline
            placeholder="Describe the issue... / समस्या का वर्णन करें..."
            style={styles.textArea}
          />
        </View>

        {/* LOCATION */}
        <View style={styles.section}>
          <Text style={styles.label}>Location /</Text>
          <Text style={styles.hindi}>स्थान</Text>

          <TouchableOpacity style={styles.locationBtn}>
            <MapPin color="#F97316" size={18} />
            <View style={{ marginLeft: 8 }}>
              <Text style={styles.locTitle}>Use Current Location</Text>
              <Text style={styles.locSub}>वर्तमान स्थान का उपयोग करें</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.or}>OR</Text>

          <TouchableOpacity style={styles.addressInput}>
            <MapPin color="#F97316" size={16} />
            <Text style={styles.addressText}>
              Type Address Manually / मैन्युअल रूप से पता
            </Text>
          </TouchableOpacity>
        </View>

        {/* SUBMIT BUTTON */}
        <TouchableOpacity
  style={styles.submitBtn}
  onPress={() => router.push("/confirmation")}
>
  <Text style={styles.submitText}>Submit Complaint</Text>
  <Text style={styles.submitHindi}>शिकायत दर्ज करें</Text>
</TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F6F3",
  },



  title: {
    fontSize: 16,
    fontWeight: "700",
  },

  subtitle: {
    fontSize: 12,
    color: "#64748B",
  },

  section: {
    paddingHorizontal: 20,
    marginTop: 15,
  },

  label: {
    fontSize: 14,
    fontWeight: "700",
  },

  hindi: {
    fontSize: 11,
    color: "#64748B",
    marginBottom: 10,
  },

  photoBox: {
    borderWidth: 1,
    borderColor: "#F97316",
    borderStyle: "dashed",
    borderRadius: 15,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EFE7DF",
  },

  photoText: {
    color: "#F97316",
    marginTop: 8,
    fontSize: 13,
  },

  dropdown: {
    backgroundColor: "#FFF",
    borderRadius: 25,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  dropdownText: {
    color: "#64748B",
  },

  textArea: {
    height: 90,
    borderRadius: 15,
    padding: 15,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    textAlignVertical: "top",
  },

  locationBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FCE7D8",
    padding: 14,
    borderRadius: 15,
  },

  locTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#F97316",
  },

  locSub: {
    fontSize: 11,
    color: "#F97316",
  },

  or: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 11,
    color: "#9CA3AF",
  },

  addressInput: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    padding: 14,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  addressText: {
    marginLeft: 8,
    color: "#64748B",
  },

  mapPreview: {
    height: 120,
    borderRadius: 18,
    marginTop: 15,
  },

  submitBtn: {
    backgroundColor: "#E05D3D",
    margin: 20,
    padding: 16,
    borderRadius: 20,
    alignItems: "center",
  },

  submitText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  submitHindi: {
    color: "white",
    fontSize: 12,
  },
});