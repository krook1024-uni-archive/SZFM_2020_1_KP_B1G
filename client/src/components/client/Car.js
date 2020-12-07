import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import CarRent from "../client/CarRent";

const Car = ({ car, hideButton = false }) => {
  return (
    <Card>
      <Card.Header>
        {car.make} {car.model}
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Plate number: {car.plateNumber}</ListGroup.Item>
        <ListGroup.Item>Production year: {car.productionYear}</ListGroup.Item>
      </ListGroup>
      {!hideButton && (
        <Card.Footer>
          <CarRent car={car} />
        </Card.Footer>
      )}
    </Card>
  );
};

export default Car;
