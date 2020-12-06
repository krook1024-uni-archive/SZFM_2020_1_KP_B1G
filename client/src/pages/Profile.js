import React from "react";
import NavBar from "../components/client/NavBar";
import { Container } from "react-bootstrap";
import { useUserState } from "../context/user-context";

const Profile = () => {
  const userState = useUserState();
  const user = userState.user || {};
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
        <div>{/* TODO */}</div>
      </Container>
    </>
  );
};

export default Profile;
