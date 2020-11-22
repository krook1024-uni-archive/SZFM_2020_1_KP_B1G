import React from "react";
import Car from "../client/Car";
import Masonry from "react-masonry-css";
import './CarList.css';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const CarList = ({ cars }) => {
  if (Array.isArray(cars)) {
    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {cars.map((car) => (
          <Car car={car} key={car._id} />
        ))}
      </Masonry>
    );
  } else {
    return null;
  }
};

export default CarList;
