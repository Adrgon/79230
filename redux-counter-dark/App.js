import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { CounterScreen } from "./src/components/CounterScreen";
import { store } from "./src/store";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <CounterScreen />
      </Provider>
    </SafeAreaProvider>
  );
}
