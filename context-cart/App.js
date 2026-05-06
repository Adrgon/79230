import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { AppProvider } from "./context";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { styles } from "./styles";

function App() {
  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={styles.nav.backgroundColor}
        />
        <Navbar />
        <CartContainer />
      </SafeAreaView>
    </AppProvider>
  );
}

export default App;
