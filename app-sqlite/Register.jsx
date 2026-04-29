import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function Register({
  email,
  password,
  setEmail,
  setPassword,
  onRegister,
  onSwitchToLogin,
  styles,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.inputLabel}>Correo electronico</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#829ab1"
      />
      <Text style={styles.inputLabel}>Contrasena</Text>
      <TextInput
        placeholder="Contrasena"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#829ab1"
      />

      <Pressable
        style={({ pressed }) => [styles.primaryButton, pressed && styles.buttonPressed]}
        onPress={onRegister}
      >
        <Text style={styles.primaryButtonText}>Crear cuenta</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [styles.modeSwitchButton, pressed && styles.buttonPressed]}
        onPress={onSwitchToLogin}
      >
        <Text style={styles.modeSwitchText}>Ya tenes cuenta? Ir a login</Text>
      </Pressable>
    </View>
  );
}
