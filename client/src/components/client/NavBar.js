import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "../client/Login";
import Registration from "./Registration";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mb-4">
      <Link to="/">
        <Navbar.Brand>Cégünk neve</Navbar.Brand>
      </Link>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Login />
          <Registration />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
