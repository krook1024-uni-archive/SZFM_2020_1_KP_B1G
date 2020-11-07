import React from "react";
import { Button, Card } from "react-bootstrap";

const Car = () => {
  return (
    <div>
      <Card style={{ width: "35rem" }}>
        <Card.Body>
          <Card.Title>Car Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Rent</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Car;
