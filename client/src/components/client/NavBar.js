import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "../client/Login";
import {NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mb-4">
      <Link to="/">
        <Navbar.Brand>Cégünk neve</Navbar.Brand>
      </Link>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item variant="primary">
            <Nav.Link as={NavLink} exact to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Login />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
