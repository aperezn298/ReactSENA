# React Bootstrap Modal Example

Este es un ejemplo básico de cómo usar React Bootstrap con iconos para crear un botón que abre una modal.

## Características

- ✅ Botón estilizado con React Bootstrap
- ✅ Modal responsive y centrada
- ✅ Iconos de Bootstrap Icons
- ✅ Diseño moderno con efectos hover
- ✅ Componentes completamente funcionales

## Dependencias Instaladas

- `react-bootstrap` - Componentes de Bootstrap para React
- `bootstrap` - CSS de Bootstrap
- `bootstrap-icons` - Iconos de Bootstrap

## Componentes Utilizados

### React Bootstrap
- `Button` - Botón principal para abrir la modal
- `Modal` - Componente modal con header, body y footer
- `Container`, `Row`, `Col` - Sistema de grid
- `Card` - Tarjeta contenedora

### Bootstrap Icons
- `bi-bootstrap-fill` - Icono de Bootstrap en el header
- `bi-window-plus` - Icono en el botón principal
- `bi-star-fill` - Icono en el título de la modal
- `bi-check-circle-fill` - Icono de éxito
- `bi-heart-fill`, `bi-share-fill`, `bi-bookmark-fill` - Iconos de acciones
- `bi-x-circle`, `bi-check2` - Iconos en los botones del footer

## Cómo ejecutar

```bash
npm install
npm run dev
```

Luego abre tu navegador en `http://localhost:5173/`

## Funcionalidad

1. **Botón Principal**: Haz clic en "Abrir Modal" para mostrar la modal
2. **Modal**: Se abre centrada en la pantalla con animaciones suaves
3. **Cerrar Modal**: Usa el botón "X", "Cerrar" o "Entendido" para cerrar la modal
4. **Iconos Interactivos**: Los iconos tienen efectos hover para mejor UX

## Estructura del Código

```jsx
// Estado para controlar la visibilidad de la modal
const [showModal, setShowModal] = useState(false)

// Funciones para manejar la apertura y cierre
const handleShow = () => setShowModal(true)
const handleClose = () => setShowModal(false)

// Componente Modal con props show y onHide
<Modal show={showModal} onHide={handleClose} centered>
```

Este ejemplo demuestra las mejores prácticas para usar React Bootstrap con iconos en una aplicación React moderna.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
