import React, { useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import CarList from "../components/client/CarList";
import { useRentalState, useRentalDispatch } from "../context/rental-context";
import Login from "../components/client/Login";
import axios from "axios";

export default function HomePage() {
  const { cars, cars_loading } = useRentalState();
  const dispatch = useRentalDispatch();

  useEffect(() => {
    const url = "http://localhost:3004/cars";
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: "set_cars", payload: response.data });
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <>
      {/* ide kellene majd a navbar*/}
      <Container>
        <div>
          <Login />
        </div>
        <div>
          {cars_loading && <Spinner animation="grow" />}
          {!cars_loading && <CarList cars={cars} />}
        </div>
      </Container>
    </>
  );
}
