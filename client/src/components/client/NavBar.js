import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "../client/Login";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mb-4">
      <Link to="/">
        <Navbar.Brand>Cégünk neve</Navbar.Brand>
      </Link>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Login />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
