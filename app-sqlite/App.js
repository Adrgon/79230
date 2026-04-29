import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import Login from "./Login";
import Register from "./Register";
import { createUser, initializeDatabase, loginUser } from "./database";
import styles from "./globalStyles";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [authMode, setAuthMode] = useState("login");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setupDatabase = async () => {
      try {
        await initializeDatabase();
      } catch (error) {
        Alert.alert("Error", "No se pudo inicializar SQLite.");
      } finally {
        setLoading(false);
      }
    };

    setupDatabase();
  }, []);

  const handleRegister = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Campos requeridos", "Completa email y contraseña.");
      return;
    }

    try {
      await createUser(email, password);
      Alert.alert("Registro exitoso", "Usuario creado en SQLite.");
      setEmail("");
      setPassword("");
      setAuthMode("login");
    } catch (error) {
      Alert.alert("No se pudo registrar", "Ese email ya existe.");
    }
  };

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Campos requeridos", "Completa email y contraseña.");
      return;
    }

    const user = await loginUser(email, password);

    if (!user) {
      Alert.alert("Login inválido", "Credenciales incorrectas.");
      return;
    }

    setCurrentUser(user);
    setEmail("");
    setPassword("");
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadingText}>Inicializando base de datos...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.badge}>Demo local</Text>
        <Text style={styles.title}>Login con SQLite</Text>
        <Text style={styles.subtitle}>
          Registro e ingreso usando base de datos en el dispositivo.
        </Text>
      </View>

      {currentUser ? (
        <View style={styles.card}>
          <Text style={styles.welcome}>Bienvenido</Text>
          <Text style={styles.userEmail}>{currentUser.email}</Text>
          <Pressable
            style={({ pressed }) => [
              styles.secondaryButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={handleLogout}
          >
            <Text style={styles.secondaryButtonText}>Cerrar sesión</Text>
          </Pressable>
        </View>
      ) : (
        <>
          {authMode === "login" ? (
            <Login
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              onLogin={handleLogin}
              onSwitchToRegister={() => setAuthMode("register")}
              styles={styles}
            />
          ) : (
            <Register
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              onRegister={handleRegister}
              onSwitchToLogin={() => setAuthMode("login")}
              styles={styles}
            />
          )}
        </>
      )}
    </SafeAreaView>
  );
}

