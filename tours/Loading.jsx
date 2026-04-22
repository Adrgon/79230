import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import styles from "./styles";

const Loading = ({ retryCount = 0 }) => {
  const getMessage = () => {
    if (retryCount === 0) {
      return "Cargando...";
    } else {
      return `Cargando... (reintento ${retryCount})`;
    }
  };

  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={styles.btn.backgroundColor} />
      <Text style={styles.loadingText}>{getMessage()}</Text>

      {retryCount > 0 && (
        <Text style={styles.retryText}>
          La conexión es lenta, por favor espere...
        </Text>
      )}
    </View>
  );
};

export default Loading;
