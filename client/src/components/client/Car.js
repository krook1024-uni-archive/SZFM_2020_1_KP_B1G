import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import CarRent from "../client/CarRent"

const Car = ({ car }) => {
  return (
    <div>
      <Card>
        <Card.Header>
          {car.make} {car.model}
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Rendszám: {car.plateNumber}</ListGroup.Item>
          <ListGroup.Item>Gyártási év: {car.productionYear}</ListGroup.Item>
        </ListGroup>
        <Card.Footer>
          <CarRent car={car}/>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Car;
