import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  Image,
  Alert,
} from "react-native";
import { Camera, MapPin, ChevronDown } from "lucide-react-native";
import { useRouter } from "expo-router";
import ScreenHeader from "../components/screen_header";
import axios from "axios";
import { BASE_URL } from "../constants/Config";
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';

export default function ReportComplaint() {
  const router = useRouter();

  // 1. STATES
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Sanitation");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [loadingLocation, setLoadingLocation] = useState(false);

 const departments = [
  { label: "Sanitation / स्वच्छता", value: "Sanitation" },
  { label: "Electricity / बिजली", value: "Electricity" },
  { label: "Water Supply / जल आपूर्ति", value: "Water" },
  { label: "Roads & Potholes / सड़कें", value: "Road" }, // Must be 'Road' to match model
  { label: "Education / शिक्षा", value: "Education" }, 
];

  // 2. IMAGE PICKER
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'We need access to your photos!');
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5, 
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // 3. LOCATION LOGIC
  const getCurrentLocation = async () => {
    setLoadingLocation(true);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location access is required.');
        return;
      }
      let userLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });
      setLocation({
        lat: userLocation.coords.latitude,
        lng: userLocation.coords.longitude,
      });
      Alert.alert("Success", "GPS Coordinates Captured!");
    } catch (error) {
      Alert.alert("Error", "Could not fetch GPS data.");
    } finally {
      setLoadingLocation(false);
    }
  };

  // 4. SUBMIT LOGIC
  const handleSubmit = async () => {
    if (!description) {
      Alert.alert("Validation Error", "Please describe the issue.");
      return;
    }

    try {
      const payload = {
        citizen: {
          name: "Shubham Mohite",
          phone: "9876543210",
          address: address || (location ? "Current Location Captured" : "Rohini, Delhi"),
          location: location || { lat: 28.6139, lng: 77.2090 }
        },
        category: category,
        description: description,
        imageUrl: image 
      };

      const response = await axios.post(`${BASE_URL}/grievances`, payload);

      if (response.data.success) {
        Alert.alert("Success", `Complaint Filed! Ticket ID: ${response.data.ticketId}`);
        router.push("/confirmation");
      }
    } catch (error: any) {
      console.error("Submission Error:", error.response?.data || error.message);
      if (error.response?.status === 500) {
        Alert.alert("Server Error", "Check if category matches backend Enum.");
      } else {
        Alert.alert("Error", "Failed to connect to Janseva Server.");
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="REPORT COMPLAINT" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        
        <View style={styles.section}>
          <Text style={styles.label}>Add Photo / फोटो जोड़ें</Text>
          <TouchableOpacity style={styles.photoBox} onPress={pickImage}>
            {image ? (
              <Image source={{ uri: image }} style={styles.fullImage} />
            ) : (
              <>
                <Camera color="#F97316" size={30} />
                <Text style={styles.photoText}>Tap to Capture or Upload</Text>
              </>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Select Department / विभाग चुनें</Text>
          <View style={styles.dropdownWrapper}>
            <Picker
              selectedValue={category}
              onValueChange={(itemValue) => setCategory(itemValue)}
              style={styles.pickerHidden}
              dropdownIconColor="transparent"
            >
              {departments.map((dept) => (
                <Picker.Item key={dept.value} label={dept.label} value={dept.value} />
              ))}
            </Picker>
            <View style={styles.dropdownUI} pointerEvents="none">
              <Text style={styles.dropdownText}>
                {departments.find(d => d.value === category)?.label}
              </Text>
              <ChevronDown color="#64748B" size={18} />
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Description / विवरण</Text>
          <TextInput
            multiline
            placeholder="Describe the issue..."
            style={styles.textArea}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Location / स्थान</Text>
          <TouchableOpacity 
            style={[styles.locationBtn, location && { backgroundColor: '#D1FAE5' }]} 
            onPress={getCurrentLocation}
            disabled={loadingLocation}
          >
            <MapPin color={location ? "#059669" : "#F97316"} size={18} />
            <Text style={[styles.locTitle, location && { color: '#059669' }]}> 
              {loadingLocation ? "Fetching GPS..." : location ? "Location Captured ✓" : "Use Current Location"}
            </Text>
          </TouchableOpacity>
          <Text style={styles.or}>OR</Text>
          <View style={styles.addressInput}>
            <MapPin color="#F97316" size={16} />
            <TextInput 
              placeholder="Type Address Manually"
              style={styles.addressInputText}
              value={address}
              onChangeText={setAddress}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit Complaint</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F6F3" },
  section: { paddingHorizontal: 20, marginTop: 15 },
  label: { fontSize: 14, fontWeight: "700" },
  photoBox: {
    borderWidth: 1, borderColor: "#F97316", borderStyle: "dashed",
    borderRadius: 15, height: 120, justifyContent: "center",
    alignItems: "center", backgroundColor: "#EFE7DF", overflow: 'hidden'
  },
  fullImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  photoText: { color: "#F97316", marginTop: 8, fontSize: 13 },
  dropdownWrapper: {
    backgroundColor: "#FFF", borderRadius: 25,
    borderWidth: 1, borderColor: "#E5E7EB",
    marginTop: 5, height: 55, justifyContent: 'center'
  },
  pickerHidden: { position: 'absolute', width: '100%', height: '100%', opacity: 0 },
  dropdownUI: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 15 },
  dropdownText: { color: "#64748B" },
  textArea: {
    height: 90, borderRadius: 15, padding: 15,
    backgroundColor: "#FFF", borderWidth: 1, borderColor: "#E5E7EB",
    textAlignVertical: "top", marginTop: 5
  },
  locationBtn: {
    flexDirection: "row", alignItems: "center",
    backgroundColor: "#FCE7D8", padding: 14, borderRadius: 15, marginTop: 5
  },
  locTitle: { fontSize: 13, fontWeight: "600", color: "#F97316", marginLeft: 8 },
  or: { textAlign: "center", marginVertical: 10, fontSize: 11, color: "#9CA3AF" },
  addressInput: {
    flexDirection: "row", alignItems: "center",
    borderRadius: 25, paddingHorizontal: 14,
    backgroundColor: "#FFF", borderWidth: 1, borderColor: "#E5E7EB",
  },
  addressInputText: { marginLeft: 8, color: "#64748B", flex: 1, height: 45 },
  submitBtn: {
    backgroundColor: "#E05D3D", margin: 20, padding: 16,
    borderRadius: 20, alignItems: "center",
  },
  submitText: { color: "white", fontWeight: "700", fontSize: 16 },
});