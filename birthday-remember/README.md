# Birthday Remember

Aplicacion educativa para que los alumnos practiquen React Native creando una lista simple de cumpleaños. Permite ver personas con su fecha e imagen, usando datos locales y estilos compartidos.

## Estructura del proyecto

- App.js: componente principal y punto de entrada de la UI.
- List.jsx: componente de lista que renderiza los items.
- data.js: datos locales de ejemplo.
- styles.js: estilos globales y reutilizables.
- colors.js: paleta de colores centralizada.
- app.json: configuracion de la app.
- index.js: registro de la app.
- assets/: imagenes y recursos.

## Componentes utilizados

- View: contenedores de layout.
- Text: render de textos.
- Image: render de imagenes.
- StyleSheet: definicion de estilos.

## Flujo basico

1. App.js importa datos desde data.js.
2. App.js pasa los datos a List.jsx.
3. List.jsx renderiza cada item usando map.
4. styles.js y colors.js unifican el estilo visual.

## Requisitos

- Node.js y npm
- Expo CLI o React Native CLI

## Como ejecutar

1. Instalar dependencias: npm install
2. Iniciar el proyecto: npm start
