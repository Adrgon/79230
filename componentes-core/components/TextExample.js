import React from "react";
import { View, Text, StyleSheet } from "react-native";

function TextExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Text</Text>
      <Text style={styles.description}>
        Text permite mostrar texto con estilos y puede anidar estilos dentro.
      </Text>
      <Text style={styles.body}>
        Este es un texto base con una palabra en{" "}
        <Text style={styles.highlight}>negrita</Text> y otra en{" "}
        <Text style={styles.italic}>italica</Text>.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f9f1e7",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#3d2d1e",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#6a5748",
    marginBottom: 16,
  },
  body: {
    fontSize: 16,
    lineHeight: 22,
    color: "#3d2d1e",
  },
  highlight: {
    fontWeight: "700",
    color: "#c2542d",
  },
  italic: {
    fontStyle: "italic",
    color: "#255f85",
  },
});

export default TextExample;
