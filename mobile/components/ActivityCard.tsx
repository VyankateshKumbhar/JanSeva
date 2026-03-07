import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

interface ActivityProps {
  tag: string;
  time?: string;
  title: string;
  desc: string;
  progress: number;
  color: string;
}

export const ActivityCard = ({
  tag,
  time,
  title,
  desc,
  progress,
  color,
}: ActivityProps) => (
  <View style={styles.card}>
    <View style={[styles.tagContainer, { backgroundColor: color + "20" }]}>
      <Text style={[styles.tagText, { color }]}>{tag}</Text>
      {time ? <Text style={styles.timeText}>{time}</Text> : null}
    </View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.desc}>{desc}</Text>
    <View style={styles.barBg}>
      <View
        style={[
          styles.barFill,
          { width: `${progress * 100}%`, backgroundColor: color },
        ]}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: width * 0.75,
    marginRight: 16,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  tagContainer: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  tagText: { fontSize: 11, fontWeight: "bold" },
  timeText: { color: "#9CA3AF", fontSize: 11, marginLeft: 8 },
  title: { fontSize: 18, fontWeight: "bold", marginTop: 12, color: "#1F2937" },
  desc: { color: "#6B7280", fontSize: 14, marginTop: 4, marginBottom: 15 },
  barBg: {
    height: 5,
    backgroundColor: "#F3F4F6",
    borderRadius: 3,
    overflow: "hidden",
  },
  barFill: { height: 5 },
});
