import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { 
  Search, 
  Bell, 
  LayoutGrid, 
  Map as MapIcon, 
  AlertTriangle, 
  LineChart, 
  Settings,
  Plus,
  Minus,
  ShieldAlert
} from 'lucide-react-native';
import { Colors } from "../constants/theme";

const theme = Colors.light;
const { width } = Dimensions.get('window');

export default function CommissionerView() {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerProfile}>
          <View style={styles.profileBadge}>
             <View style={styles.profileIconBg}>
                <ShieldAlert size={16} color={theme.brand} />
             </View>
          </View>
          <View>
            <Text style={styles.headerTitle}>Commissioner View</Text>
            <Text style={styles.headerSub}>City-Wide Strategy Hub</Text>
          </View>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.iconButton}>
            <Search size={22} color="#1F2937" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bellContainer}>
            <Bell size={22} color={theme.brand} />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Live Heatmap Area */}
        <View style={styles.mapCard}>
          <View style={styles.heatmapBadge}>
            <View style={styles.liveDot} />
            <Text style={styles.heatmapText}>Live Heatmap</Text>
          </View>
          
          {/* Blurred Heatmap Effect */}
          <View style={styles.mapPlaceholder}>
             <View style={styles.heatCircle} />
          </View>

          <View style={styles.mapControls}>
            <TouchableOpacity style={styles.controlBtn}><Plus size={18} color="#6B7280" /></TouchableOpacity>
            <TouchableOpacity style={styles.controlBtn}><Minus size={18} color="#6B7280" /></TouchableOpacity>
          </View>
        </View>

        {/* Filter Pills */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterRow}>
          <TouchableOpacity style={[styles.pill, { backgroundColor: theme.brand, borderColor: theme.brand }]}>
            <Text style={styles.pillTextActive}>All Units</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pill}><Text style={styles.pillText}>Police</Text></TouchableOpacity>
          <TouchableOpacity style={styles.pill}><Text style={styles.pillText}>Fire/EMS</Text></TouchableOpacity>
          <TouchableOpacity style={styles.pill}><Text style={styles.pillText}>Public Works</Text></TouchableOpacity>
        </ScrollView>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>ACTIVE TICKETS</Text>
            <Text style={styles.statNumber}>4,192</Text>
            <Text style={styles.statPercentDown}>⬇ 4%</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>RESOLVED (24H)</Text>
            <Text style={[styles.statNumber, { color: theme.brand }]}>841</Text>
            <Text style={styles.statPercentUp}>⬆ 2%</Text>
          </View>
        </View>

        {/* Aging Tickets Section */}
        <View style={styles.sectionHeader}>
           <View style={styles.sectionTitleRow}>
             <Text style={styles.criticalIcon}>!</Text>
             <Text style={styles.sectionTitle}>Aging Tickets ({'>'}72h)</Text>
           </View>
           <View style={styles.criticalBadge}>
             <Text style={styles.criticalText}>CRITICAL</Text>
           </View>
        </View>

        {/* Ticket List */}
        <View style={styles.ticketCard}>
          <View style={styles.ticketIndicator} />
          <View style={styles.ticketContent}>
            <Text style={styles.ticketTitle}>Main St Substation Repair</Text>
            <Text style={styles.ticketSub}>Public Works • Waiting for parts</Text>
          </View>
          <View style={styles.ticketTimeContainer}>
            <Text style={styles.ticketTime}>92h</Text>
            <Text style={styles.ticketTimeLabel}>Aging</Text>
          </View>
        </View>

        <View style={styles.ticketCard}>
          <View style={[styles.ticketIndicator, { backgroundColor: theme.brand }]} />
          <View style={styles.ticketContent}>
            <Text style={styles.ticketTitle}>Zone 4 Overcrowding Report</Text>
            <Text style={styles.ticketSub}>Transit Police • Assigned</Text>
          </View>
          <View style={styles.ticketTimeContainer}>
            <Text style={styles.ticketTime}>78h</Text>
            <Text style={styles.ticketTimeLabel}>Aging</Text>
          </View>
        </View>

        <TouchableOpacity>
           <Text style={styles.viewAllText}>View All Aging Tickets (24)</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Exact Bottom Navigation from Screenshot */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
           <LayoutGrid size={24} color={theme.brand} />
           <Text style={[styles.navLabel, { color: theme.brand }]}>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
           <MapIcon size={24} color="#9CA3AF" />
           <Text style={styles.navLabel}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
           <AlertTriangle size={24} color="#9CA3AF" />
           <Text style={styles.navLabel}>Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
           <LineChart size={24} color="#9CA3AF" />
           <Text style={styles.navLabel}>Analytics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
           <Settings size={24} color="#9CA3AF" />
           <Text style={styles.navLabel}>System</Text>
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
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFF'
  },
  headerProfile: { flexDirection: 'row', alignItems: 'center' },
  profileBadge: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#FFF5F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12
  },
  profileIconBg: { padding: 6, backgroundColor: 'white', borderRadius: 8, elevation: 1 },
  headerTitle: { fontSize: 17, fontWeight: 'bold', color: '#111827' },
  headerSub: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  headerActions: { flexDirection: 'row', alignItems: 'center' },
  iconButton: { padding: 5, marginRight: 10 },
  bellContainer: { 
    position: 'relative', 
    backgroundColor: '#FFF5F2', 
    padding: 8, 
    borderRadius: 10 
  },
  notificationDot: { 
    position: 'absolute', 
    top: 8, 
    right: 8, 
    width: 6, 
    height: 6, 
    borderRadius: 3, 
    backgroundColor: '#EF4444',
    borderWidth: 1,
    borderColor: 'white'
  },
  scrollContent: { padding: 20, paddingBottom: 120 },
  mapCard: {
    height: 230,
    backgroundColor: '#E5E7EB',
    borderRadius: 28,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 24
  },
  mapPlaceholder: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  heatCircle: { 
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    backgroundColor: '#E76F51', 
    opacity: 0.35, 
    transform: [{ scaleX: 1.8 }] 
  },
  heatmapBadge: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
    elevation: 2
  },
  liveDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: '#EF4444', marginRight: 8 },
  heatmapText: { fontSize: 11, fontWeight: 'bold', color: '#111827' },
  mapControls: { position: 'absolute', bottom: 16, right: 16 },
  controlBtn: { 
    backgroundColor: 'white', 
    padding: 6, 
    borderRadius: 10, 
    marginBottom: 6, 
    elevation: 3 
  },
  filterRow: { marginBottom: 24 },
  pill: { 
    paddingHorizontal: 20, 
    paddingVertical: 10, 
    borderRadius: 12, 
    borderWidth: 1, 
    borderColor: '#E5E7EB', 
    marginRight: 10,
    backgroundColor: 'white'
  },
  pillText: { fontSize: 14, color: '#4B5563', fontWeight: '500' },
  pillTextActive: { fontSize: 14, color: 'white', fontWeight: 'bold' },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 28 },
  statCard: { 
    width: (width - 50) / 2, 
    backgroundColor: 'white', 
    padding: 16, 
    borderRadius: 24, 
    borderWidth: 1, 
    borderColor: '#F3F4F6',
    elevation: 1
  },
  statLabel: { fontSize: 10, color: '#9CA3AF', fontWeight: 'bold', marginBottom: 10, letterSpacing: 0.5 },
  statNumber: { fontSize: 26, fontWeight: 'bold', color: '#111827' },
  statPercentDown: { fontSize: 13, color: '#10B981', marginTop: 4 },
  statPercentUp: { fontSize: 13, color: '#EF4444', marginTop: 4 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 },
  sectionTitleRow: { flexDirection: 'row', alignItems: 'center' },
  criticalIcon: { color: '#EF4444', fontWeight: 'bold', fontSize: 22, marginRight: 10 },
  sectionTitle: { fontSize: 17, fontWeight: 'bold', color: '#111827' },
  criticalBadge: { backgroundColor: '#FEE2E2', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  criticalText: { fontSize: 10, color: '#EF4444', fontWeight: '900' },
  ticketCard: { 
    flexDirection: 'row', 
    backgroundColor: '#FFF7F5', 
    padding: 18, 
    borderRadius: 20, 
    marginBottom: 14, 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FEE2E2'
  },
  ticketIndicator: { width: 4, height: 40, backgroundColor: '#EF4444', borderRadius: 2 },
  ticketContent: { flex: 1, marginLeft: 16 },
  ticketTitle: { fontSize: 15, fontWeight: 'bold', color: '#111827' },
  ticketSub: { fontSize: 12, color: '#6B7280', marginTop: 4 },
  ticketTimeContainer: { alignItems: 'center' },
  ticketTime: { fontSize: 17, fontWeight: 'bold', color: '#EF4444' },
  ticketTimeLabel: { fontSize: 10, color: '#9CA3AF', fontWeight: 'bold' },
  viewAllText: { textAlign: 'center', color: theme.brand, fontWeight: 'bold', marginTop: 10, fontSize: 14 },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 25,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    elevation: 20
  },
  navItem: { alignItems: 'center', flex: 1 },
  navLabel: { fontSize: 10, color: '#9CA3AF', marginTop: 6, fontWeight: '600' }
});