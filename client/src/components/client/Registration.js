import React, { useState, useRef } from "react";
import Col from "react-bootstrap/Col";
import { Modal, Button, Form, Nav } from "react-bootstrap";
import axios from "axios";

const Registration = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const lastName = useRef();
  const firstName = useRef();
  const email = useRef();
  const pwd = useRef();
  const licenseType = useRef();
  const licenseDate = useRef();

  const sendForm = () => {
    if (validateForm()) {
      var userName = lastName.current.value + " " + firstName.current.value;
      var userEmail = email.current.value;
      var userPassword = pwd.current.value;
      var userLicenseType = licenseType.current.value;
      var userLicenseDate = new Date(licenseDate.current.value);
      var user = {
        userName,
        userEmail,
        userPassword,
        userLicenseDate,
        userLicenseType,
      };
      axios
        .post("http://localhost:3004/auth/register", user)
        .then(function (response) {
          console.log(response);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
      console.log(user);
      handleClose();
    } else console.log("not valid data");
  };

  const validateForm = () => {
    if (
      validateName(firstName.current.value) &&
      validateName(lastName.current.value) &&
      validateEmail(email.current.value) &&
      validatePassword(pwd.current.value) &&
      validateLicenseType(licenseType.current.value) &&
      validateLicenseDate(licenseDate.current.value)
    )
      return true;
    else return false;
  };
  const validateName = (name) => {
    var template = /([A-Za-zÉÁŰÚŐÓÜÖÍéáűúőóüöí]{2,30}$)/g;
    if (template.test(name)) {
      return true;
    } else return false;
  };
  const validateEmail = (email) => {
    const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email));
  };
  const validatePassword = (password) => {
    if (password.length >= 5) return true;
    else return false;
  };
  const validateLicenseType = (type) => {
    if (type === "-") return false;
    else return true;
  };
  const validateLicenseDate = (date) => {
    var licenseDates = date.split("-");
    var nowDates = getCurrentDate().split("-");
    var licenseYear = licenseDates[0];
    var licenseMonth = licenseDates[1];
    var licenseDay = licenseDates[2];
    var nowYear = nowDates[0];
    var nowMonth = nowDates[1];
    var nowDay = nowDates[2];
    if (
      licenseYear <= nowYear &&
      licenseMonth <= nowMonth &&
      licenseDay <= nowDay
    )
      return true;
    else return false;
  };

  function getCurrentDate(separator = "-") {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    var now = `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
    return now;
  }

  return (
    <>
      <Nav.Item variant="primary">
        <Nav.Link onClick={handleShow}>Registration</Nav.Link>
      </Nav.Item>
      <Modal show={show} onHide={handleClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Regisztráció</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Név</Form.Label>
                <Form.Row>
                  <Col>
                    <Form.Control
                      placeholder="Vezetéknév"
                      name="lastName"
                      ref={lastName}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="Keresztnév"
                      name="firstName"
                      ref={firstName}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email cím</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email.."
                  name="email"
                  ref={email}
                />
                <Form.Text className="text-muted">
                  pl: pelda@email.com
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Jelszó</Form.Label>
                <Form.Control
                  name="pwd"
                  type="password"
                  placeholder="Password"
                  ref={pwd}
                />
                <Form.Text className="text-muted">
                  Legalább 5 karakter
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formLicenseType">
                <Form.Label>Jogosítvány típusa</Form.Label>
                <Form.Control as="select" name="licenseType" ref={licenseType}>
                  <option>-</option>
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
                <input type="date" name="licenseDate" ref={licenseDate}></input>
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={sendForm}>
              Regisztráció
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </>
  );
};
export default Registration;
