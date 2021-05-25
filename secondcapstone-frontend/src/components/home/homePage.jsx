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
import "./homePage.css";

class Home extends Component {
  render() {
    return (
      <>
      <Row className="hireText d-flex justify-content-center ">
             Hire from the best construction workers in the world
            </Row>
            <Row>
              <Col xs = {12} s={12} md = {6} >
        <Container className="profileContainer d-flex flex-row-reverse  text-light mb-5 mt-5">
          <Row className="profilePicRow d-flex justify-content-center mt-3">
            <img
              className="profilePic"
              src="https://prikachi.net/images/bsbUq.jpg"
            ></img>{" "}
            <br />
            <Row className="employeName d-flex justify-content-center">
              Evgeni Gyurov{" "}
            </Row>
            <Row className="employeBio d-flex justify-content-center">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
           
            </Row>
            <Row className="employeDetails d-flex flex-postion-left">
              {" "}
              Location: UK London UB48PB
            </Row>
            <Row className="employeDetails d-flex flex-postion-left">
              {" "}
              Drivers License: Yes
            </Row>
            <Row className="employeDetails d-flex flex-postion-left">
              {" "}
              Insurance: Yes
            </Row>
            <Row className="employeDetails d-flex flex-postion-left">
              {" "}
              Status: Available
            </Row>
            <Row className="employeDetails d-flex flex-postion-left"> </Row>
            <Row className="employeDetails2 d-flex flex-row-reverse ">
              <img
                className="cardType"
                src="https://prikachi.net/images/bsUWp.jpg"
              />
              CSCS Level:
            </Row>
            <Row className="d-flex justify-content-center mb-4 mt-4">
               <button className="hireBtn">Hire</button> 
            </Row>
           
          </Row>
        </Container>
        </Col>
       
        </Row>
      </>
    );
  }
}
export default Home;
