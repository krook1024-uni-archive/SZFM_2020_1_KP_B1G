import React from "react";
import { CardDeck } from "react-bootstrap";
import Car from "../client/Car";

const CarList = ({ cars }) => {
  if (Array.isArray(cars)) {
    return (
      <>
        <CardDeck>
          {cars.map((car) => (
            <Car car={car} />
          ))}
        </CardDeck>
      </>
    );
  } else {
    return null;
  }
};

export default CarList;
