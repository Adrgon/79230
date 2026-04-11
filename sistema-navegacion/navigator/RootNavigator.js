import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabsNavigation from '../navigation/BottomTabsNavigation';
import DrawerNavigation from '../navigation/DrawerNavigation';
import StackNavigation from '../navigation/StackNavigation';
import HomeMenuScreen from '../screens/HomeMenuScreen';

const RootStack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#0f172a' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <RootStack.Screen name="Menu" component={HomeMenuScreen} options={{ title: 'Inicio' }} />
      <RootStack.Screen
        name="StackDemo"
        component={StackNavigation}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="TabsDemo"
        component={BottomTabsNavigation}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="DrawerDemo"
        component={DrawerNavigation}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
}
