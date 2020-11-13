import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Button, Nav, NavDropdown } from "react-bootstrap";
import { Container, Spinner } from "react-bootstrap";
import Login from "../client/Login";

class navBar extends React.Component {
  render() {
    return (
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Cégünk neve</Navbar.Brand>
          <Nav pullRight></Nav>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Button href="/">Car</Button>{" "}
              <div>
                <Login />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}
export default navBar;
