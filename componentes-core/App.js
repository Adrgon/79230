import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import ViewExample from "./components/ViewExample";
import ButtonExample from "./components/ButtonExample";
import FlatListExample from "./components/FlatListExample";
import ImageExample from "./components/ImageExample";
import PressableExample from "./components/PressableExample";
import ScrollViewExample from "./components/ScrollViewExample";
import SectionListExample from "./components/SectionListExample";
import StyleSheetExample from "./components/StyleSheetExample";
import SwitchExample from "./components/SwitchExample";
import TextInputExample from "./components/TextInputExample";
import TextExample from "./components/TextExample";


function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatListExample />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
