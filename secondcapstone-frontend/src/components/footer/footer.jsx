import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Row,
  Col,
  Container,
} from "react-bootstrap";
import "./footer.css";
import logo from "./SONIK2.png";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

class Footer extends Component {
  render() {
    return (
      <>
        <Row className="footerContainer mt-5 pb-4">
          <Row>
            <Col className="topBorder1 d-flex justify-content-center">
              {" "}
              About Us
            </Col>
            <Col className="d-flex justify-content-center">
              <img src={logo} className="logoPic" />{" "}
            </Col>
            <Col className="topBorder d-flex justify-content-center">
              Contacts{" "}
            </Col>
          </Row>
          <Row className="footer d-flex justify-content-left ">
            <Col className="topBorder1 d-flex justify-content-center mt-0">
              {" "}
              Admin Page
            </Col> 
            <Col className = "iconCol d-flex justify-content-center">
               <AiFillFacebook className="icon" />{" "}
              <AiFillInstagram className="icon" /> <AiFillLinkedin className="icon" />
            </Col>
            <Col className="topBorder d-flex justify-content-center mt-0">
              Partners{" "}
            </Col>
          </Row>
        </Row>
      </>
    );
  }
}
export default Footer;
