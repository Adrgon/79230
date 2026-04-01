import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

function PressableExample() {
  const [pressedCount, setPressedCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pressable</Text>
      <Text style={styles.description}>
        Pressable permite detectar presion y ajustar estilos segun el estado.
      </Text>
      <Pressable
        onPress={() => setPressedCount((prev) => prev + 1)}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.buttonText}>
            {pressed ? "Presionando..." : "Presionar"}
          </Text>
        )}
      </Pressable>
      <Text style={styles.counter}>Presiones: {pressedCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f5f0ff",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2f2146",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#5a4a78",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#f28b82",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  buttonPressed: {
    backgroundColor: "#d96b60",
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: "#2f2146",
    fontWeight: "700",
    fontSize: 16,
  },
  counter: {
    marginTop: 16,
    fontSize: 14,
    color: "#5a4a78",
  },
});

export default PressableExample;
