import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

function TextInputExample() {
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TextInput</Text>
      <Text style={styles.description}>
        TextInput recibe texto y se controla con estado local.
      </Text>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="Escribe tu nombre"
        style={styles.input}
      />
      <Text style={styles.preview}>Valor: {value || "(vacio)"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff5f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#4a1e14",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#7a4d3a",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e0b8a3",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: "#ffffff",
    fontSize: 16,
  },
  preview: {
    marginTop: 12,
    fontSize: 14,
    color: "#7a4d3a",
  },
});

export default TextInputExample;
