# Tours (React Native + Expo)

Guia rapida para el alumno. Esta app muestra una lista de tours con carga simulada, lectura local de datos y acciones basicas (leer mas / quitar tour).

## Estructura del proyecto

```
.
├── App.js
├── index.js
├── Loading.jsx
├── Tour.jsx
├── Tours.jsx
├── styles.js
├── assets/
│   └── tour.json
├── app.json
└── package.json
```

## Componentes y responsabilidades

### App.js
- Punto de entrada visual de la app.
- Maneja el estado global: `loading` y `tours`.
- Carga datos locales desde `assets/tour.json` (simula fetch con `setTimeout`).
- Renderiza:
  - `Loading` cuando `loading` es `true`.
  - Pantalla de "no tours left" cuando no hay items.
  - `Tours` cuando hay datos.

### Loading.jsx
- Indicador de carga (`ActivityIndicator`) y mensajes.
- Recibe `retryCount` opcional para mostrar mensajes de reintento.

### Tours.jsx
- Encargado de la lista.
- Usa `FlatList` para renderizar cada tour.
- Recibe `tours` y `removeTour` por props.

### Tour.jsx
- Card individual de tour.
- Controla estado local `readMore` para expandir texto.
- Controla `imageError` para fallback de imagen.
- Boton "not interested" llama a `removeTour(id)`.

### styles.js
- Variables de color, tipografia, espaciados, sombras y estilos reutilizables.
- Estilos compartidos por todos los componentes.

### assets/tour.json
- Datos estaticos con los tours.
- Cada item incluye `id`, `name`, `info`, `image`, `price`.

## Flujo de datos

1. `App` inicia con `loading = true` y `tours = []`.
2. `loadLocalTours()` lee el JSON local con un retraso (simulacion).
3. Al terminar la carga, `loading = false` y se muestran los tours.
4. `removeTour(id)` elimina un tour del estado.
5. Si no quedan tours, se muestra el boton `refresh` para recargar.

## Scripts utiles

- `npm start` o `yarn start`: inicia Expo.
- `npm run android`: abre en Android.
- `npm run ios`: abre en iOS.
- `npm run web`: abre en web.

## Ideas para practicar

- Reemplazar la carga local por un fetch real.
- Agregar un filtro por precio o nombre.
- Guardar favoritos en `AsyncStorage`.
- Crear un componente de `Header` reutilizable.
