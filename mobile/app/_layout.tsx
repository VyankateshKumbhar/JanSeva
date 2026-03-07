import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

// 1. Removed unstable_settings because we aren't anchoring to (tabs) anymore.

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* 2. Point directly to 'index' (your home screen) instead of '(tabs)' */}
        <Stack.Screen
          name="index"
          options={{ title: "Home", headerShown: true }}
        />

        {/* 3. Keep your modal or other screens here */}
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Details" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
