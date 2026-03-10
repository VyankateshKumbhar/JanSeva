import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ScreenHeader from "../../components/screen_header";
import { useRouter } from "expo-router";

export default function AssignWorkerScreen() {
  const [selectedWorkerId, setSelectedWorkerId] = useState<string | null>("1");
  const [remarks, setRemarks] = useState("");
  const router = useRouter();

  const workers = [
    {
      id: "1",
      name: "Abhishek Sharma",
      dept: "Sanitation",
      jobs: 2,
      image: "https://i.pravatar.cc/100?img=3"
    },
    {
      id: "2",
      name: "Amit kilhor",
      dept: "Electrical",
      jobs: 1,
      image: "https://i.pravatar.cc/100?img=4"
    },
    {
      id: "3",
      name: "Suresh Bhatt",
      dept: "Water",
      jobs: 0,
      image: "https://i.pravatar.cc/100?img=11"
    }
  ];

  const handleAssign = () => {
    const worker = workers.find(w => w.id === selectedWorkerId);
    Alert.alert(
      "Assignment Confirmed",
      `Complaint assigned to ${worker?.name}. They will be notified immediately.`,
      [{ text: "OK", onPress: () => router.push("/Department/department_dashboard") }]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScreenHeader title="ASSIGN WORKER" />
      
      <ScrollView 
        style={styles.container} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Complaint Summary */}
        <Text style={styles.sectionTitle}>
          COMPLAINT SUMMARY
        </Text>

        <View style={styles.summaryCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.complaintTitle}>Water Leakage Issue</Text>
            <Text style={styles.complaintMeta}>
              ID: #JS-9921 • Ward 5, Shanti Nagar
            </Text>
            <Text style={styles.reported}>Priority: High</Text>
          </View>

          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzb70TO_53PRo9hQ_uh9i9wPrBO67U-k_99Q&s"
            }}
            style={styles.summaryImage}
          />
        </View>

        {/* Workers Selection */}
        <Text style={styles.sectionTitle}>
          AVAILABLE WORKERS
        </Text>

        {workers.map((worker) => (
          <TouchableOpacity 
            key={worker.id} 
            style={[
                styles.workerCard, 
                selectedWorkerId === worker.id && styles.activeWorkerCard
            ]}
            onPress={() => setSelectedWorkerId(worker.id)}
          >
            <Image source={{ uri: worker.image }} style={styles.workerImage} />

            <View style={{ flex: 1 }}>
              <Text style={styles.workerName}>
                {worker.name}
              </Text>
              <Text style={styles.workerDept}>
                {worker.dept}
              </Text>
              <Text style={styles.workerJobs}>
                Active Jobs: {worker.jobs}
              </Text>
            </View>

            <View style={[
                styles.radioCircle, 
                selectedWorkerId === worker.id && styles.radioCircleActive
            ]}>
                {selectedWorkerId === worker.id && <View style={styles.radioInner} />}
            </View>
          </TouchableOpacity>
        ))}

        {/* Deadline */}
        <Text style={styles.sectionTitle}>
          SET DEADLINE
        </Text>

        <TouchableOpacity style={styles.inputBox}>
          <Text style={styles.inputText}>Expected Resolution: 24 Hours</Text>
          <Ionicons name="calendar-outline" size={20} color="#E85C2E" />
        </TouchableOpacity>

        {/* Remarks */}
        <Text style={styles.sectionTitle}>
          ADD REMARKS
        </Text>

        <TextInput
          placeholder="Enter specific instructions for the worker..."
          style={styles.textArea}
          multiline
          numberOfLines={4}
          value={remarks}
          onChangeText={setRemarks}
          placeholderTextColor="#999"
        />

        {/* Assign Button */}
        <TouchableOpacity style={styles.button} onPress={handleAssign}>
          <Ionicons name="person-add-outline" size={22} color="#fff" />
          <Text style={styles.buttonText}>
            CONFIRM ASSIGNMENT
          </Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          JAN SEVA ADMINISTRATION PORTAL • OFFICIAL USE ONLY
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  scrollContent: {
    paddingBottom: 40,
  },
  sectionTitle: {
    marginTop: 25,
    marginBottom: 12,
    fontSize: 13,
    fontWeight: "700",
    color: "#64748B",
    letterSpacing: 0.5
  },
  summaryCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  complaintTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#1E293B"
  },
  complaintMeta: {
    color: "#64748B",
    marginTop: 4,
    fontSize: 13
  },
  reported: {
    marginTop: 8,
    color: "#E85C2E",
    fontWeight: "700",
    fontSize: 12
  },
  summaryImage: {
    width: 70,
    height: 70,
    borderRadius: 12
  },
  workerCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "transparent"
  },
  activeWorkerCard: {
    borderColor: "#E85C2E",
    backgroundColor: "#FFF7ED"
  },
  workerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15
  },
  workerName: {
    fontWeight: "800",
    fontSize: 15,
    color: "#1E293B"
  },
  workerDept: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 2
  },
  workerJobs: {
    color: "#E85C2E",
    fontSize: 11,
    fontWeight: "700",
    marginTop: 4
  },
  radioCircle: {
    height: 22,
    width: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#CBD5E1",
    alignItems: "center",
    justifyContent: "center",
  },
  radioCircleActive: {
    borderColor: "#E85C2E",
  },
  radioInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#E85C2E",
  },
  inputBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
    padding: 16,
    backgroundColor: "#fff",
    elevation: 2
  },
  inputText: {
    color: "#1E293B",
    fontWeight: "600"
  },
  textArea: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 16,
    height: 100,
    textAlignVertical: "top",
    fontSize: 15,
    color: "#1E293B",
    elevation: 2
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E85C2E",
    padding: 18,
    borderRadius: 18,
    marginTop: 30,
    elevation: 4,
    shadowColor: "#E85C2E",
    shadowOpacity: 0.3,
    shadowRadius: 10
  },
  buttonText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 16,
    marginLeft: 10
  },
  footer: {
    textAlign: "center",
    marginTop: 25,
    color: "#94A3B8",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1
  }
});