import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./startPage.css";
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
import logo from "./figure2.png";
class StartPage extends Component {
  render() {
    return (
      <>
        <Container className="startPageCotainer">
          <div className="firstQuestion1">
            <Row className="d-flex justify-content-center question">
              {" "}
              What do you want to do?
            </Row>
            <Row className="d-flex justify-content-center mt-1">
              <Col>
                {" "}
                <p className="firstOption">Hire a worker </p>
              </Col>
              <Col>
                {" "}
                <p className="secondOption">Apply for a job </p>
              </Col>{" "}
            </Row>{" "}
          </div>
          <div className="secondQuestion1">
            <Row className="d-flex justify-content-center question">
              {" "}
              Do they need a CSCS card?{" "}
            </Row>
            <Row className="d-flex justify-content-center mt-3">
              <Col className="firstCol">
                {" "}
                <p className="firstOption firstOption1">Yes </p>
              </Col>
              <Col>
                {" "}
                <p className="secondOption secondOption1">No</p>
              </Col>{" "}
            </Row>{" "}
          </div>
          <div className="thirdQuestion1">
            <Row className="d-flex justify-content-center question">
              {" "}
              Do they need a driving licence?
            </Row>
            <Row className="d-flex justify-content-center mt-3">
              <Col>
                {" "}
                <p className="firstOption">Yes </p>
              </Col>
              <Col>
                {" "}
                <p className="secondOption">No</p>
              </Col>{" "}
            </Row>{" "}
          </div>
        </Container>
      </>
    );
  }
}
export default StartPage;
