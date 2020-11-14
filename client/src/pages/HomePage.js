import React, { useEffect } from "react";
import { Container, Spinner, Row, Col } from "react-bootstrap";
import { useRentalState, useRentalDispatch } from "../context/rental-context";
import axios from "axios";
import CarList from "../components/client/CarList";
import NavBar from "../components/client/NavBar";

export default function HomePage() {
  const { cars, cars_loading } = useRentalState();
  const dispatch = useRentalDispatch();

  useEffect(() => {
    const url = "/cars";
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: "set_cars", payload: response.data });
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col xs={12} md={9}>
            {cars_loading && <Spinner animation="grow" />}
            {!cars_loading && <CarList cars={cars} />}
          </Col>
          <Col xs={12} md={3}></Col>
        </Row>
      </Container>
    </>
  );
}
