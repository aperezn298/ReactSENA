# 🛍️ Gestión de Productos - CRUD con React

Una aplicación web moderna para gestionar productos utilizando React, React Bootstrap y la API de [Platzi Fake Store API](https://api.escuelajs.co/api/v1/products).

## ✨ Características

- **CRUD Completo**: Crear, Leer, Actualizar y Eliminar productos
- **Diseño Responsivo**: Interfaz adaptable a todos los dispositivos usando React Bootstrap
- **API REST**: Consumo de API externa usando fetch y promesas
- **Validación de Formularios**: Validación en tiempo real de los datos
- **Estados de Carga**: Indicadores visuales durante las operaciones
- **Manejo de Errores**: Gestión elegante de errores y mensajes informativos
- **Interfaz Moderna**: Diseño atractivo con animaciones sutiles

## 🚀 Tecnologías Utilizadas

- **React 19.1.0**: Framework de JavaScript para UI
- **React Bootstrap**: Componentes UI basados en Bootstrap
- **Vite**: Herramienta de build rápida
- **Fetch API**: Para las peticiones HTTP
- **CSS3**: Estilos personalizados y animaciones

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd gestionAPI
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 🏗️ Estructura del Proyecto

```
src/
├── features/
│   └── products/
│       ├── components/
│       │   ├── ProductForm.jsx      # Formulario para crear/editar productos
│       │   └── ProductList.jsx      # Lista de productos con cards
│       ├── hooks/
│       │   └── useProducts.js       # Hook personalizado para manejar productos
│       ├── pages/
│       │   └── ProductsPage.jsx     # Página principal del CRUD
│       ├── services/
│       │   └── productService.js    # Servicio para peticiones a la API
│       └── styles/
│           └── products.css         # Estilos personalizados
├── App.jsx                          # Componente principal
└── main.jsx                         # Punto de entrada
```

## 🔧 Funcionalidades

### ✅ Listar Productos
- Visualización en cards responsivas
- Imágenes de productos con fallback
- Información completa (título, precio, descripción, categoría)
- Estados de carga y error

### ➕ Crear Producto
- Formulario modal con validación
- Campos requeridos: título, precio, descripción
- Selección de categoría
- URL de imagen opcional

### ✏️ Editar Producto
- Formulario pre-poblado con datos existentes
- Mismas validaciones que creación
- Actualización en tiempo real

### 🗑️ Eliminar Producto
- Modal de confirmación
- Eliminación segura con confirmación
- Feedback visual del proceso

## 🎨 Características de UI/UX

- **Cards Responsivas**: Diseño adaptable de 1-4 columnas según el dispositivo
- **Animaciones**: Efectos hover y transiciones suaves
- **Estados Visuales**: Indicadores de carga, éxito y error
- **Validación en Tiempo Real**: Feedback inmediato en formularios
- **Diseño Moderno**: Uso de sombras, bordes redondeados y colores modernos

## 📡 API Utilizada

La aplicación consume la [Platzi Fake Store API](https://api.escuelajs.co/api/v1/products) que proporciona:

- `GET /products` - Obtener todos los productos
- `GET /products/:id` - Obtener un producto específico
- `POST /products` - Crear un nuevo producto
- `PUT /products/:id` - Actualizar un producto
- `DELETE /products/:id` - Eliminar un producto

## 🔄 Manejo de Estados

El proyecto utiliza un hook personalizado `useProducts` que maneja:

- Estado de productos
- Estados de carga
- Manejo de errores
- Operaciones CRUD

## 📱 Responsividad

- **Mobile First**: Diseñado primero para móviles
- **Breakpoints**: Adaptación automática para tablet y desktop
- **Touch Friendly**: Botones y elementos optimizados para touch

## 🎯 Mejores Prácticas Implementadas

- **Componentización**: Componentes reutilizables y modulares
- **Hooks Personalizados**: Lógica reutilizable
- **Manejo de Errores**: Gestión robusta de errores
- **Validación**: Validación tanto en frontend como feedback de API
- **Performance**: Limitación de productos mostrados para mejor rendimiento
- **Accesibilidad**: Elementos semánticamente correctos

## 🚀 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción
- `npm run lint` - Ejecuta el linter

## 🔮 Posibles Mejoras

- [ ] Paginación de productos
- [ ] Filtros por categoría
- [ ] Búsqueda de productos
- [ ] Ordenamiento
- [ ] Caché de datos
- [ ] Tests unitarios
- [ ] Estado global (Redux/Zustand)
- [ ] Autenticación
- [ ] Modo offline

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
