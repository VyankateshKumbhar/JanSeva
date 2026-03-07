import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Menu, Bell, Users, Truck, Clock, Droplets, Zap, Trash2, MapPin } from 'lucide-react-native';
import { Colors } from '../constants/theme';

export default function StaffDashboard() {
  const theme = Colors.light;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.iconBtn}>
            <Menu size={24} color={theme.brand} />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.headerTitle}>Jan Seva</Text>
            <Text style={styles.headerSub}>DEPT HEAD CONSOLE</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationBtn}>
          <Bell size={22} color={theme.brand} />
          <View style={[styles.dot, { backgroundColor: theme.brand }]} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollBody}>
        {/* Resource Allocation Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Resource Allocation</Text>
          <Text style={[styles.liveStatus, { color: theme.brand }]}>Live Status</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <View style={styles.statIconRow}>
              <Users size={16} color={theme.brand} />
              <Text style={styles.statLabel}>TOTAL STAFF</Text>
            </View>
            <Text style={styles.statValue}>1,240 <Text style={styles.growth}>+5%</Text></Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIconRow}>
              <Truck size={16} color={theme.brand} />
              <Text style={styles.statLabel}>ACTIVE TRUCKS</Text>
            </View>
            <Text style={styles.statValue}>86 <Text style={styles.growth}>+2%</Text></Text>
          </View>
        </View>

        {/* KPI Card */}
        <View style={[styles.kpiCard, { backgroundColor: theme.brand }]}>
          <View style={styles.kpiHeader}>
            <View style={styles.kpiTitleRow}>
              <Clock size={16} color="#fff" />
              <Text style={styles.kpiLabel}>AVG RESOLUTION TIME</Text>
            </View>
            <View style={styles.kpiBadge}>
              <Text style={styles.kpiBadgeText}>KPI TARGET</Text>
            </View>
          </View>
          <Text style={styles.kpiValue}>4.2 hrs <Text style={styles.kpiTarget}>vs 5.0h target</Text></Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBarFill, { width: '84%' }]} />
          </View>
        </View>

        {/* Incoming Transfers */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Incoming Transfers</Text>
          <TouchableOpacity><Text style={[styles.viewAll, { color: theme.brand }]}>View All</Text></TouchableOpacity>
        </View>

        <View style={styles.transferList}>
          <TransferItem 
            icon={<Droplets size={20} color="#D95C37" />}
            title="Emergency..." 
            dept="Water Dept - Sector 7" 
            priority="HIGH"
          />
          <TransferItem 
            icon={<Zap size={20} color="#F59E0B" />}
            title="Street Light..." 
            dept="PWD - North Block" 
            priority="MID"
          />
          <TransferItem 
            icon={<Trash2 size={20} color="#6B7280" />}
            title="Refuse..." 
            dept="Health Dept - Ward 4" 
            priority="LOW"
          />
        </View>

        {/* Service Hotspots / Map Section */}
        <Text style={styles.sectionTitle}>Service Hotspots</Text>
        <View style={styles.mapContainer}>
          <View style={styles.mapPlaceholder}>
             {/* Replace with an actual MapView later */}
             <MapPin size={32} color={theme.brand} />
             <Text style={styles.mapText}>Live Fleet Location</Text>
          </View>
          <View style={styles.mapOverlay}>
            <Text style={styles.activeUnits}>12 units active</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const TransferItem = ({ icon, title, dept, priority }: any) => {
  const priorityColors: any = { HIGH: '#FEE2E2', MID: '#FEF3C7', LOW: '#F3F4F6' };
  const textColors: any = { HIGH: '#EF4444', MID: '#D97706', LOW: '#6B7280' };

  return (
    <View style={styles.transferItem}>
      <View style={styles.itemLeft}>
        <View style={styles.iconCircle}>{icon}</View>
        <View>
          <View style={styles.titleRow}>
            <Text style={styles.itemTitle}>{title}</Text>
            <View style={[styles.priorityBadge, { backgroundColor: priorityColors[priority] }]}>
              <Text style={[styles.priorityText, { color: textColors[priority] }]}>{priority}</Text>
            </View>
          </View>
          <Text style={styles.itemDept}>From: {dept}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.acceptBtn}>
        <Text style={styles.acceptText}>Accept</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, alignItems: 'center' },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  iconBtn: { padding: 8, marginRight: 8 },
  titleContainer: { marginLeft: 4 },
  headerTitle: { fontSize: 18, fontWeight: '800', color: '#1F2937' },
  headerSub: { fontSize: 10, color: '#6B7280', letterSpacing: 1 },
  notificationBtn: { padding: 8, position: 'relative' },
  dot: { width: 8, height: 8, borderRadius: 4, position: 'absolute', right: 10, top: 10, borderWidth: 2, borderColor: '#fff' },
  scrollBody: { paddingHorizontal: 20, paddingBottom: 100 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 24, marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#1F2937' },
  liveStatus: { fontSize: 12, fontWeight: '600' },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  statCard: { width: '48%', backgroundColor: '#FFF7ED', padding: 16, borderRadius: 20 },
  statIconRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  statLabel: { fontSize: 10, fontWeight: '700', color: '#6B7280', marginLeft: 6 },
  statValue: { fontSize: 22, fontWeight: '800', color: '#1F2937' },
  growth: { fontSize: 12, color: '#10B981', fontWeight: '600' },
  kpiCard: { padding: 20, borderRadius: 24, marginBottom: 24, elevation: 8, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 10 },
  kpiHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  kpiTitleRow: { flexDirection: 'row', alignItems: 'center' },
  kpiLabel: { color: '#fff', fontSize: 10, fontWeight: '700', marginLeft: 8 },
  kpiBadge: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  kpiBadgeText: { color: '#fff', fontSize: 8, fontWeight: '800' },
  kpiValue: { color: '#fff', fontSize: 28, fontWeight: '800', marginBottom: 15 },
  kpiTarget: { fontSize: 14, fontWeight: '400', opacity: 0.8 },
  progressBarContainer: { height: 6, backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 3 },
  progressBarFill: { height: '100%', backgroundColor: '#fff', borderRadius: 3 },
  viewAll: { fontSize: 12, fontWeight: '600' },
  transferList: { marginBottom: 24 },
  transferItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  itemLeft: { flexDirection: 'row', alignItems: 'center' },
  iconCircle: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#FFF7ED', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  titleRow: { flexDirection: 'row', alignItems: 'center' },
  itemTitle: { fontSize: 15, fontWeight: '700', color: '#1F2937' },
  priorityBadge: { marginLeft: 8, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  priorityText: { fontSize: 8, fontWeight: '800' },
  itemDept: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  acceptBtn: { backgroundColor: '#D95C37', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 10 },
  acceptText: { color: '#fff', fontSize: 13, fontWeight: '700' },
  mapContainer: { height: 200, backgroundColor: '#E5E7EB', borderRadius: 24, overflow: 'hidden', marginTop: 12, position: 'relative' },
  mapPlaceholder: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F0FDF4' },
  mapText: { marginTop: 8, fontSize: 12, color: '#16A34A', fontWeight: '600' },
  mapOverlay: { position: 'absolute', bottom: 15, right: 15, backgroundColor: '#fff', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, elevation: 2 },
  activeUnits: { fontSize: 10, fontWeight: '700', color: '#D95C37' }
});