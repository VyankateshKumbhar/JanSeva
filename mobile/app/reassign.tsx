import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';
// Using Expo built-in icons instead of lucide
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const departments = [
  { id: '1', name: 'Water & Sewage', icon: 'water', lib: 'Ionicons', desc: 'Leaks, pipe bursts, and billing', color: '#E76F51' },
  { id: '2', name: 'Sanitation', icon: 'delete-outline', lib: 'MaterialCommunityIcons', desc: 'Waste collection and recycling', color: '#666' },
  { id: '3', name: 'Electricity & Power', icon: 'zap', lib: 'Feather', desc: 'Outages and electrical hazards', color: '#666' },
  { id: '4', name: 'Parks & Recreation', icon: 'notifications-none', lib: 'MaterialIcons', desc: 'Public gardens and playgrounds', color: '#666' },
];

export default function ReassignTicket() {
  const [selectedDept, setSelectedDept] = useState('1');

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity>
            <Ionicons name="arrow-back" color="#000" size={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Ticket #4829</Text>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons name="dots-vertical" color="#000" size={24} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>Reassign Ticket</Text>
          <Text style={styles.subTitle}>
            Currently assigned to <Text style={styles.highlightText}>Roads & Infrastructure</Text>.
            Select the correct department for this issue.
          </Text>
        </View>

        {/* Department Selection */}
        <Text style={styles.sectionLabel}>SELECT TARGET DEPARTMENT</Text>
        
        {/* Manually mapping to handle different Icon Libraries if needed */}
        <TouchableOpacity 
          style={[styles.card, selectedDept === '1' && styles.selectedCard]}
          onPress={() => setSelectedDept('1')}
        >
          <View style={[styles.radio, selectedDept === '1' && styles.radioSelected]}>
            {selectedDept === '1' && <View style={styles.radioInner} />}
          </View>
          <Ionicons name="water-outline" size={20} color={selectedDept === '1' ? "#E76F51" : "#666"} style={styles.icon} />
          <View style={styles.deptText}>
            <Text style={styles.deptName}>Water & Sewage</Text>
            <Text style={styles.deptDesc}>Leaks, pipe bursts, and billing</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.card, selectedDept === '2' && styles.selectedCard]}
          onPress={() => setSelectedDept('2')}
        >
          <View style={[styles.radio, selectedDept === '2' && styles.radioSelected]}>
            {selectedDept === '2' && <View style={styles.radioInner} />}
          </View>
          <MaterialCommunityIcons name="delete-outline" size={20} color={selectedDept === '2' ? "#E76F51" : "#666"} style={styles.icon} />
          <View style={styles.deptText}>
            <Text style={styles.deptName}>Sanitation</Text>
            <Text style={styles.deptDesc}>Waste collection and recycling</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.card, selectedDept === '3' && styles.selectedCard]}
          onPress={() => setSelectedDept('3')}
        >
          <View style={[styles.radio, selectedDept === '3' && styles.radioSelected]}>
            {selectedDept === '3' && <View style={styles.radioInner} />}
          </View>
          <MaterialCommunityIcons name="lightning-bolt-outline" size={20} color={selectedDept === '3' ? "#E76F51" : "#666"} style={styles.icon} />
          <View style={styles.deptText}>
            <Text style={styles.deptName}>Electricity & Power</Text>
            <Text style={styles.deptDesc}>Outages and electrical hazards</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.card, selectedDept === '4' && styles.selectedCard]}
          onPress={() => setSelectedDept('4')}
        >
          <View style={[styles.radio, selectedDept === '4' && styles.radioSelected]}>
            {selectedDept === '4' && <View style={styles.radioInner} />}
          </View>
          <MaterialIcons name="notifications-none" size={20} color={selectedDept === '4' ? "#E76F51" : "#666"} style={styles.icon} />
          <View style={styles.deptText}>
            <Text style={styles.deptName}>Parks & Recreation</Text>
            <Text style={styles.deptDesc}>Public gardens and playgrounds</Text>
          </View>
        </TouchableOpacity>

        {/* Reason Input */}
        <Text style={styles.sectionLabel}>REASON FOR TRANSFER</Text>
        <TextInput 
          style={styles.input}
          placeholder="E.g. Reported pothole is actually a water..."
          placeholderTextColor="#999"
          multiline
        />
      </ScrollView>

      {/* Footer Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons name="swap-horizontal" color="#FFF" size={22} style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>Complete Transfer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFF'
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 16 },
  scrollContent: { padding: 20 },
  titleSection: { marginBottom: 30 },
  mainTitle: { fontSize: 24, fontWeight: 'bold', color: '#1A1A1A' },
  subTitle: { fontSize: 14, color: '#666', marginTop: 8, lineHeight: 20 },
  highlightText: { color: '#E76F51', fontWeight: '500' },
  sectionLabel: { fontSize: 13, fontWeight: '700', color: '#1A1A1A', marginBottom: 12, marginTop: 10 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6', // Slightly grey to match your screenshot "unselected" look
    padding: 16,
    borderRadius: 25,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  selectedCard: { borderColor: '#E76F51', backgroundColor: '#FDF2F0' },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#CCC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  radioSelected: { borderColor: '#E76F51' },
  radioInner: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#E76F51' },
  icon: { marginRight: 12 },
  deptText: { flex: 1 },
  deptName: { fontSize: 16, fontWeight: 'bold', color: '#1A1A1A' },
  deptDesc: { fontSize: 12, color: '#888', marginTop: 2 },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 20,
    padding: 15,
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#F8F9FA',
    borderTopWidth: 1,
    borderColor: '#EEE'
  },
  button: {
    backgroundColor: '#E76F51',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 30,
  },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});