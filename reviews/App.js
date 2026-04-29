import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import Review from "./Review";

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.main}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>our reviews</Text>
          <View style={styles.underline}></View>
        </View>
        <Review />
      </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f8",
  },
  main: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
    textTransform: "capitalize",
  },
  underline: {
    height: 4,
    width: 80,
    backgroundColor: "#49a6e9",
  },
});

export default App;
