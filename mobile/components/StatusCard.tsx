import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface StatusCardProps {
  label: string;
  count: string;
  color: string;
}

export const StatusCard = ({ label, count, color }: StatusCardProps) => (
  <View style={styles.card}>
    <Text style={styles.label}>{label}</Text>
    <Text style={[styles.count, { color }]}>{count}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: "48%",
    padding: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  label: { color: "#6B7280", fontSize: 13, fontWeight: "500" },
  count: { fontSize: 32, fontWeight: "bold", marginTop: 10 },
});
