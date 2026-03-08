import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { 
  ArrowLeft, 
  Share2, 
  MoreVertical, 
  AlertTriangle, 
  History, 
  CheckCircle2, 
  UserPlus, 
  Clock, 
  ChevronDown,
  LayoutGrid,
  Ticket,
  Users,
  User
} from 'lucide-react-native';
import { Colors } from "../constants/theme";

const theme = Colors.light;

export default function TicketDetail() {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#F9FAFB' }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity><ArrowLeft color={theme.brand} size={24} /></TouchableOpacity>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Ticket #DMC-8821</Text>
            <Text style={styles.headerSub}>Escalated View | अधिकारियों के लिए</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerIcon}><Share2 color={theme.brand} size={20} /></TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}><MoreVertical color={theme.brand} size={20} /></TouchableOpacity>
        </View>
      </View>

      {/* Priority Banner */}
      <View style={styles.priorityBanner}>
        <AlertTriangle color="white" size={18} style={{ marginRight: 8 }} />
        <Text style={styles.priorityText}>HIGH PRIORITY | अति महत्वपूर्ण</Text>
        <View style={styles.bannerTimer}>
          <Clock color="white" size={12} />
          <Text style={styles.bannerTimerText}>48H</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Incident Image */}
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=1000&auto=format&fit=crop' }} 
            style={styles.incidentImage} 
          />
        </View>

        {/* Content Section */}
        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <View style={styles.wardBadge}><Text style={styles.wardText}>WARD 45 - PITAMPURA</Text></View>
            <Text style={styles.idText}>ID: 29401</Text>
          </View>
          
          <Text style={styles.mainTitle}>Main Water Leakage | मुख्य जल रिसाव</Text>
          <Text style={styles.description}>
            Reported severe leakage near District Park. Affecting supply to 400 households. 
            Residents complaining about low pressure.
          </Text>
        </View>

        {/* Timeline Section */}
        <View style={styles.timelineHeader}>
          <History size={18} color="#6B7280" />
          <Text style={styles.timelineHeaderText}>TIMELINE | घटनाक्रम</Text>
        </View>

        <View style={styles.timelineContainer}>
          {/* Timeline Item 1 */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineIconContainer}>
              <View style={[styles.timelineIcon, { backgroundColor: '#DCFCE7' }]}>
                <CheckCircle2 size={16} color="#16A34A" />
              </View>
              <View style={styles.timelineLine} />
            </View>
            <View style={styles.timelineContent}>
              <Text style={styles.timelineTitle}>Ticket Raised | शिकायत दर्ज</Text>
              <Text style={styles.timelineDate}>Oct 12, 09:15 AM • App User</Text>
            </View>
          </View>

          {/* Timeline Item 2 */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineIconContainer}>
              <View style={[styles.timelineIcon, { backgroundColor: '#DBEAFE' }]}>
                <UserPlus size={16} color="#2563EB" />
              </View>
              <View style={styles.timelineLine} />
            </View>
            <View style={styles.timelineContent}>
              <Text style={styles.timelineTitle}>Assigned to JE | कनिष्ठ अभियंता को सौंपा गया</Text>
              <Text style={styles.timelineDate}>Oct 12, 11:30 AM • Auto-assigned</Text>
              <Text style={styles.handlerText}>Current Handler: Rajesh Kumar (DJB)</Text>
            </View>
          </View>

          {/* Timeline Item 3 */}
          <View style={styles.timelineItem}>
            <View style={styles.timelineIconContainer}>
              <View style={[styles.timelineIcon, { backgroundColor: '#FEE2E2' }]}>
                <Clock size={16} color="#DC2626" />
              </View>
            </View>
            <View style={styles.timelineContent}>
              <Text style={[styles.timelineTitle, { color: '#DC2626' }]}>Deadline Expired | समय सीमा समाप्त</Text>
              <Text style={styles.timelineDate}>Oct 14, 09:15 AM (48h ago)</Text>
            </View>
          </View>
        </View>

        {/* Actions Section */}
        <View style={styles.actionCard}>
          <Text style={styles.actionLabel}>REASSIGN TO NEW OFFICER | अधिकारी को पुनः सौंपें</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Select Department/Worker</Text>
            <ChevronDown size={20} color={theme.brand} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={[styles.primaryButton, { backgroundColor: theme.brand }]}>
          <Text style={styles.primaryButtonText}>Reassign Now | अभी सौंपें</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={[styles.secondaryButtonText, { color: theme.brand }]}>Escalate to Commissioner | कमिश्नर को भेजें</Text>
        </TouchableOpacity>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <LayoutGrid size={24} color="#9CA3AF" />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ticket size={24} color={theme.brand} />
          <Text style={[styles.navLabel, { color: theme.brand }]}>Tickets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Users size={24} color="#9CA3AF" />
          <Text style={styles.navLabel}>Staff</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <User size={24} color="#9CA3AF" />
          <Text style={styles.navLabel}>Profile</Text>
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
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6'
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  headerTitleContainer: { marginLeft: 12 },
  headerTitle: { fontSize: 17, fontWeight: 'bold', color: '#111827' },
  headerSub: { fontSize: 11, color: '#6B7280' },
  headerRight: { flexDirection: 'row' },
  headerIcon: { marginLeft: 15 },
  priorityBanner: { 
    flexDirection: 'row', 
    backgroundColor: '#DC2626', 
    paddingVertical: 10, 
    paddingHorizontal: 16, 
    alignItems: 'center' 
  },
  priorityText: { color: 'white', fontWeight: 'bold', fontSize: 13, flex: 1 },
  bannerTimer: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 12 },
  bannerTimerText: { color: 'white', fontSize: 10, fontWeight: 'bold', marginLeft: 4 },
  scrollContent: { padding: 16 },
  imageContainer: { borderRadius: 24, overflow: 'hidden', height: 220, marginBottom: 20 },
  incidentImage: { width: '100%', height: '100%', objectFit: 'cover' },
  infoSection: { marginBottom: 24 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  wardBadge: { backgroundColor: '#FFEDD5', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 8 },
  wardText: { color: '#C2410C', fontSize: 11, fontWeight: 'bold' },
  idText: { color: '#9CA3AF', fontSize: 12 },
  mainTitle: { fontSize: 22, fontWeight: 'bold', color: '#111827', marginBottom: 8 },
  description: { fontSize: 14, color: '#4B5563', lineHeight: 20 },
  timelineHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 16, marginTop: 10 },
  timelineHeaderText: { fontSize: 13, fontWeight: 'bold', color: '#6B7280', marginLeft: 8, letterSpacing: 0.5 },
  timelineContainer: { marginBottom: 30 },
  timelineItem: { flexDirection: 'row', minHeight: 70 },
  timelineIconContainer: { alignItems: 'center', width: 40 },
  timelineIcon: { width: 32, height: 32, borderRadius: 16, justifyContent: 'center', alignItems: 'center', zIndex: 1 },
  timelineLine: { width: 2, flex: 1, backgroundColor: '#E5E7EB', position: 'absolute', top: 32 },
  timelineContent: { flex: 1, marginLeft: 12, paddingTop: 4 },
  timelineTitle: { fontSize: 15, fontWeight: 'bold', color: '#111827' },
  timelineDate: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  handlerText: { fontSize: 12, color: theme.brand, fontWeight: '500', marginTop: 4 },
  actionCard: { backgroundColor: '#FFF7F5', borderRadius: 24, padding: 20, marginBottom: 16, borderWidth: 1, borderColor: '#FEE2E2' },
  actionLabel: { fontSize: 12, fontWeight: 'bold', color: '#C2410C', marginBottom: 12 },
  dropdown: { flexDirection: 'row', backgroundColor: 'white', padding: 15, borderRadius: 16, borderWidth: 1, borderColor: '#FEE2E2', justifyContent: 'space-between', alignItems: 'center' },
  dropdownText: { color: '#4B5563', fontSize: 15 },
  primaryButton: { height: 56, borderRadius: 28, justifyContent: 'center', alignItems: 'center', marginBottom: 12, elevation: 2 },
  primaryButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  secondaryButton: { height: 56, borderRadius: 28, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: theme.brand },
  secondaryButtonText: { fontSize: 16, fontWeight: 'bold' },
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
    borderTopColor: '#F3F4F6' 
  },
  navItem: { alignItems: 'center' },
  navLabel: { fontSize: 10, color: '#9CA3AF', marginTop: 4, fontWeight: 'bold' }
});