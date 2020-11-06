import React, { useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import CarList from "../components/client/CarList";
import { useRentalState, useRentalDispatch } from "../context/rental-context";
import Login from "../components/client/Login";

export default function HomePage() {
  const { cars, cars_loading } = useRentalState();
  const dispatch = useRentalDispatch();

  useEffect(() => {
    dispatch({ type: "get_cars" });
  }, [dispatch]);

  return (
    <Container>
      <div>
        <Login></Login>
      </div>
      <div>
        <h1>Hi!</h1>
        <p>I'm the homepage component.</p>
        {cars_loading && <Spinner animation='grow' />}
        {!cars_loading && <CarList cars={cars}>asdasd</CarList>}
      </div>
    </Container>
  );
}
