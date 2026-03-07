import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import { BottomNav } from "../components/BottomNav";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
      {/* BottomNav is outside the Stack so it never disappears */}
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  content: { flex: 1 },
});
