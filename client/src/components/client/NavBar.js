import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Button, Nav, NavDropdown } from 'react-bootstrap';
import { Container, Spinner } from "react-bootstrap";
import Login from "../client/Login";



class navBar extends React.Component{
  render() {
    return (

      <Container>
      <Navbar bg="light" variant="light">
         <Navbar.Brand href="#home">Cégünk neve</Navbar.Brand>
         <Button href="/">Car</Button>{' '}
         <Nav pullRight>
         <div>
          <Login />
         </div>
         </Nav>
       </Navbar>
      </Container>
);
}
}
export default navBar;
