import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function ButtonExample() {
  const [clicks, setClicks] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Button</Text>
      <Text style={styles.description}>
        Button es un componente nativo simple para acciones rapidas.
      </Text>
      <View style={styles.buttonRow}>
        <Button title="Sumar" onPress={() => setClicks((prev) => prev + 1)} />
        <Button title="Reiniciar" onPress={() => setClicks(0)} color="#d1495b" />
      </View>
      <Text style={styles.counter}>Clicks: {clicks}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fdf4ea",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#4b2c18",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#7a5238",
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },
  counter: {
    marginTop: 16,
    fontSize: 14,
    color: "#7a5238",
  },
});

export default ButtonExample;
