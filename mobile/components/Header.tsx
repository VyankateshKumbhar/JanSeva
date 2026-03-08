import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Home } from "lucide-react-native";
import { Colors } from "../constants/theme";

const theme = Colors.light;

export const Header = () => {
  return (
    <View style={styles.header}>
      
      {/* LEFT SIDE */}
      <View style={styles.logoContainer}>
        <View style={[styles.logoIcon, { backgroundColor: theme.brand }]}>
          <Home color="white" size={16} />
        </View>

        <Text style={[styles.logoText, { color: theme.brand }]}>
          JAN SEVA
        </Text>
      </View>

      {/* RIGHT SIDE */}
      <View style={styles.langSwitch}>
        <Text style={styles.langTextActive}>HI</Text>
        <Text style={styles.langDivider}>|</Text>
        <Text style={styles.langText}>EN</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",

  paddingHorizontal: 20,
  paddingTop: 40,

  height: 88, // controls white box height

  borderBottomWidth: 1,
  borderBottomColor: "#E2E8F0",
  backgroundColor: "white",
},

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoIcon: {
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
  },

  logoText: {
    fontSize: 20,          // SAME as ScreenHeader
    fontWeight: "900",
    letterSpacing: 1,
  },

  langSwitch: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#3B82F6",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },

  langTextActive: {
    color: "#3B82F6",
    fontWeight: "700",
    fontSize: 12,
  },

  langText: {
    color: "#9CA3AF",
    fontSize: 12,
  },

  langDivider: {
    marginHorizontal: 4,
    color: "#E5E7EB",
  },
});