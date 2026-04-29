import React, { useRef, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const DEFAULT_LOCATION = {
  latitude: -34.6037,
  longitude: -58.3816,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

export default function CusomMap() {
  const mapRef = useRef(null);
  const [region, setRegion] = useState(DEFAULT_LOCATION);

  const goToCurrentLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permiso denegado",
        "Necesitamos permiso de ubicacion para centrar el mapa."
      );
      return;
    }

    const currentLocation = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });

    const nextRegion = {
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };

    setRegion(nextRegion);
    mapRef.current?.animateToRegion(nextRegion, 700);
  };

  return (
    <View style={styles.container}>
      <MapView ref={mapRef} style={styles.map} initialRegion={DEFAULT_LOCATION}>
        <Marker
          coordinate={{ latitude: region.latitude, longitude: region.longitude }}
          title="Ubicacion seleccionada"
          description="Presiona el boton para ir a tu ubicacion actual"
        />
      </MapView>
      <Pressable style={styles.locationButton} onPress={goToCurrentLocation}>
        <Text style={styles.locationButtonText}>Mi ubicacion</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  locationButton: {
    position: "absolute",
    right: 16,
    bottom: 24,
    backgroundColor: "#0d6efd",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
  },
  locationButtonText: {
    color: "#ffffff",
    fontWeight: "700",
  },
});
