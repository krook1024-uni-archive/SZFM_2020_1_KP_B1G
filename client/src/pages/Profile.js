import React, { useEffect, useState } from "react";
import NavBar from "../components/client/NavBar";
import { Container } from "react-bootstrap";
import { useUserState, useUserDispatch } from "../context/user-context";
import axios from "axios";
import Car from "../components/client/Car";
import { Spinner } from "react-bootstrap";

const ProfileCars = ({ rents }) => {
  const [loading, setLoading] = useState(true);
  const [userCars, setUserCars] = useState([]);

  useEffect(() => {
    const fetchStuff = () => {
      let cars = [];
      rents.forEach(async (rent) => {
        let car = {
          from: rent.startTime,
          to: rent.finishTime,
        };

        let carLive = await axios.get(
          "http://localhost:3004/cars/" + rent.carId
        );
        cars.push({ ...car, ...carLive });
      });
      return cars;
    };

    setLoading(true);
    const stuff = fetchStuff();
    setUserCars(stuff);
    setLoading(false);
  }, [rents]);

  if (loading) return <Spinner animation="grow" role="status" />;

  return userCars.map((car) => {
    return (
      <React.Fragment key={car.id}>
        <strong>From: {new Date(car.from).toString()}</strong>
        <br />
        <strong>To: {new Date(car.to).toString()}</strong>
        <Car car={car} key={car.id} hideButton={true} />
        <hr />
      </React.Fragment>
    );
  });
};

const Profile = () => {
  const userState = useUserState();
  const userDispatch = useUserDispatch();

  const user = userState.user || {};

  useEffect(() => {
    if (user.id) {
      userDispatch({ type: "get_rents", payload: { id: user.id } });
    }
  }, [userDispatch, user.id]);

  return (
    <>
      <NavBar />
      <Container>
        <h2>Personal information</h2>
        <div>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>E-mail address:</strong> {user.email}
          </p>
          <p>
            <strong>License category:</strong> {user.licenseCategory}
          </p>
          <p>
            <strong>Date of birth:</strong> {user.dateOfBirth}
          </p>
          <p>
            <strong>Date of registration:</strong> {user.createdAt}
          </p>
        </div>
        <h2>My rents</h2>
        <div>
          <ProfileCars rents={userState.rents} />
        </div>
      </Container>
    </>
  );
};

export default Profile;
