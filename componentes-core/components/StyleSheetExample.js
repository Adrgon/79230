import React from "react";
import { View, Text, StyleSheet } from "react-native";

function StyleSheetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StyleSheet</Text>
      <Text style={styles.description}>
        StyleSheet agrupa estilos y ayuda a mantener el codigo ordenado.
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tarjeta de ejemplo</Text>
        <Text style={styles.cardBody}>
          Este bloque usa estilos definidos en un StyleSheet.create().
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eef6ff",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1c2a3d",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#4b5b72",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 16,
    shadowColor: "#1c2a3d",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1c2a3d",
    marginBottom: 6,
  },
  cardBody: {
    fontSize: 14,
    color: "#4b5b72",
  },
});

export default StyleSheetExample;
