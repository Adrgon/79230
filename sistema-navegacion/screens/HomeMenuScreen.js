import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeMenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sistemas de navegación</Text>
      <Text style={styles.sub}>Toca una opción para abrir el ejemplo</Text>

      <Pressable
        style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
        onPress={() => navigation.navigate('StackDemo')}
      >
        <Text style={styles.cardTitle}>Stack</Text>
        <Text style={styles.cardHint}>Pila nativa entre pantallas</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
        onPress={() => navigation.navigate('TabsDemo')}
      >
        <Text style={styles.cardTitle}>Bottom tabs</Text>
        <Text style={styles.cardHint}>Pestañas inferiores con iconos</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
        onPress={() => navigation.navigate('DrawerDemo')}
      >
        <Text style={styles.cardTitle}>Drawer</Text>
        <Text style={styles.cardHint}>Menú lateral</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 48,
    backgroundColor: '#f1f5f9',
  },
  heading: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0f172a',
  },
  sub: {
    marginTop: 8,
    marginBottom: 28,
    fontSize: 15,
    color: '#64748b',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
  },
  cardPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.99 }],
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
  },
  cardHint: {
    marginTop: 6,
    fontSize: 14,
    color: '#64748b',
  },
});
