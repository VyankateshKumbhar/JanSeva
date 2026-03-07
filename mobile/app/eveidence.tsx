import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { ArrowLeft, MapPin, Camera, Plus, Send } from "lucide-react-native";
import { useRouter } from "expo-router";
import { Colors } from "../constants/theme";

const { width, height } = Dimensions.get("window");
const theme = Colors.light;

export default function EvidenceScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Overlay Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft color="#E05D3D" size={24} />
        </TouchableOpacity>
        <View style={styles.titleBox}>
          <Text style={styles.titleText}>
            स्थान और प्रमाण (Location & Evidence)
          </Text>
        </View>
      </View>

      {/* Map Section */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 28.7041,
          longitude: 77.1025,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={{ latitude: 28.7041, longitude: 77.1025 }}>
          <View style={styles.markerCircle}>
            <MapPin size={20} color="white" fill="#E05D3D" />
          </View>
        </Marker>
      </MapView>

      {/* Bottom Interface */}
      <View style={styles.bottomSheet}>
        <Text style={styles.label}>पहचाना गया पता (Detected Address)</Text>

        <View style={styles.addressBar}>
          <MapPin color="#E05D3D" size={20} />
          <Text style={styles.addressText}>
            Sector 4, Rohini, Delhi - 110085
          </Text>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded",
            }}
            style={styles.miniMapImage}
          />
        </View>

        <View style={styles.cameraSection}>
          <TouchableOpacity style={styles.cameraCircle}>
            <Camera color="white" size={40} />
          </TouchableOpacity>
          <Text style={styles.cameraLabel}>फोटो लें (TAKE PHOTO)</Text>

          <TouchableOpacity style={styles.addMoreBtn}>
            <Plus color="#D1D5DB" size={24} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => router.push("/confirmation")}
        >
          <Text style={styles.submitText}>जमा करें / SUBMIT</Text>
          <Send color="white" size={20} style={{ marginLeft: 10 }} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  header: {
    position: "absolute",
    top: 50,
    left: 15,
    right: 15,
    zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 10,
    elevation: 5,
    shadowOpacity: 0.1,
  },
  titleBox: {
    flex: 1,
    backgroundColor: "white",
    marginLeft: 10,
    padding: 12,
    borderRadius: 10,
    elevation: 5,
    shadowOpacity: 0.1,
  },
  titleText: { fontSize: 13, fontWeight: "900", color: "#1F2937" },
  map: { width: width, height: height * 0.55 },
  markerCircle: {
    backgroundColor: "white",
    padding: 4,
    borderRadius: 20,
    elevation: 4,
  },
  bottomSheet: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    marginTop: -35,
    padding: 25,
  },
  label: {
    fontSize: 14,
    color: "#4B5563",
    marginBottom: 15,
    fontWeight: "600",
  },
  addressBar: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  addressText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: "#1F2937",
    fontWeight: "500",
  },
  miniMapImage: { width: 45, height: 45, borderRadius: 10 },
  cameraSection: { alignItems: "center", marginVertical: 30 },
  cameraCircle: {
    backgroundColor: "#E05D3D",
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    shadowColor: "#E05D3D",
    shadowOpacity: 0.4,
  },
  cameraLabel: {
    marginTop: 12,
    fontSize: 12,
    fontWeight: "bold",
    color: "#6B7280",
  },
  addMoreBtn: {
    position: "absolute",
    right: 20,
    top: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#E5E7EB",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
  },
  submitBtn: {
    backgroundColor: "#E05D3D",
    flexDirection: "row",
    height: 65,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  submitText: { color: "white", fontSize: 18, fontWeight: "bold" },
});
