import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackHomeScreen from '../screens/stack/StackHomeScreen';
import StackDetalleScreen from '../screens/stack/StackDetalleScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#1e293b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen name="StackInicio" component={StackHomeScreen} options={{ title: 'Stack' }} />
      <Stack.Screen name="StackDetalle" component={StackDetalleScreen} options={{ title: 'Detalle' }} />
    </Stack.Navigator>
  );
}
