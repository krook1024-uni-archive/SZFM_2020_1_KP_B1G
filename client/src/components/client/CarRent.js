import React, { useState } from "react";
import {
  Modal,
  Button,
  Form,
  Container,
  Col,
  Row,
  ListGroup,
} from "react-bootstrap";

const CarRent = ({ car }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Bérlés
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {car.make} {car.model}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <img src={car.imgURL} alt="carImg"></img>
                <Form.Group>
                  <Form.Label>Bérlés kezdete</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Bérlés vége</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
              <Col>
                <ListGroup variant="flush">
                  <ListGroup.Item>Rendszám: {car.plateNumber}</ListGroup.Item>
                  <ListGroup.Item>
                    Gyártási év: {car.productionYear}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Ülések száma: {car.seatNumber}
                  </ListGroup.Item>
                  <ListGroup.Item>Szín: {car.color}</ListGroup.Item>
                  <ListGroup.Item>
                    Üzemanyag típusa: {car.fuelType}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Kilóméteróra állása: {car.mileage} km
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Váltó típusa: {car.gearboxType}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Mégse
          </Button>
          <Button variant="primary">Megerősítés</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CarRent;
