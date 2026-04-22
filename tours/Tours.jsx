import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Tour from "./Tour";
import styles from "./styles";

const Tours = ({ tours, removeTour }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>our tours</Text>
        <View style={styles.underline}></View>
      </View>
      <FlatList
        data={tours}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Tour {...item} removeTour={removeTour} />}
        contentContainerStyle={styles.toursContainer}
      />
    </View>
  );
};

export default Tours;
