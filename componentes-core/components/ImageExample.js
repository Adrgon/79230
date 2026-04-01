import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function ImageExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image</Text>
      <Text style={styles.description}>
        Image muestra imagenes desde una URL o un archivo local.
      </Text>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
        }}
        style={styles.image}
      />
      <Text style={styles.caption}>Paisaje desde Unsplash.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f1f6f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1c2e2b",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#4e5f5b",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 16,
  },
  caption: {
    marginTop: 12,
    fontSize: 12,
    color: "#5d6b68",
  },
});

export default ImageExample;
