import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import { 
  Ionicons, 
  MaterialCommunityIcons, 
  FontAwesome5,
} from '@expo/vector-icons';
import { Colors } from "../constants/theme";

const theme = Colors.light;

export default function CommunityImpact() {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#F9FAFB' }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity><Ionicons name="menu-outline" size={28} color="#E76F51" /></TouchableOpacity>
        <Text style={styles.headerTitle}>Community Impact</Text>
        <TouchableOpacity><Ionicons name="notifications-outline" size={24} color="#E76F51" /></TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Monthly Achievements</Text>
        <Text style={styles.sectionSub}>Transparency in local governance action.</Text>
        
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <View style={styles.iconCircle}><FontAwesome5 name="tools" size={18} color="#E76F51" /></View>
            <Text style={styles.statLabel}>Fixed Potholes</Text>
            <Text style={styles.statValue}>342</Text>
            <Text style={styles.statTrendUp}>📈 +12%</Text>
          </View>
          <View style={styles.statCard}>
            <View style={styles.iconCircle}><Ionicons name="bulb-outline" size={22} color="#E76F51" /></View>
            <Text style={styles.statLabel}>Lights Repaired</Text>
            <Text style={styles.statValue}>128</Text>
            <Text style={styles.statTrendUp}>📈 +5%</Text>
          </View>
          <View style={styles.statCard}>
            <View style={styles.iconCircle}><MaterialCommunityIcons name="trash-can-outline" size={22} color="#E76F51" /></View>
            <Text style={styles.statLabel}>Waste Cleared</Text>
            <Text style={styles.statValue}>56t</Text>
            <Text style={styles.statTrendDown}>📉 -2%</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: '#E76F51' }]}>
            <View style={[styles.iconCircle, { backgroundColor: 'rgba(255,255,255,0.2)' }]}><Ionicons name="heart-outline" size={22} color="white" /></View>
            <Text style={[styles.statLabel, { color: 'white' }]}>Total Solved</Text>
            <Text style={[styles.statValue, { color: 'white' }]}>1,204</Text>
            <Text style={{ color: 'white', fontSize: 10, marginTop: 4 }}>This Quarter</Text>
          </View>
        </View>

        {/* Responsive Wards - Fixed TS Error here */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Responsive Wards</Text>
          <TouchableOpacity><Text style={styles.viewAllText}>View All</Text></TouchableOpacity>
        </View>

        <View style={styles.wardCard}>
          <View style={[styles.wardRank, { backgroundColor: '#F59E0B' }]}><Text style={styles.rankText}>1</Text></View>
          <View style={styles.wardInfo}>
            <Text style={styles.wardName}>Ward 12 - Downtown</Text>
            <Text style={styles.wardStat}>98% Resolution Rate</Text>
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.statusActive}>Active</Text>
            <View style={styles.progressBar}>
              {/* Added 'as const' to fix TypeScript Error 2769 */}
              <View style={[styles.progressFill, { width: '98%' as const, backgroundColor: '#10B981' }]} />
            </View>
          </View>
        </View>

        <View style={styles.wardCard}>
          <View style={[styles.wardRank, { backgroundColor: '#DBEAFE' }]}><Text style={[styles.rankText, { color: '#1E40AF' }]}>2</Text></View>
          <View style={styles.wardInfo}>
            <Text style={styles.wardName}>Ward 5 - Riverside</Text>
            <Text style={styles.wardStat}>94% Resolution Rate</Text>
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.statusEfficient}>Efficient</Text>
            <View style={styles.progressBar}>
              {/* Added 'as const' to fix TypeScript Error 2769 */}
              <View style={[styles.progressFill, { width: '94%' as const, backgroundColor: '#E76F51' }]} />
            </View>
          </View>
        </View>

        {/* Public Gallery - Fixed Horizontal Scroll */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Public Gallery</Text>
          <TouchableOpacity><Text style={styles.viewAllText}>Success Stories</Text></TouchableOpacity>
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.galleryScrollContainer}
        >
          <View style={styles.galleryCard}>
            <View style={styles.galleryImages}>
              <View style={styles.imageColumn}>
                <View style={styles.badgeBefore}><Text style={styles.badgeText}>BEFORE</Text></View>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=400' }} style={styles.galleryImg} />
              </View>
              <View style={styles.imageColumn}>
                <View style={styles.badgeAfter}><Text style={styles.badgeText}>AFTER</Text></View>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1545143333-11bbac2799df?q=80&w=400' }} style={styles.galleryImg} />
              </View>
            </View>
            <View style={styles.galleryContent}>
              <Text style={styles.galleryTitle}>Oak Street Paving</Text>
              <Text style={styles.gallerySub}>Resolution time: 4 days</Text>
              <View style={styles.cheerRow}>
                <Ionicons name="thumbs-up-outline" size={16} color="#E76F51" />
                <Text style={styles.cheerText}>2.4k Citizens cheered this</Text>
              </View>
            </View>
          </View>

          <View style={styles.galleryCard}>
            <View style={styles.galleryImages}>
              <View style={styles.imageColumn}>
                <View style={styles.badgeBefore}><Text style={styles.badgeText}>BEFORE</Text></View>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400' }} style={styles.galleryImg} />
              </View>
              <View style={styles.imageColumn}>
                <View style={styles.badgeAfter}><Text style={styles.badgeText}>AFTER</Text></View>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1598911226002-38e07222dfae?q=80&w=400' }} style={styles.galleryImg} />
              </View>
            </View>
            <View style={styles.galleryContent}>
              <Text style={styles.galleryTitle}>Central Park Lights</Text>
              <Text style={styles.gallerySub}>Resolution time: 2 days</Text>
              <View style={styles.cheerRow}>
                <Ionicons name="thumbs-up-outline" size={16} color="#E76F51" />
                <Text style={styles.cheerText}>1.8k Citizens cheered this</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}><Ionicons name="home-outline" size={22} color="#9CA3AF" /><Text style={styles.navText}>Home</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Ionicons name="stats-chart" size={22} color="#E76F51" /><Text style={[styles.navText, { color: '#E76F51' }]}>Impact</Text></TouchableOpacity>
        <TouchableOpacity style={styles.fabContainer}>
          <View style={styles.fab}><Ionicons name="add" size={32} color="white" /></View>
          <Text style={[styles.navText, { marginTop: 4 }]}>Report</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Ionicons name="map-outline" size={22} color="#9CA3AF" /><Text style={styles.navText}>Explore</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Ionicons name="person-outline" size={22} color="#9CA3AF" /><Text style={styles.navText}>Profile</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, backgroundColor: 'white', alignItems: 'center' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#111827' },
  scrollContent: { padding: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#111827' },
  sectionSub: { fontSize: 12, color: '#6B7280', marginTop: 4, marginBottom: 20 },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  statCard: { width: '48%', backgroundColor: '#FFF5F2', padding: 16, borderRadius: 24, marginBottom: 15 },
  iconCircle: { width: 36, height: 36, borderRadius: 18, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  statLabel: { fontSize: 12, color: '#4B5563', fontWeight: '500' },
  statValue: { fontSize: 24, fontWeight: 'bold', color: '#111827', marginVertical: 4 },
  statTrendUp: { fontSize: 10, color: '#10B981' },
  statTrendDown: { fontSize: 10, color: '#EF4444' },
  sectionHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, marginBottom: 15 },
  viewAllText: { fontSize: 12, color: '#E76F51', fontWeight: 'bold' },
  wardCard: { flexDirection: 'row', backgroundColor: 'white', padding: 15, borderRadius: 20, alignItems: 'center', marginBottom: 12, borderWidth: 1, borderColor: '#F3F4F6' },
  wardRank: { width: 36, height: 36, borderRadius: 18, justifyContent: 'center', alignItems: 'center' },
  rankText: { fontWeight: 'bold', color: 'white' },
  wardInfo: { flex: 1, marginLeft: 15 },
  wardName: { fontSize: 15, fontWeight: 'bold', color: '#111827' },
  wardStat: { fontSize: 11, color: '#9CA3AF', marginTop: 2 },
  statusContainer: { alignItems: 'flex-end' },
  statusActive: { fontSize: 12, color: '#10B981', fontWeight: 'bold', marginBottom: 5 },
  statusEfficient: { fontSize: 12, color: '#E76F51', fontWeight: 'bold', marginBottom: 5 },
  progressBar: { width: 80, height: 4, backgroundColor: '#F3F4F6', borderRadius: 2 },
  progressFill: { height: '100%', borderRadius: 2 },
  galleryScrollContainer: { flexDirection: 'row', paddingRight: 20 },
  galleryCard: { width: 280, backgroundColor: 'white', borderRadius: 24, overflow: 'hidden', marginRight: 15, borderWidth: 1, borderColor: '#F3F4F6' },
  galleryImages: { flexDirection: 'row', height: 130 },
  imageColumn: { flex: 1, position: 'relative' },
  galleryImg: { width: '100%', height: '100%' },
  badgeBefore: { position: 'absolute', top: 10, left: 10, backgroundColor: 'rgba(0,0,0,0.6)', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 5, zIndex: 1 },
  badgeAfter: { position: 'absolute', top: 10, left: 10, backgroundColor: '#E76F51', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 5, zIndex: 1 },
  badgeText: { color: 'white', fontSize: 9, fontWeight: 'bold' },
  galleryContent: { padding: 18 },
  galleryTitle: { fontSize: 16, fontWeight: 'bold', color: '#111827' },
  gallerySub: { fontSize: 12, color: '#9CA3AF', marginTop: 3 },
  cheerRow: { flexDirection: 'row', alignItems: 'center', marginTop: 12 },
  cheerText: { fontSize: 12, color: '#E76F51', marginLeft: 8, fontWeight: '500' },
  bottomNav: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 90, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 25, borderTopWidth: 1, borderTopColor: '#F3F4F6' },
  navItem: { alignItems: 'center' },
  navText: { fontSize: 10, color: '#9CA3AF', marginTop: 4, fontWeight: 'bold' },
  fabContainer: { alignItems: 'center', marginTop: -35 },
  fab: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#E76F51', justifyContent: 'center', alignItems: 'center', elevation: 8, shadowColor: '#E76F51', shadowOpacity: 0.4, shadowRadius: 10 }
});