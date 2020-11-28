import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useRentalState, useRentalDispatch } from "../context/rental-context";
import axios from "axios";
import CarList from "../components/client/CarList";
import NavBar from "../components/client/NavBar";
import { useInView } from "react-intersection-observer";

const PER_PAGE = 25;

const HomePage = () => {
  const { cars, cars_loading } = useRentalState();
  const dispatch = useRentalDispatch();
  const [page, setPage] = useState(0);
  const [loader, inView] = useInView({ threshold: 1 });

  useEffect(() => {
    let start = page >= 1 ? page * PER_PAGE : 0;
    let end = start + PER_PAGE - 1;
   // const url = `http://localhost:3004/cars?_start=${start}&_end=${end}&_order=ASC&_sort=make`;
    const url = "http://localhost:3004/cars/available"
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: "add_to_cars", payload: response.data });
      })
      .catch((err) => console.log(err));
  }, [dispatch, page]);

  useEffect(() => {
    if (inView) {
      setPage((page) => page + 1);
    }
  }, [inView]);

  return (
    <>
      <NavBar />
      <Container>
        {cars_loading && <Spinner animation="grow" />}
        {!cars_loading && (
          <>
            <CarList cars={cars} />
            <div className="text-center my-5" ref={loader}>
              <h2>Load more...</h2>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default HomePage;
