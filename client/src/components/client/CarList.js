import React from "react";
import { CardColumns } from "react-bootstrap";
import Car from "../client/Car";

const CarList = ({ cars }) => {
  if (Array.isArray(cars)) {
    return (
      <>
        <CardColumns>
          {cars.map((car) => (
            <Car car={car} key={car._id} />
          ))}
        </CardColumns>
      </>
    );
  } else {
    return null;
  }
};

export default CarList;
