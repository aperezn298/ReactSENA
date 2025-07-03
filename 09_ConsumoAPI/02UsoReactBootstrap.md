
# Guía Completa para React Bootstrap y Bootstrap Icons

Esta guía te muestra todo lo que necesitas saber para dominar **React Bootstrap**, **Bootstrap** y **Bootstrap Icons** en tus proyectos de React de manera profesional.

---

## 📦 Instalación

### 1. Instalar React Bootstrap
React Bootstrap reimplementa los componentes de Bootstrap exclusivamente para React, sin dependencias de jQuery.

```bash
npm install react-bootstrap bootstrap
```

Esto instalará tanto React Bootstrap como Bootstrap CSS.

### 2. Instalar Bootstrap Icons
Para los iconos puedes instalar el paquete oficial con:
```bash
npm install bootstrap-icons
```

### 3. Verificar la instalación
Puedes verificar que se instalaron correctamente con:
```bash
npm list react-bootstrap bootstrap bootstrap-icons
```

---

## ⚙️ Configuración

### 1. Importar el CSS de Bootstrap
Para que los estilos funcionen correctamente, importa Bootstrap en tu archivo `src/index.js` o `src/main.jsx`:

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

### 2. Importar Bootstrap Icons
Para usar los iconos, importa el CSS en el mismo archivo:

```javascript
import 'bootstrap-icons/font/bootstrap-icons.css';
```

### 3. Configuración completa en main.jsx
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

## 🧩 Componentes Más Utilizados

### 1. Layout y Contenedores

#### Container
Contenedor principal que centra el contenido y añade padding.
```jsx
import { Container, Row, Col } from 'react-bootstrap';

function Layout() {
  return (
    <Container>
      <Row>
        <Col md={6}>Columna 1</Col>
        <Col md={6}>Columna 2</Col>
      </Row>
    </Container>
  );
}
```

#### Grid System (Row & Col)
Sistema de rejilla responsive de 12 columnas.
```jsx
import { Row, Col } from 'react-bootstrap';

function GridExample() {
  return (
    <Row>
      <Col xs={12} sm={6} md={4} lg={3}>
        Responsive Column
      </Col>
      <Col xs={12} sm={6} md={8} lg={9}>
        Another Column
      </Col>
    </Row>
  );
}
```

### 2. Navegación

#### Navbar
Barra de navegación responsive.
```jsx
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Mi App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#products">Productos</Nav.Link>
            <NavDropdown title="Más" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Acción</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Otra acción</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separado</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
```

### 3. Botones

#### Button
Botones con diferentes variantes y tamaños.
```jsx
import { Button, ButtonGroup } from 'react-bootstrap';

function ButtonExamples() {
  return (
    <div>
      {/* Variantes básicas */}
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      
      {/* Botones outline */}
      <Button variant="outline-primary">Outline Primary</Button>
      
      {/* Tamaños */}
      <Button size="lg">Grande</Button>
      <Button size="sm">Pequeño</Button>
      
      {/* Con iconos */}
      <Button>
        <i className="bi bi-download me-2"></i>
        Descargar
      </Button>
      
      {/* Grupo de botones */}
      <ButtonGroup>
        <Button variant="primary">Izquierda</Button>
        <Button variant="primary">Centro</Button>
        <Button variant="primary">Derecha</Button>
      </ButtonGroup>
    </div>
  );
}
```

### 4. Formularios

#### Form Components
Componentes completos para formularios.
```jsx
import { Form, Button, InputGroup } from 'react-bootstrap';

function FormExample() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Ingresa tu email"
          required 
        />
        <Form.Text className="text-muted">
          Nunca compartiremos tu email.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Selecciona una opción</Form.Label>
        <Form.Select>
          <option>Elige...</option>
          <option value="1">Opción 1</option>
          <option value="2">Opción 2</option>
          <option value="3">Opción 3</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check 
          type="checkbox" 
          label="Acepto los términos y condiciones" 
        />
      </Form.Group>

      {/* Input Group con iconos */}
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <i className="bi bi-person"></i>
        </InputGroup.Text>
        <Form.Control placeholder="Usuario" />
      </InputGroup>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}
```

### 5. Cards

#### Card
Contenedor flexible para mostrar contenido.
```jsx
import { Card, Button, Badge } from 'react-bootstrap';

function CardExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="imagen.jpg" />
      <Card.Body>
        <Card.Title>
          Título del Card
          <Badge bg="secondary" className="ms-2">Nuevo</Badge>
        </Card.Title>
        <Card.Text>
          Descripción del contenido del card.
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        Hace 2 días
      </Card.Footer>
    </Card>
  );
}
```

### 6. Modals

#### Modal
Ventanas emergentes para mostrar contenido.
```jsx
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalExample() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Abrir Modal
      </Button>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="bi bi-info-circle me-2"></i>
            Título del Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Contenido del modal aquí.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
```

### 7. Alerts

#### Alert
Mensajes de notificación y retroalimentación.
```jsx
import { Alert } from 'react-bootstrap';

function AlertExample() {
  return (
    <div>
      <Alert variant="success">
        <i className="bi bi-check-circle me-2"></i>
        ¡Operación exitosa!
      </Alert>
      
      <Alert variant="danger">
        <Alert.Heading>¡Error!</Alert.Heading>
        <p>Algo salió mal. Por favor, inténtalo de nuevo.</p>
      </Alert>
      
      <Alert variant="warning" dismissible>
        <i className="bi bi-exclamation-triangle me-2"></i>
        Advertencia: Revisa los datos antes de continuar.
      </Alert>
    </div>
  );
}
```

### 8. Tables

#### Table
Tablas responsive y estilizadas.
```jsx
import { Table, Badge, Button } from 'react-bootstrap';

function TableExample() {
  return (
    <Table striped bordered hover responsive>
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Juan Pérez</td>
          <td>
            <Badge bg="success">Activo</Badge>
          </td>
          <td>
            <Button variant="outline-primary" size="sm">
              <i className="bi bi-pencil"></i>
            </Button>
            <Button variant="outline-danger" size="sm" className="ms-2">
              <i className="bi bi-trash"></i>
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
```

### 9. Componentes de Estado

#### Spinner
Indicadores de carga.
```jsx
import { Spinner, Button } from 'react-bootstrap';

function SpinnerExample() {
  return (
    <div>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Cargando...</span>
      </Spinner>
      
      <Spinner animation="grow" variant="primary" />
      
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          className="me-2"
        />
        Cargando...
      </Button>
    </div>
  );
}
```

#### ProgressBar
Barras de progreso.
```jsx
import { ProgressBar } from 'react-bootstrap';

function ProgressExample() {
  return (
    <div>
      <ProgressBar now={60} label="60%" />
      <ProgressBar striped variant="success" now={40} />
      <ProgressBar animated now={45} />
    </div>
  );
}
```

---

## 🎨 Bootstrap Icons

### Iconos Más Utilizados

```jsx
function IconExamples() {
  return (
    <div>
      {/* Iconos básicos */}
      <i className="bi bi-house"></i>        {/* Casa */}
      <i className="bi bi-person"></i>       {/* Persona */}
      <i className="bi bi-envelope"></i>     {/* Email */}
      <i className="bi bi-telephone"></i>    {/* Teléfono */}
      <i className="bi bi-search"></i>       {/* Buscar */}
      <i className="bi bi-heart"></i>        {/* Corazón */}
      <i className="bi bi-star"></i>         {/* Estrella */}
      <i className="bi bi-gear"></i>         {/* Configuración */}
      
      {/* Navegación */}
      <i className="bi bi-arrow-left"></i>   {/* Flecha izquierda */}
      <i className="bi bi-arrow-right"></i>  {/* Flecha derecha */}
      <i className="bi bi-chevron-up"></i>   {/* Chevron arriba */}
      <i className="bi bi-chevron-down"></i> {/* Chevron abajo */}
      
      {/* Acciones */}
      <i className="bi bi-plus"></i>         {/* Más */}
      <i className="bi bi-dash"></i>         {/* Menos */}
      <i className="bi bi-x"></i>            {/* Cerrar */}
      <i className="bi bi-check"></i>        {/* Check */}
      <i className="bi bi-pencil"></i>       {/* Editar */}
      <i className="bi bi-trash"></i>        {/* Eliminar */}
      <i className="bi bi-download"></i>     {/* Descargar */}
      <i className="bi bi-upload"></i>       {/* Subir */}
      
      {/* Estados */}
      <i className="bi bi-exclamation-triangle"></i> {/* Advertencia */}
      <i className="bi bi-check-circle"></i>         {/* Éxito */}
      <i className="bi bi-x-circle"></i>             {/* Error */}
      <i className="bi bi-info-circle"></i>          {/* Información */}
      
      {/* Con tamaños */}
      <i className="bi bi-heart" style={{ fontSize: '1rem' }}></i>
      <i className="bi bi-heart" style={{ fontSize: '2rem' }}></i>
      <i className="bi bi-heart" style={{ fontSize: '3rem' }}></i>
    </div>
  );
}
```

### Iconos en Botones
```jsx
import { Button } from 'react-bootstrap';

function IconButtons() {
  return (
    <div>
      <Button variant="primary">
        <i className="bi bi-plus-circle me-2"></i>
        Agregar
      </Button>
      
      <Button variant="danger">
        <i className="bi bi-trash me-2"></i>
        Eliminar
      </Button>
      
      <Button variant="success">
        <i className="bi bi-check-lg me-2"></i>
        Confirmar
      </Button>
    </div>
  );
}
```

---

## 🛠️ Ejemplo Completo: CRUD Dashboard

```jsx
import { useState } from 'react';
import {
  Container, Row, Col, Card, Table, Button, Modal, Form,
  Alert, Badge, Navbar, Nav, InputGroup
} from 'react-bootstrap';

function CRUDExample() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link>
              <i className="bi bi-person-circle me-1"></i>
              Usuario
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container fluid className="py-4">
        {/* Estadísticas */}
        <Row className="mb-4">
          <Col md={3}>
            <Card className="text-center">
              <Card.Body>
                <i className="bi bi-box-seam fs-1 text-primary"></i>
                <Card.Title>125</Card.Title>
                <Card.Text>Productos</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Más cards... */}
        </Row>

        {/* Alert */}
        {showAlert && (
          <Alert variant="success" dismissible onClose={() => setShowAlert(false)}>
            <i className="bi bi-check-circle me-2"></i>
            Producto guardado exitosamente
          </Alert>
        )}

        {/* Tabla */}
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <h5><i className="bi bi-list-ul me-2"></i>Lista de Productos</h5>
            <Button variant="primary" onClick={() => setShowModal(true)}>
              <i className="bi bi-plus-circle me-2"></i>
              Nuevo Producto
            </Button>
          </Card.Header>
          <Card.Body>
            <Table responsive hover>
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Producto Ejemplo</td>
                  <td>$99.99</td>
                  <td><Badge bg="success">Activo</Badge></td>
                  <td>
                    <Button variant="outline-primary" size="sm">
                      <i className="bi bi-pencil"></i>
                    </Button>
                    <Button variant="outline-danger" size="sm" className="ms-2">
                      <i className="bi bi-trash"></i>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="bi bi-plus-circle me-2"></i>
            Nuevo Producto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre del Producto</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <i className="bi bi-box"></i>
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Ingrese el nombre" />
              </InputGroup>
            </Form.Group>
            {/* Más campos... */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => {
            setShowModal(false);
            setShowAlert(true);
          }}>
            <i className="bi bi-check-lg me-2"></i>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
```

---

## 💡 Mejores Prácticas

### 1. Importaciones Optimizadas
```jsx
// ✅ Importa solo lo que necesitas
import { Button, Modal } from 'react-bootstrap';

// ❌ Evita importar todo
import * as Bootstrap from 'react-bootstrap';
```

### 2. Responsive Design
```jsx
// Siempre usa las clases responsive
<Col xs={12} sm={6} md={4} lg={3}>
  Contenido responsive
</Col>
```

### 3. Accesibilidad
```jsx
// Usa aria-labels y roles apropiados
<Button 
  variant="primary" 
  aria-label="Cerrar modal"
  onClick={handleClose}
>
  <i className="bi bi-x" aria-hidden="true"></i>
</Button>
```

### 4. Consistencia en Iconos
```jsx
// Mantén un patrón consistente
<Button variant="primary">
  <i className="bi bi-plus me-2"></i>  {/* Icono + espaciado */}
  Agregar
</Button>
```

---

## 🎯 Casos de Uso Comunes

### Dashboard Administrativo
- **Layout**: Container, Row, Col
- **Navegación**: Navbar, Nav
- **Datos**: Table, Card, Badge
- **Acciones**: Button, Modal, Form
- **Feedback**: Alert, Spinner, ProgressBar

### E-commerce
- **Productos**: Card, Badge, Button
- **Carrito**: Offcanvas, ListGroup
- **Checkout**: Form, InputGroup, Accordion

### Aplicación de Gestión
- **Listados**: Table, Pagination
- **Formularios**: Form, Modal
- **Estados**: Alert, Toast, Spinner

---

## 📚 Recursos Adicionales

- 📚 [Documentación oficial de React Bootstrap](https://react-bootstrap.github.io/)
- 🎨 [Bootstrap Icons](https://icons.getbootstrap.com/)
- 📝 [Bootstrap Docs](https://getbootstrap.com/)
- 🎬 [React Bootstrap Ejemplos](https://react-bootstrap.github.io/examples/)
- 🎨 [Bootstrap Themes](https://themes.getbootstrap.com/)

---

## 🚀 Conclusión

React Bootstrap te permite crear interfaces modernas y responsive de manera rápida y eficiente. La combinación con Bootstrap Icons te da acceso a más de 1,600 iconos vectoriales de alta calidad.

### Ventajas principales:
- ✅ **Componentes listos para usar**
- ✅ **Diseño responsive automático**
- ✅ **Consistencia visual**
- ✅ **Accesibilidad incorporada**
- ✅ **Documentación completa**
- ✅ **Gran comunidad de soporte**

¡Ahora tienes todo lo necesario para crear interfaces profesionales con React Bootstrap! 🎉
