# Context Cart

Aplicacion mobile creada con Expo y React Native que implementa un carrito de compras usando Context API y `useReducer` para manejar el estado global.

## Que hace la aplicacion

La app muestra un carrito con productos, cantidades, precios y un total general. Permite:

- Ver los productos del carrito.
- Aumentar o disminuir la cantidad de cada producto.
- Eliminar un producto individual.
- Vaciar todo el carrito.
- Calcular automaticamente la cantidad total de items y el precio total.

## Tecnologias usadas

- Expo: entorno para desarrollar y ejecutar la app React Native.
- React Native: componentes nativos como `View`, `Text`, `Image`, `ScrollView`, `TouchableOpacity`, `SafeAreaView` y `StatusBar`.
- React Context API: comparte el estado del carrito entre componentes sin pasar props manualmente.
- `useReducer`: centraliza la logica de cambios del carrito en un reducer.
- `useEffect`: carga datos iniciales y recalcula totales cuando cambia el carrito.
- `@expo/vector-icons`: muestra iconos del carrito y flechas de cantidad.

## Instalacion

Desde la carpeta del proyecto:

```bash
npm install
```

## Ejecutar el proyecto

```bash
npm start
```

Tambien se puede ejecutar directamente en cada plataforma:

```bash
npm run android
npm run ios
npm run web
```

## Estructura principal

```text
context-cart/
├── App.js
├── context.js
├── reducer.js
├── data.js
├── Navbar.jsx
├── CartContainer.jsx
├── CartItem.jsx
├── styles.js
└── package.json
```

## Desarrollo de la aplicacion

### `App.js`

Es el componente principal. Envuelve toda la interfaz con `AppProvider`, que viene desde `context.js`. Gracias a esto, componentes como `Navbar`, `CartContainer` y `CartItem` pueden acceder al carrito y a las acciones globales.

Tambien configura el contenedor visual con `SafeAreaView` y el color del `StatusBar`.

### `context.js`

Define el contexto global de la aplicacion.

El estado inicial contiene:

- `loading`: indica si se estan cargando productos.
- `cart`: lista de productos del carrito.
- `total`: precio total.
- `amount`: cantidad total de items.

Dentro de `AppProvider` se usa `useReducer` para conectar el estado con el archivo `reducer.js`. Tambien se crean funciones como `clearCart`, `remove` y `toggleAmount`, que disparan acciones al reducer.

La app carga productos desde:

```text
https://course-api.com/react-useReducer-cart-project
```

Cuando cambia el carrito, un `useEffect` ejecuta la accion `GET_TOTALS` para recalcular el total y la cantidad de productos.

### `reducer.js`

Contiene toda la logica de actualizacion del carrito. Recibe el estado actual y una accion, y devuelve un nuevo estado.

Acciones principales:

- `CLEAR_CART`: vacia el carrito.
- `REMOVE`: elimina un producto por `id`.
- `INCREASE`: aumenta la cantidad de un producto.
- `DECREASE`: disminuye la cantidad y elimina el producto si llega a `0`.
- `TOGGLE_AMOUNT`: aumenta o disminuye segun el tipo recibido (`inc` o `dec`).
- `GET_TOTALS`: calcula el total de items y el precio final.
- `LOADING`: activa el estado de carga.
- `DISPLAY_ITEMS`: reemplaza el carrito con los datos obtenidos desde la API.

### `data.js`

Incluye productos iniciales de ejemplo. Estos datos sirven como estado inicial antes de cargar la informacion desde la API.

Cada producto tiene:

- `id`
- `title`
- `price`
- `img`
- `amount`

### `Navbar.jsx`

Muestra el titulo de la app y el icono del carrito. Tambien presenta la cantidad total de productos usando el valor `amount` del contexto global.

Los iconos se importan desde:

```js
import { MaterialCommunityIcons } from "@expo/vector-icons";
```

### `CartContainer.jsx`

Renderiza la lista completa del carrito. Si no hay productos, muestra el mensaje `Tu carrito esta vacio`.

Cuando hay productos:

- Recorre el arreglo `cart`.
- Renderiza un `CartItem` por cada producto.
- Muestra el total.
- Incluye el boton para vaciar el carrito.

### `CartItem.jsx`

Representa un producto individual del carrito. Muestra imagen, nombre, precio, cantidad y botones para aumentar o disminuir.

Usa funciones del contexto:

- `remove(id)`: elimina el producto.
- `toggleAmount(id, "inc")`: aumenta la cantidad.
- `toggleAmount(id, "dec")`: disminuye la cantidad.

## Flujo del estado

1. `AppProvider` inicializa el estado con `useReducer`.
2. Los componentes leen datos usando `useGlobalContext`.
3. Al presionar un boton, se ejecuta una funcion del contexto.
4. Esa funcion hace `dispatch` de una accion.
5. `reducer.js` calcula el nuevo estado.
6. React vuelve a renderizar la interfaz con los datos actualizados.

## Dependencias principales

```json
{
  "@expo/vector-icons": "^15.0.3",
  "expo": "~54.0.33",
  "expo-status-bar": "~3.0.9",
  "react": "19.1.0",
  "react-native": "0.81.5"
}
```

## Seguridad de dependencias

El proyecto incluye `overrides` para mantener versiones seguras de dependencias transitivas:

```json
{
  "postcss": "8.5.12",
  "uuid": "14.0.0"
}
```

Con esta configuracion, `npm audit` queda sin vulnerabilidades reportadas.
