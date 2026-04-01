import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const items = [
  "Primera tarjeta",
  "Segunda tarjeta",
  "Tercera tarjeta",
  "Cuarta tarjeta",
  "Quinta tarjeta",
  "Sexta tarjeta",
];

function ScrollViewExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ScrollView</Text>
      <Text style={styles.description}>
        ScrollView permite desplazamiento cuando el contenido es largo.
      </Text>
      <ScrollView contentContainerStyle={styles.content}>
        {items.map((item) => (
          <View key={item} style={styles.card}>
            <Text style={styles.cardText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f2f7f2",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1c3a26",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#4b6a54",
    marginBottom: 16,
  },
  content: {
    paddingBottom: 12,
    gap: 12,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#d6e3d6",
  },
  cardText: {
    fontSize: 16,
    color: "#1c3a26",
  },
});

export default ScrollViewExample;
