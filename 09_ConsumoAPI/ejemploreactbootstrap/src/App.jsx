import { useState } from 'react'
import { Button, Modal, Container, Row, Col, Card } from 'react-bootstrap'
import './App.css'

function App() {
  const [showModal, setShowModal] = useState(false)

  const handleShow = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow">
            <Card.Header className="bg-primary text-white text-center">
              <h2>
                <i className="bi bi-bootstrap-fill me-2"></i>
                React Bootstrap Example
              </h2>
            </Card.Header>
            <Card.Body className="text-center p-5">
              <h4 className="mb-4">Ejemplo Básico de Botón y Modal</h4>
              <p className="text-muted mb-4">
                Haz clic en el botón para abrir una modal con Bootstrap Icons
              </p>
              
              {/* Botón principal */}
              <Button 
                variant="primary" 
                size="lg" 
                onClick={handleShow}
                className="px-4 py-2"
              >
                <i className="bi bi-window-plus me-2"></i>
                Abrir Modal
              </Button>

              <div className="mt-4">
                <small className="text-muted">
                  <i className="bi bi-info-circle me-1"></i>
                  Ejemplo creado con React Bootstrap y Bootstrap Icons
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal Component */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton className="bg-light">
          <Modal.Title>
            <i className="bi bi-star-fill text-warning me-2"></i>
            Modal de Ejemplo
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body className="p-4">
          <div className="text-center">
            <i className="bi bi-check-circle-fill text-success" style={{fontSize: '3rem'}}></i>
            <h5 className="mt-3 mb-3">¡Modal abierta exitosamente!</h5>
            <p className="text-muted">
              Esta es una modal básica creada con React Bootstrap. 
              Incluye iconos de Bootstrap Icons para mejorar la experiencia visual.
            </p>
            
            <div className="d-flex justify-content-center gap-3 mt-4">
              <div className="text-center">
                <i className="bi bi-heart-fill text-danger" style={{fontSize: '1.5rem'}}></i>
                <small className="d-block mt-1">Favorito</small>
              </div>
              <div className="text-center">
                <i className="bi bi-share-fill text-primary" style={{fontSize: '1.5rem'}}></i>
                <small className="d-block mt-1">Compartir</small>
              </div>
              <div className="text-center">
                <i className="bi bi-bookmark-fill text-success" style={{fontSize: '1.5rem'}}></i>
                <small className="d-block mt-1">Guardar</small>
              </div>
            </div>
          </div>
        </Modal.Body>
        
        <Modal.Footer className="bg-light">
          <Button variant="secondary" onClick={handleClose}>
            <i className="bi bi-x-circle me-2"></i>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            <i className="bi bi-check2 me-2"></i>
            Entendido
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default App
