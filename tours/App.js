import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import Loading from "./Loading";
import Tours from "./Tours";
import toursData from "./assets/tour.json";
import styles from "./styles";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // Simulamos la carga de datos desde el archivo local
  const loadLocalTours = () => {
    // Simulamos un pequeño retraso para mostrar la pantalla de carga
    setTimeout(() => {
      setTours(toursData);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    // Cargamos los datos locales al iniciar la app
    loadLocalTours();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }

    if (tours.length === 0) {
      return (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>no tours left</Text>
          <TouchableOpacity style={styles.btn} onPress={() => loadLocalTours()}>
            <Text style={styles.btnText}>refresh</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return <Tours tours={tours} removeTour={removeTour} />;
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {renderContent()}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
