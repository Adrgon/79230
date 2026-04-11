import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable } from 'react-native';
import TabBuscarScreen from '../screens/tabs/TabBuscarScreen';
import TabInicioScreen from '../screens/tabs/TabInicioScreen';
import TabPerfilScreen from '../screens/tabs/TabPerfilScreen';

const Tab = createBottomTabNavigator();

function tabIcon(routeName, focused, color, size) {
  const map = {
    TabInicio: focused ? 'home' : 'home-outline',
    TabBuscar: focused ? 'search' : 'search-outline',
    TabPerfil: focused ? 'person' : 'person-outline',
  };
  const name = map[routeName] || 'ellipse-outline';
  return <Ionicons name={name} size={size} color={color} />;
}

export default function BottomTabsNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => ({
        headerStyle: { backgroundColor: '#1e293b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: '700' },
        headerLeft: () => (
          <Pressable
            onPress={() => navigation.getParent()?.goBack()}
            hitSlop={12}
            style={{ marginLeft: 8, padding: 8 }}
          >
            <Ionicons name="chevron-back" size={26} color="#fff" />
          </Pressable>
        ),
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#94a3b8',
        tabBarStyle: { borderTopColor: '#e2e8f0' },
        tabBarIcon: ({ focused, color, size }) => tabIcon(route.name, focused, color, size),
      })}
    >
      <Tab.Screen name="TabInicio" component={TabInicioScreen} options={{ title: 'Inicio' }} />
      <Tab.Screen name="TabBuscar" component={TabBuscarScreen} options={{ title: 'Buscar' }} />
      <Tab.Screen name="TabPerfil" component={TabPerfilScreen} options={{ title: 'Perfil' }} />
    </Tab.Navigator>
  );
}
