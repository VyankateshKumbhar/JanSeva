import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Home } from "lucide-react-native";
import { Colors } from "../constants/theme";

const theme = Colors.light;

export const Header = () => (
  <View style={styles.header}>
    <View style={styles.logoContainer}>
      <View style={[styles.logoIcon, { backgroundColor: theme.brand }]}>
        <Home color="white" size={16} />
      </View>
      <Text style={[styles.logoText, { color: theme.brand }]}>JAN SEVA</Text>
    </View>
    <View style={styles.langSwitch}>
      <Text style={styles.langTextActive}>HI</Text>
      <Text style={styles.langDivider}>|</Text>
      <Text style={styles.langText}>EN</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  logoContainer: { flexDirection: "row", alignItems: "center" },
  logoIcon: { padding: 4, borderRadius: 4, marginRight: 8 },
  logoText: { fontWeight: "900", fontSize: 18, letterSpacing: 0.5 },
  langSwitch: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#3B82F6",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignItems: "center",
  },
  langTextActive: { color: "#3B82F6", fontWeight: "bold", fontSize: 12 },
  langText: { color: "#9CA3AF", fontSize: 12 },
  langDivider: { marginHorizontal: 4, color: "#E5E7EB" },
});