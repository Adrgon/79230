# Aplicacion de componentes core

Esta aplicacion de React Native (Expo) muestra ejemplos individuales de los componentes core mas usados. Cada ejemplo vive en su propio archivo dentro de la carpeta components y se renderiza uno a la vez desde App.

## Requisitos

- Node.js instalado
- Expo CLI opcional (la app funciona con npx expo)

## Como ejecutar

1) Instalar dependencias:

```
npm install
```

2) Iniciar el proyecto:

```
npm run start
```

## Estructura del proyecto

- App.js: renderiza un solo ejemplo a la vez.
- components/: contiene un archivo por componente con su estilo y explicacion.
- assets/: recursos estaticos (si se agregan en el futuro).

## Cambiar el ejemplo mostrado

En App.js importa el componente que quieras ver y reemplaza el que se esta renderizando.

Ejemplo:

```js
import TextExample from "./components/TextExample";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TextExample />
    </SafeAreaView>
  );
}
```

## Ejemplos incluidos

- View
- Text
- Image
- Pressable
- StyleSheet
- TextInput
- ScrollView
- Button
- Switch
- SectionList
- FlatList

## Notas

- Cada archivo dentro de components incluye una explicacion breve del componente y estilos propios.
- Puedes copiar el contenido de un ejemplo y adaptarlo a tus propias pantallas.
