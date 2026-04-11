import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Pressable } from 'react-native';
import DrawerAjustesScreen from '../screens/drawer/DrawerAjustesScreen';
import DrawerInicioScreen from '../screens/drawer/DrawerInicioScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: '#1e293b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: '700' },
        headerRight: () => (
          <Pressable
            onPress={() => navigation.getParent()?.goBack()}
            hitSlop={12}
            style={{ marginRight: 8, padding: 8 }}
          >
            <Ionicons name="close-outline" size={28} color="#fff" />
          </Pressable>
        ),
        drawerActiveTintColor: '#2563eb',
        drawerInactiveTintColor: '#64748b',
        drawerStyle: { backgroundColor: '#fff' },
      })}
    >
      <Drawer.Screen name="DrawerInicio" component={DrawerInicioScreen} options={{ title: 'Inicio' }} />
      <Drawer.Screen name="DrawerAjustes" component={DrawerAjustesScreen} options={{ title: 'Ajustes' }} />
    </Drawer.Navigator>
  );
}
