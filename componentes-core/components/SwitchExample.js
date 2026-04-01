import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

function SwitchExample() {
  const [enabled, setEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Switch</Text>
      <Text style={styles.description}>
        Switch sirve para activar o desactivar una opcion.
      </Text>
      <View style={styles.row}>
        <Text style={styles.label}>{enabled ? "Activo" : "Inactivo"}</Text>
        <Switch value={enabled} onValueChange={setEnabled} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f3f7ff",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1b2d4f",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#4b5f86",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#ffffff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#d6e1f3",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1b2d4f",
  },
});

export default SwitchExample;
