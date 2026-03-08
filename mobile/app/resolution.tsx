import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
// Using standard lucide icons to match your UI
import { 
  ArrowLeft, 
  Camera, 
  Clock, 
  MapPin, 
  CheckCircle, 
  Navigation 
} from 'lucide-react-native';
import { Colors } from "../constants/theme";

const theme = Colors.light;

export default function TaskResolution() {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#FFFFFF' }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ArrowLeft color="#E76F51" size={24} />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Task Resolution</Text>
          <Text style={styles.headerSub}>कार्य समाधान</Text>
        </View>
        <View style={styles.idBadge}>
          <Text style={styles.idBadgeText}>ID: #MCD-8821</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Task Title Card */}
        <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>Pothole Repair / <Text style={{fontWeight: 'normal'}}>गड्ढे की मरम्मत</Text></Text>
          <View style={styles.locationRow}>
            <MapPin size={14} color="#6B7280" />
            <Text style={styles.locationText}>Sector 4, RK Puram, New Delhi</Text>
          </View>
        </View>

        {/* Image Upload Section */}
        <View style={styles.imageSection}>
          <View style={styles.imageColumn}>
            <Text style={styles.sectionLabel}>Before / <Text style={{fontWeight: 'normal'}}>पहले की फोटो</Text></Text>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=1000&auto=format&fit=crop' }} 
              style={styles.taskImage} 
            />
          </View>
          <View style={styles.imageColumn}>
            <Text style={styles.sectionLabel}>After / <Text style={{fontWeight: 'normal'}}>बाद की फोटो</Text></Text>
            <TouchableOpacity style={styles.captureButton}>
              <View style={styles.cameraCircle}>
                <Camera size={24} color="white" />
              </View>
              <Text style={styles.captureText}>TAP TO CAPTURE</Text>
              <Text style={styles.captureSubText}>फोटो खींचे</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Resolution Notes */}
        <View style={styles.notesSection}>
          <Text style={styles.sectionLabel}>Resolution Notes / <Text style={{fontWeight: 'normal'}}>समाधान विवरण</Text></Text>
          <TextInput 
            style={styles.notesInput}
            placeholder="Describe the work done... (e.g. Material used, specific repairs made)"
            placeholderTextColor="#9CA3AF"
            multiline
            textAlignVertical="top"
          />
          <Text style={styles.hindiHintText}>कार्य का विवरण दें... (जैसे इस्तेमाल की गई सामग्री)</Text>
        </View>

        {/* Metadata Row (Time and Location) */}
        <View style={styles.metaRow}>
          <View style={styles.metaCard}>
            <Text style={styles.metaLabel}>TIME SPENT</Text>
            <View style={styles.metaValueRow}>
              <Clock size={16} color="#E76F51" />
              <Text style={styles.metaValue}>1h 25m</Text>
            </View>
          </View>
          <View style={styles.metaCard}>
            <Text style={styles.metaLabel}>CURRENT LOCATION</Text>
            <View style={styles.metaValueRow}>
              <Navigation size={16} color="#E76F51" />
              <Text style={styles.metaValue}>Verified</Text>
            </View>
          </View>
        </View>

        {/* Map Placeholder Section */}
        <View style={styles.mapSection}>
          <Text style={styles.sectionLabel}>Current Location / <Text style={{fontWeight: 'normal'}}>वर्तमान स्थान</Text></Text>
          <View style={styles.mapFrame}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop' }} 
              style={styles.mapImage} 
            />
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Fixed Footer Actions */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel / रद्द करें</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resolveButton}>
          <CheckCircle size={20} color="white" style={{ marginRight: 8 }} />
          <View>
            <Text style={styles.resolveButtonText}>Mark as Resolved</Text>
            <Text style={styles.resolveButtonSub}>समाधान चिह्नित करें</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6'
  },
  backButton: { padding: 5 },
  headerTitleContainer: { flex: 1, marginLeft: 15 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#111827' },
  headerSub: { fontSize: 12, color: '#6B7280' },
  idBadge: { backgroundColor: '#FFF5F2', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  idBadgeText: { color: '#E76F51', fontSize: 12, fontWeight: 'bold' },
  scrollContent: { padding: 20 },
  taskCard: { 
    backgroundColor: '#FFFFFF', 
    padding: 20, 
    borderRadius: 24, 
    borderWidth: 1, 
    borderColor: '#F3F4F6',
    marginBottom: 25,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10
  },
  taskTitle: { fontSize: 18, fontWeight: 'bold', color: '#E76F51', marginBottom: 8 },
  locationRow: { flexDirection: 'row', alignItems: 'center' },
  locationText: { fontSize: 14, color: '#6B7280', marginLeft: 6 },
  imageSection: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 },
  imageColumn: { width: '48%' },
  sectionLabel: { fontSize: 14, fontWeight: 'bold', color: '#374151', marginBottom: 12 },
  taskImage: { width: '100%', height: 160, borderRadius: 20 },
  captureButton: { 
    width: '100%', 
    height: 160, 
    borderRadius: 20, 
    borderWidth: 2, 
    borderColor: '#E76F51', 
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF5F2'
  },
  cameraCircle: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#E76F51', justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  captureText: { fontSize: 12, fontWeight: 'bold', color: '#E76F51' },
  captureSubText: { fontSize: 10, color: '#E76F51', marginTop: 2 },
  notesSection: { marginBottom: 25 },
  notesInput: { 
    backgroundColor: 'white', 
    borderWidth: 1, 
    borderColor: '#F3F4F6', 
    borderRadius: 24, 
    padding: 20, 
    height: 140, 
    fontSize: 15,
    color: '#111827' 
  },
  hindiHintText: { fontSize: 11, color: '#9CA3AF', marginTop: 8, marginLeft: 5 },
  metaRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 },
  metaCard: { width: '48%', backgroundColor: '#FFF5F2', padding: 15, borderRadius: 20 },
  metaLabel: { fontSize: 10, fontWeight: 'bold', color: '#E76F51', marginBottom: 8 },
  metaValueRow: { flexDirection: 'row', alignItems: 'center' },
  metaValue: { fontSize: 15, fontWeight: 'bold', color: '#111827', marginLeft: 6 },
  mapSection: { marginBottom: 20 },
  mapFrame: { width: '100%', height: 120, borderRadius: 24, overflow: 'hidden' },
  mapImage: { width: '100%', height: '100%', opacity: 0.6 },
  footer: { 
    flexDirection: 'row', 
    padding: 20, 
    borderTopWidth: 1, 
    borderTopColor: '#F3F4F6', 
    backgroundColor: 'white',
    alignItems: 'center'
  },
  cancelButton: { flex: 1, height: 60, borderRadius: 30, borderWidth: 1, borderColor: '#E5E7EB', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  cancelButtonText: { color: '#4B5563', fontWeight: 'bold' },
  resolveButton: { flex: 2, height: 60, borderRadius: 30, backgroundColor: '#2D6A4F', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', elevation: 4 },
  resolveButtonText: { color: 'white', fontWeight: 'bold', fontSize: 15 },
  resolveButtonSub: { color: 'rgba(255,255,255,0.7)', fontSize: 10, textAlign: 'center' }
});