import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Navbar,
  Nav,
  FormControl,
  Button,
  Form,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import "./navbar.css";
import logo from "./SONIK2.png";
class NavbarItem extends Component {
  render() {
    return (
      <>
        <Row className="d-flex justify-content-center">
          {" "}
          <img className="logo" src={logo} />{" "}
        </Row>
        <Row className="mainNav d-flex justify-content-center">
          {" "}
          <Col className="navLink d-flex justify-content-center">Home</Col>
          <Col className="navLink d-flex justify-content-center">Hire</Col>
          <Col className="navLink d-flex justify-content-center">Apply</Col>{" "}
        </Row>
      </>
    );
  }
}
export default NavbarItem;
