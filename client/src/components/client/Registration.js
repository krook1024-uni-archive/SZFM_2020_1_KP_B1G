import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const Example = () => {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Név</Form.Label>
            <Form.Row>
              <Col>
                <Form.Control placeholder="Vezetéknév" />
              </Col>
              <Col>
                <Form.Control placeholder="Keresztnév" />
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email cím</Form.Label>
            <Form.Control type="email" placeholder="Enter email.." />
            <Form.Text className="text-muted">pl: pelda@email.com</Form.Text>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Jelszó</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formLicenseType">
            <Form.Label>Jogosítvány típusa</Form.Label>
            <Form.Control as="select">
              <option>AM</option>
              <option>A1</option>
              <option>A2</option>
              <option>A</option>
              <option>B1</option>
              <option>B</option>
              <option>B+E</option>
              <option>C1</option>
              <option>C1+E</option>
              <option>C</option>
              <option>C+E</option>
              <option>D1</option>
              <option>D1+E</option>
              <option>D</option>
              <option>D+E</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formLicenseDate">
            <Form.Label>Jogosítvány megszerzés dátuma</Form.Label>
            <br></br>
            <input type="date"></input>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};
export default Example;
