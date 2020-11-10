import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";

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
          <Button variant="success">Bérlés</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Car;
