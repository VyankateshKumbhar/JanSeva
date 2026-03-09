import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ScreenHeader from "../../components/screen_header";
export default function AssignWorkerScreen() {
  const [selectedWorker, setSelectedWorker] = useState<string | null>("Rahul");

  const workers = [
    {
      id: "1",
      name: "Rahul",
      dept: "Sanitation | स्वच्छता",
      jobs: 2,
      image: "https://i.pravatar.cc/100?img=3"
    },
    {
      id: "2",
      name: "Amit",
      dept: "Electrical | बिजली",
      jobs: 1,
      image: "https://i.pravatar.cc/100?img=4"
    }
  ];

  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <ScreenHeader title="Assign Worker" />

      {/* Complaint Summary */}
      <Text style={styles.sectionTitle}>
        COMPLAINT SUMMARY | शिकायत का सारांश
      </Text>

      <View style={styles.summaryCard}>
        <View style={{ flex: 1 }}>
          <Text style={styles.complaintTitle}>Street Light Not Working</Text>
          <Text style={styles.complaintMeta}>
            ID: #JS-9921 • Sector 14, Main Road
          </Text>
          <Text style={styles.reported}>Reported by: Sunil Kumar</Text>
        </View>

        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1519608487953-e999c86e7455"
          }}
          style={styles.summaryImage}
        />
      </View>

      {/* Workers */}
      <Text style={styles.sectionTitle}>
        AVAILABLE WORKERS | उपलब्ध कर्मचारी
      </Text>

      {workers.map((worker) => (
        <View key={worker.id} style={styles.workerCard}>
          <Image source={{ uri: worker.image }} style={styles.workerImage} />

          <View style={{ flex: 1 }}>
            <Text style={styles.workerName}>
              {worker.name} ({worker.dept})
            </Text>
            <Text style={styles.workerJobs}>
              Active Jobs: {worker.jobs}
            </Text>
          </View>

          <Switch
            value={selectedWorker === worker.name}
            onValueChange={() => setSelectedWorker(worker.name)}
            trackColor={{ true: "#E85C2E", false: "#ccc" }}
          />
        </View>
      ))}

      {/* Deadline */}
      <Text style={styles.sectionTitle}>
        SET DEADLINE | समय सीमा निर्धारित करें
      </Text>

      <View style={styles.inputBox}>
        <Text>10/27/2023, 06:00 PM</Text>
        <Ionicons name="calendar-outline" size={20} color="#777" />
      </View>

      {/* Remarks */}
      <Text style={styles.sectionTitle}>
        ADD REMARKS | टिप्पणी जोड़ें
      </Text>

      <TextInput
        placeholder="Enter instructions for the worker..."
        style={styles.textArea}
        multiline
      />

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Ionicons name="clipboard-outline" size={20} color="#fff" />
        <Text style={styles.buttonText}>
          ASSIGN WORKER | कर्मचारी नियुक्त करें
        </Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        JAN SEVA ADMINISTRATION PORTAL
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    padding: 20
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10
  },

  sectionTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "600",
    color: "#333"
  },

  summaryCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2
  },

  complaintTitle: {
    fontSize: 16,
    fontWeight: "600"
  },

  complaintMeta: {
    color: "#777",
    marginTop: 4
  },

  reported: {
    marginTop: 6,
    color: "#E85C2E",
    fontWeight: "500"
  },

  summaryImage: {
    width: 70,
    height: 70,
    borderRadius: 10
  },

  workerCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 10
  },

  workerImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
    marginRight: 10
  },

  workerName: {
    fontWeight: "600"
  },

  workerJobs: {
    color: "#777",
    fontSize: 12
  },

  inputBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#fff"
  },

  textArea: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    height: 90,
    textAlignVertical: "top"
  },

  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E85C2E",
    padding: 16,
    borderRadius: 30,
    marginTop: 25
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 8
  },

  footer: {
    textAlign: "center",
    marginTop: 20,
    color: "#999",
    fontSize: 12
  }
});