import React from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";

const sections = [
  {
    title: "Frutas",
    data: ["Manzana", "Pera", "Uva"],
  },
  {
    title: "Verduras",
    data: ["Zanahoria", "Lechuga", "Pepino"],
  },
];

function SectionListExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SectionList</Text>
      <Text style={styles.description}>
        SectionList agrupa listas en secciones con encabezados.
      </Text>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
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
    backgroundColor: "#fff7e6",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#4d3318",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#7a5a3a",
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 12,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "700",
    color: "#4d3318",
    marginTop: 12,
  },
  item: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#f0d9b5",
  },
});

export default SectionListExample;
