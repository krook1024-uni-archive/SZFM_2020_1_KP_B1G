import React from "react";
import { Navbar, Button, Nav, Container } from "react-bootstrap";
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
