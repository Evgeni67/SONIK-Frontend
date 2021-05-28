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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
          <Col className="navLink d-flex justify-content-center">
            <Link to="/home" className="navText">
              Home
            </Link>
          </Col>
          <Col className="navLink d-flex justify-content-center">
            {" "}
            <Link to="/hire" className="navText">
              Hire{" "}
            </Link>
          </Col>
          <Col className="navLink d-flex justify-content-center">
            <Link to="/apply" className="navText">
              Apply{" "}
            </Link>
          </Col>{" "}
        </Row>
      </>
    );
  }
}
export default NavbarItem;
