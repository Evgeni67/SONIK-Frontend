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
import { connect } from "react-redux";
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  adminIn: () =>
    dispatch({
      type: "ADMIN_TRUE",
    }),
  adminOut: () =>
    dispatch({
      type: "ADMIN_FALSE",
    }),
});
class NavbarItem extends Component {
 
  render() {
    return (
      <>
        {this.props.admin.admin ? (
          <Row className="d-flex justify-content-center ml-1 mr-1">
            {" "}
            <Col className="adminBtn adminBtn1">
              <Link to="hireRequests" className="navTextAdmin ">
                Hiring Requests
              </Link>
            </Col>
            <Col className="d-flex justify-content-center">
              {" "}
              <img className="logo2" src={logo} />{" "}
            </Col>
            <Col className="adminBtn adminBtn1">
              <Link to="hireRequests" className="navTextAdmin">
                Apply Request
              </Link>
            </Col>
          </Row>
        ) : (
          <Row className="d-flex justify-content-center">
            {" "}
            <img className="logo" src={logo} />{" "}
          </Row>
        )}

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
export default connect(mapStateToProps, mapDispatchToProps)(NavbarItem);
