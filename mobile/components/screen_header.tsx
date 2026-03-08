import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { useRouter } from "expo-router";
import { Colors } from "../constants/theme";

const theme = Colors.light;

type Props = {
  title: string;
};

export default function ScreenHeader({ title }: Props) {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.headerBtn}
        onPress={() => router.back()}
      >
        <ArrowLeft color={theme.brand} size={24} />
      </TouchableOpacity>

      <Text style={styles.headerTitle}>{title}</Text>

      {/* Placeholder to keep the title centered */}
      <View style={styles.headerBtn} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
    backgroundColor: "white",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#E05D3D",
    letterSpacing: 1,
    textAlign: "center",
    flex: 1, // ensures it takes available space to stay centered
  },

  headerBtn: {
    padding: 8,
    width: 32, // keeps left and right sides equal for centering
  },
});