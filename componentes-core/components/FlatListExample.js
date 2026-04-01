import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const data = [
  { id: "1", label: "Elemento 1" },
  { id: "2", label: "Elemento 2" },
  { id: "3", label: "Elemento 3" },
  { id: "4", label: "Elemento 4" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
  { id: "5", label: "Elemento 5" },
];

function FlatListExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FlatList</Text>
      <Text style={styles.description}>
        FlatList renderiza listas largas con buen rendimiento.
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.label}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f0f4ff",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#243b64",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#4e608f",
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 12,
    gap: 10,
  },
  item: {
    backgroundColor: "#ffffff",
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#d8e1f5",
  },
  itemText: {
    fontSize: 16,
    color: "#243b64",
  },
});

export default FlatListExample;
