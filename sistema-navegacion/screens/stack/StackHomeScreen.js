import { Pressable, StyleSheet, Text, View } from 'react-native';
import TestScreen from '../../components/TestScreen';

export default function StackHomeScreen({ navigation }) {
  return (
    <View style={styles.wrap}>
      <TestScreen
        title="Stack — Inicio"
        description="Pantalla de prueba. Avanza a la siguiente en la pila."
      />
      <Pressable style={styles.btn} onPress={() => navigation.navigate('StackDetalle')}>
        <Text style={styles.btnText}>Ir a detalle</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1 },
  btn: {
    marginHorizontal: 24,
    marginBottom: 32,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: '#2563eb',
    alignItems: 'center',
  },
  btnText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
