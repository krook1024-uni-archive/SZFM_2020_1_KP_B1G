import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Nav } from "react-bootstrap";
import { useUserState, useUserDispatch } from "../../context/user-context";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  const [state, setState] = useState({ email: "", password: "" });

  const userState = useUserState();
  const userDispatch = useUserDispatch();

  const handleChange = (e) => {
    let newState = { ...state, [e.target.name]: e.target.value };
    setState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userDispatch({ type: "auth_user", payload: state });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (userState.has_auth) {
      handleClose();
    }
  }, [userState]);

  return (
    <>
      {!userState.has_auth && (
        <Nav.Item variant="primary">
          <Nav.Link onClick={handleShow}>Login</Nav.Link>
        </Nav.Item>
      )}
      {userState.has_auth && (
        <Nav.Item variant="primary">
          <Nav.Link as={NavLink} to="/profile">
            Profile
          </Nav.Link>
        </Nav.Item>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={state.password}
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Login
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default Login;
