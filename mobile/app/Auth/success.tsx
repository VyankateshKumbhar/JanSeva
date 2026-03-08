import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Animated } from 'react-native';
import { CheckCircle, ArrowRight, PartyPopper } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/theme';

export default function SuccessScreen() {
  const router = useRouter();
  const theme = Colors.light;
  const scaleAnim = new Animated.Value(0);

  // Simple pop-in animation for the checkmark
  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        {/* Animated Success Icon */}
        <Animated.View style={[styles.iconContainer, { transform: [{ scale: scaleAnim }] }]}>
          <View style={[styles.circleBg, { backgroundColor: '#DCFCE7' }]}>
            <CheckCircle size={80} color="#16A34A" strokeWidth={2.5} />
          </View>
        </Animated.View>

        {/* Success Text */}
        <View style={styles.textSection}>
          <Text style={[styles.title, { color: theme.text }]}>Registration Successful!</Text>
          <Text style={[styles.titleHindi, { color: theme.text }]}>पंजीकरण सफल रहा!</Text>
          
          <Text style={[styles.description, { color: theme.textSecondary }]}>
            Your Jan Seva account is now active. You can now access all government services directly.
          </Text>
          <Text style={[styles.descriptionHindi, { color: theme.textSecondary }]}>
            आपका जन सेवा खाता अब सक्रिय है। अब आप सभी सरकारी सेवाओं का सीधे उपयोग कर सकते हैं।
          </Text>
        </View>

        {/* Welcome Card */}
        <View style={[styles.welcomeCard, { borderColor: theme.cardBorder }]}>
          <PartyPopper size={24} color={theme.brand} style={styles.cardIcon} />
          <Text style={[styles.welcomeText, { color: theme.text }]}>
            Welcome to the community!{"\n"}
            समुदाय में आपका स्वागत है!
          </Text>
        </View>

        {/* Final Action Button */}
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: theme.brand }]}
          onPress={() => router.replace('/')} // replace prevents going back to signup steps
        >
          <Text style={styles.buttonText}>Go to Dashboard / डैशबोर्ड पर जाएं</Text>
          <ArrowRight size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 },
  iconContainer: { marginBottom: 30 },
  circleBg: { width: 140, height: 140, borderRadius: 70, justifyContent: 'center', alignItems: 'center' },
  textSection: { alignItems: 'center', marginBottom: 40 },
  title: { fontSize: 24, fontWeight: '800', textAlign: 'center' },
  titleHindi: { fontSize: 24, fontWeight: '800', textAlign: 'center', marginBottom: 15 },
  description: { fontSize: 14, textAlign: 'center', lineHeight: 20, marginBottom: 5 },
  descriptionHindi: { fontSize: 14, textAlign: 'center', lineHeight: 20 },
  welcomeCard: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 20, 
    borderRadius: 16, 
    borderWidth: 1, 
    backgroundColor: '#fff',
    marginBottom: 50,
    width: '100%'
  },
  cardIcon: { marginRight: 15 },
  welcomeText: { fontSize: 14, fontWeight: '600', flex: 1 },
  button: { 
    flexDirection: 'row', 
    height: 60, 
    borderRadius: 15, 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '700', marginRight: 10 }
});