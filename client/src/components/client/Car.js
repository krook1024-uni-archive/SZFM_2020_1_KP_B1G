import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";

const Car = ({ CarObj }) => {
  return (
    <div>
      <Card style={{ width: "35rem" }}>
        <Card.Header>{CarObj.make} {CarObj.model}</Card.Header>
        <Card.Body>
          <Card.Title>
            Adatok
          </Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>
                Rendszám: {CarObj.plateNumber}
            </ListGroup.Item>
            <ListGroup.Item>
                Gyártási év: {CarObj.productionYear}
            </ListGroup.Item>
          </ListGroup>
          <Button variant="primary">Bérlés</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Car;
