# Redux Counter Dark

Aplicacion React Native con Expo que usa Redux Toolkit para manejar un contador y un modo oscuro.

La idea del proyecto es mantener una estructura simple: una pantalla principal, un store global, slices separados por funcionalidad y estilos centralizados.

## Funcionalidades

- Incrementar el contador.
- Decrementar el contador.
- Reiniciar el contador a `0`.
- Activar o desactivar el modo oscuro.
- Cambiar los colores de la interfaz segun el tema actual.

## Tecnologias

- Expo
- React Native
- Redux Toolkit
- React Redux
- React Native Safe Area Context
- Expo Status Bar

## Estructura

```text
redux-counter-dark/
├── App.js
├── app.json
├── index.js
├── package.json
├── src/
│   ├── store.js
│   ├── components/
│   │   └── CounterScreen.js
│   ├── features/
│   │   ├── counter/
│   │   │   └── counterSlice.js
│   │   └── theme/
│   │       └── themeSlice.js
│   ├── hooks/
│   │   └── useContador.js
│   └── theme/
│       ├── colors.js
│       └── styles.js
└── README.md
```

## Como esta organizado

`App.js` es el punto de entrada visual. Envuelve la app con `SafeAreaProvider` y con el `Provider` de Redux.

`src/store.js` crea el store global con `configureStore` y registra dos reducers:

- `counter`: guarda el valor del contador.
- `theme`: guarda si el modo oscuro esta activo.

`src/components/CounterScreen.js` contiene la pantalla completa. Renderiza el contador, los botones y el switch de modo oscuro.

`src/features/counter/counterSlice.js` define las acciones del contador:

- `increment`
- `decrement`
- `reset`

`src/features/theme/themeSlice.js` define la accion `toggleDarkMode`.

`src/hooks/useContador.js` agrupa la lectura y las acciones del contador para que la pantalla no tenga esa logica repetida.

`src/theme/colors.js` guarda los colores del tema claro y oscuro. `src/theme/styles.js` guarda los estilos base reutilizables de la pantalla.

## Flujo de Redux

El hook `useContador` lee el estado del contador y devuelve acciones listas para usar:

```js
const { contador, incrementar, decrementar, reiniciar } = useContador();
```

Internamente el hook usa Redux:

```js
const contador = useSelector((state) => state.counter.value);
```

Cuando cambia `darkMode`, la pantalla selecciona el tema correspondiente:

```js
const colors = darkMode ? darkTheme : lightTheme;
```

## Instalar dependencias

```bash
npm install
```

## Ejecutar la app

```bash
npm start
```

Tambien se puede abrir directamente por plataforma:

```bash
npm run android
npm run ios
npm run web
```

## Scripts

```json
{
  "start": "expo start",
  "android": "expo start --android",
  "ios": "expo start --ios",
  "web": "expo start --web"
}
```

## Dependencias principales

```json
{
  "@reduxjs/toolkit": "^2.11.2",
  "expo": "~54.0.33",
  "expo-status-bar": "~3.0.9",
  "react": "19.1.0",
  "react-native": "0.81.5",
  "react-native-safe-area-context": "~5.6.0",
  "react-redux": "^9.2.0"
}
```
