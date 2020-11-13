import React from "react";
import { Navbar, Button, Nav, } from "react-bootstrap";
import Login from "../client/Login";

class navBar extends React.Component {
  render() {
    return (
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
    );
  }
}
export default navBar;
