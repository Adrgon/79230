import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";

import HeaderCarousel from "./components/carrusel/HeaderCarousel";


function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <HeaderCarousel />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F5F2",
  },
});

export default App;
