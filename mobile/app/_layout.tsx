import { Stack, usePathname } from "expo-router";
import { View, StyleSheet } from "react-native";
import { BottomNav } from "../components/BottomNav";

export default function RootLayout() {
  const pathname = usePathname();

  // Debugging: Check this in your terminal to see exactly what string Expo is using for the route
  console.log("Current Pathname:", pathname);

  // Use a helper function for more flexible matching
  const isAuthRoute = () => {
    if (!pathname) return false;
    const lowerPath = pathname.toLowerCase();
    return (
      lowerPath.includes('login') || 
      lowerPath.includes('create-account') || 
      lowerPath.includes('verification') || 
      lowerPath.includes('success')
    );
  };

  const shouldHideBottomNav = isAuthRoute();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
      
      {/* If it's NOT an auth route, show the Nav */}
      {!shouldHideBottomNav && <BottomNav />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  content: { flex: 1 },
});