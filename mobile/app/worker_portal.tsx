import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { 
  Menu, 
  Bell, 
  Search, 
  Droplet, 
  Trash2, 
  Lightbulb, 
  Navigation2, 
  Edit3,
  ClipboardList,
  Map,
  BarChart3,
  User
} from 'lucide-react-native';
import { Colors } from "../constants/theme";

const theme = Colors.light;

const tasks = [
  {
    id: '#JS-9921',
    title: 'WATER LEAKAGE',
    location: 'Block C, Lajpat Nagar, New Delhi',
    distance: '250m away',
    priority: 'HIGH PRIORITY',
    priorityColor: '#FEE2E2',
    priorityText: '#EF4444',
    icon: Droplet,
  },
  {
    id: '#JS-8842',
    title: 'GARBAGE OVERFLOW',
    location: 'Near Metro Pillar 142, Karol Bagh',
    distance: '1.2km away',
    priority: 'MEDIUM',
    priorityColor: '#FFEDD5',
    priorityText: '#F59E0B',
    icon: Trash2,
  },
  {
    id: '#JS-7721',
    title: 'STREET LIGHT REPLACEMENT',
    location: 'Main Market Road, South Ext-1',
    distance: '3.5km away',
    priority: 'LOW PRIORITY',
    priorityColor: '#F3F4F6',
    priorityText: '#6B7280',
    icon: Lightbulb,
  },
];

export default function WorkerPortal() {
  const [activeTab, setActiveTab] = useState('ACTIVE');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#F9FAFB' }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity><Menu size={28} color={theme.brand} /></TouchableOpacity>
          <View style={styles.logoContainer}>
            <Text style={[styles.logoText, { color: theme.brand }]}>JAN SEVA</Text>
            <Text style={styles.logoSub}>MUNICIPAL WORKER PORTAL</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationBtn}>
          <Bell size={24} color={theme.brand} />
          <View style={styles.notifDot} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color="#9CA3AF" style={{ marginRight: 10 }} />
          <TextInput 
            placeholder="Search task ID or locality..." 
            placeholderTextColor="#9CA3AF"
            style={styles.searchInput}
          />
        </View>
      </View>

      {/* Main Tabs */}
      <View style={styles.tabRow}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'ACTIVE' && styles.tabActive]}
          onPress={() => setActiveTab('ACTIVE')}
        >
          <Text style={[styles.tabText, activeTab === 'ACTIVE' && styles.tabTextActive]}>ACTIVE (12)</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'RESOLVED' && styles.tabActive]}
          onPress={() => setActiveTab('RESOLVED')}
        >
          <Text style={[styles.tabText, activeTab === 'RESOLVED' && styles.tabTextActive]}>RESOLVED</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Filter Pills */}
        <View style={styles.pillRow}>
          <TouchableOpacity style={[styles.pill, { backgroundColor: theme.brand }]}><Text style={styles.pillTextActive}>HIGH PRIORITY</Text></TouchableOpacity>
          <TouchableOpacity style={styles.pill}><Text style={styles.pillText}>NEARBY</Text></TouchableOpacity>
          <TouchableOpacity style={styles.pill}><Text style={styles.pillText}>POTHOLES</Text></TouchableOpacity>
        </View>

        {/* Task Cards */}
        {tasks.map((task, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardTop}>
              <View style={styles.cardIconBox}>
                <task.icon size={24} color={theme.brand} />
              </View>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{task.title}</Text>
                <Text style={styles.cardId}>ID: {task.id}</Text>
              </View>
              <View style={[styles.priorityBadge, { backgroundColor: task.priorityColor }]}>
                <Text style={[styles.priorityText, { color: task.priorityText }]}>{task.priority}</Text>
              </View>
            </View>

            <View style={styles.cardDetails}>
              <View style={styles.detailItem}>
                <Map size={14} color="#6B7280" />
                <Text style={styles.detailText}>{task.location}</Text>
              </View>
              <View style={styles.detailItem}>
                <Navigation2 size={14} color={theme.brand} style={{ transform: [{ rotate: '45deg' }] }} />
                <Text style={[styles.detailText, { color: theme.brand, fontWeight: 'bold' }]}>{task.distance}</Text>
              </View>
            </View>

            <View style={styles.actionRow}>
              <TouchableOpacity style={[styles.actionBtn, { backgroundColor: theme.brand }]}>
                <Navigation2 size={18} color="white" style={{ marginRight: 8 }} />
                <Text style={styles.actionBtnText}>NAVIGATE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#FFF5F2' }]}>
                <Edit3 size={18} color={theme.brand} style={{ marginRight: 8 }} />
                <Text style={[styles.actionBtnText, { color: theme.brand }]}>UPDATE</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <ClipboardList size={24} color={theme.brand} />
          <Text style={[styles.navLabel, { color: theme.brand }]}>TASKS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Map size={24} color="#9CA3AF" />
          <Text style={styles.navLabel}>MAP VIEW</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <BarChart3 size={24} color="#9CA3AF" />
          <Text style={styles.navLabel}>STATS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <User size={24} color="#9CA3AF" />
          <Text style={styles.navLabel}>PROFILE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  logoContainer: { marginLeft: 15 },
  logoText: { fontSize: 22, fontWeight: '900', letterSpacing: 0.5 },
  logoSub: { fontSize: 10, color: '#6B7280', fontWeight: 'bold' },
  notificationBtn: { backgroundColor: '#FFF5F2', padding: 8, borderRadius: 12, position: 'relative' },
  notifDot: { position: 'absolute', top: 8, right: 10, width: 8, height: 8, borderRadius: 4, backgroundColor: '#EF4444', borderWidth: 1.5, borderColor: 'white' },
  searchContainer: { padding: 16, backgroundColor: 'white' },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  searchInput: { flex: 1, fontSize: 15, color: '#111827' },
  tabRow: { flexDirection: 'row', backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  tab: { flex: 1, paddingVertical: 15, alignItems: 'center' },
  tabActive: { borderBottomWidth: 3, borderBottomColor: theme.brand },
  tabText: { fontSize: 14, color: '#9CA3AF', fontWeight: 'bold' },
  tabTextActive: { color: theme.brand },
  scrollContent: { padding: 16, paddingBottom: 100 },
  pillRow: { flexDirection: 'row', marginBottom: 20 },
  pill: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, borderWidth: 1, borderColor: '#E5E7EB', marginRight: 10, backgroundColor: 'white' },
  pillText: { fontSize: 12, color: '#4B5563', fontWeight: 'bold' },
  pillTextActive: { fontSize: 12, color: 'white', fontWeight: 'bold' },
  card: { backgroundColor: 'white', borderRadius: 24, padding: 16, marginBottom: 20, elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10 },
  cardTop: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 15 },
  cardIconBox: { width: 48, height: 48, borderRadius: 16, backgroundColor: '#FFF5F2', justifyContent: 'center', alignItems: 'center' },
  cardInfo: { flex: 1, marginLeft: 12 },
  cardTitle: { fontSize: 16, fontWeight: '900', color: '#111827' },
  cardId: { fontSize: 12, color: '#9CA3AF', marginTop: 2 },
  priorityBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  priorityText: { fontSize: 10, fontWeight: '900' },
  cardDetails: { marginBottom: 20 },
  detailItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  detailText: { fontSize: 13, color: '#4B5563', marginLeft: 8 },
  actionRow: { flexDirection: 'row', justifyContent: 'space-between' },
  actionBtn: { flex: 0.48, height: 45, borderRadius: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  actionBtnText: { color: 'white', fontSize: 14, fontWeight: 'bold' },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  navItem: { alignItems: 'center' },
  navLabel: { fontSize: 10, color: '#9CA3AF', marginTop: 4, fontWeight: 'bold' }
});