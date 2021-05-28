import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Container, Modal, Button } from "react-bootstrap";
import "./footer.css";
import logo from "./SONIK2.png";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

class Footer extends Component {
  state = {
    show: true,
  };
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
            <Col className="iconCol d-flex justify-content-center">
              <AiFillFacebook className="icon" />{" "}
              <AiFillInstagram className="icon" />{" "}
              <AiFillLinkedin className="icon" />
            </Col>
            <Col className="topBorder d-flex justify-content-center mt-0">
              Partners{" "}
            </Col>
          </Row>
        </Row>
        <Modal className = "modalLogin"show={this.state.show}>
          <Modal.Body className="inputBody d-flex justify-content-center">
            <Container className="loginContainer">
            <Row className="logoRow d-flex justify-content-center">
              <img src={logo} className="modalLogo" />{" "}
            </Row>
              {" "}
              <Row className="question1 d-flex justify-content-center">
            {" "}
            Name
          </Row>
          <Row className="answerRow d-flex justify-content-center">
            <textarea
              className="loginTextArea name"
              onChange={(e) => this.setState({ name: e.currentTarget.value })}
            >
              {" "}
            </textarea>
          </Row> <Row className="question1 d-flex justify-content-center">
            {" "}
            Password
          </Row>
          <Row className="answerRow d-flex justify-content-center mb-5">
            <textarea
              className="loginTextArea name"
              onChange={(e) => this.setState({ name: e.currentTarget.value })}
            >
              {" "}
            </textarea>
          </Row>
          <Row className="answerRow d-flex justify-content-center mb-4">
            <button className="applyBtn" onClick={() => this.checker()}>
              Login{" "}
            </button>
          </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default Footer;
