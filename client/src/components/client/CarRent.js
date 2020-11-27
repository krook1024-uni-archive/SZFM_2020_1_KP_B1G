import React, { useState, useRef } from "react";
import {
  Modal,
  Button,
  Form,
  Container,
  Col,
  Row,
  ListGroup,
} from "react-bootstrap";
import axios from "axios";

const CarRent = ({ car }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const rentStart = useRef();
  const rentEnd = useRef();
  const rentCar = () => {
    if (
      localStorage.getItem("_id") !== null &&
      localStorage.getItem("_id") !== "" &&
      localStorage.getItem("username") !== null &&
      localStorage.getItem("password")
    ) {
      if (periodValidation(rentStart.current.value, rentEnd.current.value)) {
        var startTime = new Date(rentStart.current.value);
        var finishTime = new Date(rentEnd.current.value);
        var userId = localStorage.getItem("_id");
        var carId = car._id;
        var username = localStorage.getItem("username");
        var password = localStorage.getItem("password");
        const rent = {
          carId,
          userId,
          startTime,
          finishTime,
        };
        axios
          .post("http://localhost:3004/rents/", rent, {
            auth: {
              username,
              password,
            },
          })
          .then(function (response) {
            console.log(response);
          })
          .catch((error) => {
            console.error("There was an error!", error);
          });
      } else console.log("Invalid dates");
    } else console.log("pls log in");
  };
  const periodValidation = (dateStart, dateEnd) => {
    if (
      dateValidation(getCurrentDate(), dateStart) &&
      dateValidation(dateStart, dateEnd)
    )
      return true;
    else return false;
  };

  const dateValidation = (dateStart, dateEnd) => {
    const dateStartMembers = dateStart.split("-");
    const dateEndMembers = dateEnd.split("-");
    if (
      dateStartMembers[0] <= dateEndMembers[0] &&
      dateStartMembers[1] <= dateEndMembers[1] &&
      dateStartMembers[2] < dateEndMembers[2]
    )
      return true;
    else return false;
  };
  const getCurrentDate = (separator = "-") => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    var now = `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
    return now;
  };

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
                <img src={car.imgURL} alt="carImg" width="100%"></img>
                <Form.Group>
                  <Form.Label>Bérlés kezdete</Form.Label>
                  <Form.Control type="date" ref={rentStart} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Bérlés vége</Form.Label>
                  <Form.Control type="date" ref={rentEnd} />
                </Form.Group>
                <Form.Group>
                  <Form.Label></Form.Label>
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
          <Button variant="primary" onClick={rentCar}>
            Megerősítés
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CarRent;
