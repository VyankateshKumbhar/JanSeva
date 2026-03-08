import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { Bell, User, MapPin, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react-native';
import { Colors } from '../constants/theme';

const { width } = Dimensions.get('window');

export default function RegionalPerformance() {
  const theme = Colors.light;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTitleRow}>
          <View style={[styles.iconBox, { backgroundColor: theme.brandLight }]}>
             <TrendingUp size={20} color={theme.brand} />
          </View>
          <View>
            <Text style={styles.titleMain}>DMC Regional</Text>
            <Text style={styles.titleSub}>Performance / क्षेत्रीय प्रदर्शन</Text>
          </View>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.actionCircle}><Bell size={20} color="#6B7280" /></TouchableOpacity>
          <TouchableOpacity style={styles.actionCircle}><User size={20} color="#6B7280" /></TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Category Tabs */}
        <View style={styles.tabBar}>
          <TouchableOpacity style={[styles.tab, { borderBottomColor: theme.brand, borderBottomWidth: 3 }]}>
            <Text style={[styles.tabText, { color: theme.brand }]}>Overview / अवलोकन</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Resolution / समाधान</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Pending</Text>
          </TouchableOpacity>
        </View>

        {/* Heatmap Section */}
        <Text style={styles.sectionTitle}>Delhi Ward Heatmap / दिल्ली वार्ड हीटमैप</Text>
        <View style={styles.mapCard}>
          <View style={styles.mapPlaceholder}>
             {/* Map Image/Component would go here */}
             <MapPin size={30} color={theme.brand} />
             <Text style={styles.mapOverlayText}>Central Zone Focus</Text>
          </View>
          <View style={styles.mapStats}>
            <Text style={styles.mapStatTitle}>Current Focus / वर्तमान फोकस</Text>
            <Text style={styles.mapStatZone}>Central Zone / मध्य क्षेत्र</Text>
            <Text style={styles.mapStatRate}>84% Avg. Resolution Rate</Text>
          </View>
        </View>

        {/* Weekly Resolution Card */}
        <View style={styles.resolutionCard}>
          <View style={styles.resHeader}>
            <Text style={styles.resTitle}>Weekly Resolution Rate{"\n"}<Text style={styles.resTitleHi}>साप्ताहिक समाधान दर</Text></Text>
            <Text style={[styles.resPercentage, { color: theme.brand }]}>78.4% <Text style={styles.resTrend}>↗ 2.4%</Text></Text>
          </View>
          
          <ProgressBar label="Sanitation / स्वच्छता" progress={0.92} color={theme.brand} />
          <ProgressBar label="Street Lights / स्ट्रीट लाइट" progress={0.64} color={theme.brand} />
          <ProgressBar label="Water Supply / जल आपूर्ति" progress={0.81} color={theme.brand} />
        </View>

        {/* Top Performing Wards */}
        <View style={styles.listHeader}>
          <CheckCircle size={18} color="#10B981" />
          <Text style={styles.listTitle}>Top Performing Wards / शीर्ष वार्ड</Text>
        </View>
        <WardItem rank="01" name="Rohini Zone - Ward 21" rate="98% Match" color="#10B981" bg="#F0FDF4" />
        <WardItem rank="02" name="Civil Lines - Ward 08" rate="95% Match" color="#10B981" bg="#F0FDF4" />

        {/* Critical Wards */}
        <View style={[styles.listHeader, { marginTop: 20 }]}>
          <AlertTriangle size={18} color="#EF4444" />
          <Text style={styles.listTitle}>Critical Wards / महत्वपूर्ण वार्ड</Text>
        </View>
        <CriticalItem name="Najafgarh - Ward 45" tickets="1,420 tickets" status="URGENT" />
        <CriticalItem name="Shahdara South - Ward 12" tickets="848 tickets" status="CRITICAL" />
      </ScrollView>
    </SafeAreaView>
  );
}

// Sub-components
const ProgressBar = ({ label, progress, color }: any) => (
  <View style={styles.progressItem}>
    <View style={styles.progressLabelRow}>
      <Text style={styles.progressLabel}>{label}</Text>
      <Text style={[styles.progressVal, { color }]}>{(progress * 100).toFixed(0)}%</Text>
    </View>
    <View style={styles.progressBg}>
      <View style={[styles.progressFill, { width: `${progress * 100}%`, backgroundColor: color }]} />
    </View>
  </View>
);

const WardItem = ({ rank, name, rate, color, bg }: any) => (
  <View style={[styles.wardItem, { backgroundColor: bg }]}>
    <View style={[styles.rankBadge, { backgroundColor: color }]}>
      <Text style={styles.rankText}>{rank}</Text>
    </View>
    <View style={styles.wardInfo}>
      <Text style={styles.wardName}>{name}</Text>
      <Text style={styles.wardSub}>Avg. Resolution: 4.2 hrs</Text>
    </View>
    <Text style={[styles.wardMatch, { color }]}>{rate}</Text>
  </View>
);

const CriticalItem = ({ name, tickets, status }: any) => (
  <View style={styles.criticalCard}>
    <View style={styles.criticalIcon}>
      <AlertTriangle size={20} color="#fff" />
    </View>
    <View style={styles.wardInfo}>
      <Text style={styles.wardName}>{name}</Text>
      <Text style={styles.wardSub}>Pending: {tickets}</Text>
    </View>
    <View style={[styles.statusBadge, { backgroundColor: status === 'URGENT' ? '#FEE2E2' : '#FEF2F2' }]}>
      <Text style={[styles.statusText, { color: '#EF4444' }]}>{status}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  headerTitleRow: { flexDirection: 'row', alignItems: 'center' },
  iconBox: { width: 40, height: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  titleMain: { fontSize: 18, fontWeight: '800', color: '#1F2937' },
  titleSub: { fontSize: 10, color: '#6B7280', fontWeight: '600' },
  headerActions: { flexDirection: 'row' },
  actionCircle: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#F3F4F6', justifyContent: 'center', alignItems: 'center', marginLeft: 10 },
  scrollContent: { paddingBottom: 100 },
  tabBar: { flexDirection: 'row', paddingHorizontal: 16, marginTop: 10 },
  tab: { paddingVertical: 12, marginRight: 20 },
  tabText: { fontSize: 13, fontWeight: '700', color: '#9CA3AF' },
  sectionTitle: { fontSize: 16, fontWeight: '800', color: '#1F2937', paddingHorizontal: 16, marginTop: 20 },
  mapCard: { margin: 16, borderRadius: 20, backgroundColor: '#fff', overflow: 'hidden', elevation: 4, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10 },
  mapPlaceholder: { height: 160, backgroundColor: '#F0F9FF', justifyContent: 'center', alignItems: 'center' },
  mapOverlayText: { marginTop: 8, color: '#0369A1', fontWeight: '700', fontSize: 12 },
  mapStats: { padding: 15 },
  mapStatTitle: { fontSize: 10, color: '#D95C37', fontWeight: '800' },
  mapStatZone: { fontSize: 16, fontWeight: '800', color: '#1F2937' },
  mapStatRate: { fontSize: 12, color: '#6B7280' },
  resolutionCard: { margin: 16, padding: 20, backgroundColor: '#fff', borderRadius: 24, borderWidth: 1, borderColor: '#F3F4F6' },
  resHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  resTitle: { fontSize: 15, fontWeight: '800', color: '#1F2937' },
  resTitleHi: { fontSize: 12, color: '#6B7280', fontWeight: '400' },
  resPercentage: { fontSize: 22, fontWeight: '800' },
  resTrend: { fontSize: 12, fontWeight: '600' },
  progressItem: { marginBottom: 15 },
  progressLabelRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  progressLabel: { fontSize: 12, fontWeight: '700', color: '#4B5563' },
  progressVal: { fontSize: 12, fontWeight: '800' },
  progressBg: { height: 8, backgroundColor: '#F3F4F6', borderRadius: 4 },
  progressFill: { height: '100%', borderRadius: 4 },
  listHeader: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, marginBottom: 12 },
  listTitle: { fontSize: 14, fontWeight: '800', color: '#1F2937', marginLeft: 8 },
  wardItem: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, padding: 12, borderRadius: 16, marginBottom: 10 },
  rankBadge: { width: 28, height: 28, borderRadius: 14, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  rankText: { color: '#fff', fontSize: 12, fontWeight: '800' },
  wardInfo: { flex: 1 },
  wardName: { fontSize: 14, fontWeight: '700', color: '#1F2937' },
  wardSub: { fontSize: 11, color: '#6B7280' },
  wardMatch: { fontSize: 12, fontWeight: '700' },
  criticalCard: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, padding: 16, backgroundColor: '#FFF5F5', borderRadius: 16, marginBottom: 10 },
  criticalIcon: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#EF4444', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  statusBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  statusText: { fontSize: 10, fontWeight: '800' }
});