import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Home, AlertTriangle, User, Settings } from "lucide-react-native"; // Changed ClipboardList to AlertTriangle
import { Colors } from "../constants/theme";
import { useRouter, usePathname } from "expo-router";
import { ClipboardList } from "lucide-react-native";
const theme = Colors.light;

export const BottomNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const NavItem = ({ icon: Icon, label, route }: any) => {
    const isActive = pathname === route;
    return (
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => router.push(route)}
      >
        <Icon color={isActive ? theme.brand : theme.tabIconDefault} size={24} />
        <Text
          style={[
            styles.navLabel,
            { color: isActive ? theme.brand : theme.tabIconDefault },
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.bottomNav}>
      <NavItem icon={Home} label="HOME" route="/" />

      {/* Changed label to ISSUES and route to /issues */}
      <NavItem icon={AlertTriangle} label="ISSUES" route="/issues" />

      <View style={styles.fabSpacer} />

      <NavItem icon={ClipboardList} label="My grievances" route="/history" />
      <NavItem icon={User} label="Profile" route="/profile" />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 85,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    paddingBottom: Platform.OS === "ios" ? 20 : 10,
    zIndex: 1000,
    elevation: 20,
  },
  navItem: { alignItems: "center", flex: 1 },
  navLabel: { fontSize: 10, marginTop: 4, fontWeight: "700" },
  fabSpacer: { width: 68 },
});