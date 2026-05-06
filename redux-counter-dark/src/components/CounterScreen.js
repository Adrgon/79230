import { StatusBar } from "expo-status-bar";
import { Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../features/theme/themeSlice";
import { useContador } from "../hooks/useContador";
import { darkTheme, lightTheme } from "../theme/colors";
import { globalStyles as styles } from "../theme/styles";

export function CounterScreen() {
  const { contador, incrementar, decrementar, reiniciar } = useContador();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();
  const colors = darkMode ? darkTheme : lightTheme;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <StatusBar style={darkMode ? "light" : "dark"} />

      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <View style={styles.themeRow}>
          <Text style={[styles.themeText, { color: colors.text }]}>
            Modo oscuro
          </Text>
          <Switch
            value={darkMode}
            onValueChange={() => dispatch(toggleDarkMode())}
            thumbColor={darkMode ? "#f8fafc" : "#ffffff"}
            trackColor={{ false: "#94a3b8", true: "#6366f1" }}
          />
        </View>

        <Text style={[styles.title, { color: colors.text }]}>
          Contador Redux
        </Text>
        <Text style={[styles.counter, { color: colors.primary }]}>
          {contador}
        </Text>

        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.smallButton, { backgroundColor: colors.primary }]}
            onPress={decrementar}
          >
            <Text style={styles.buttonText}>-1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.smallButton, { backgroundColor: colors.primary }]}
            onPress={incrementar}
          >
            <Text style={styles.buttonText}>+1</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.resetButton, { borderColor: colors.primary }]}
          onPress={reiniciar}
        >
          <Text style={[styles.resetText, { color: colors.primary }]}>
            Reiniciar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
