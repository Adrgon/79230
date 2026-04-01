import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ViewExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>View</Text>
      <Text style={styles.description}>
        Una View es un contenedor basico para agrupar elementos y aplicar layout.
      </Text>
      <View style={styles.row}>
        <View style={[styles.box, styles.boxPrimary]} />
        <View style={[styles.box, styles.boxAccent]} />
        <View style={[styles.box, styles.boxNeutral]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f7f4ef",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2f2a24",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#5b534b",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  box: {
    width: 64,
    height: 64,
    borderRadius: 12,
  },
  boxPrimary: {
    backgroundColor: "#e36f4c",
  },
  boxAccent: {
    backgroundColor: "#f2b705",
  },
  boxNeutral: {
    backgroundColor: "#2d6a4f",
  },
});

export default ViewExample;
