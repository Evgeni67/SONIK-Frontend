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
            <Row className="d-flex justify-content-center mt-5">
              <Col className="d-flex justify-content-center ">
                {" "}
                <img
                  src="https://thumbs.dreamstime.com/b/building-workers-engineers-cartoon-characters-flat-vector-illustration-construction-industry-industrial-people-different-204360185.jpg"
                  className="test"
                />  
              </Col>{" "}
            </Row>{" "}
          </div>
          <div className="secondQuestion1">
            <Row className="d-flex justify-content-center question">Sonik</Row>
            <Row className="d-flex justify-content-center question reduceMt">
              We connect people
            </Row>
            <Row className="d-flex justify-content-center connectionText ">
            Our team from Sonik delivers to the people the connection
                between the employe and the employer in the world of
                construction business.
            </Row>
            <Row className="borderBottom d-flex justify-content-center mt-3">
              <Col className="">
              <p className="secondOption  ">Hire a</p>
                <p className="secondOption  mt-1">Worker</p>
                <p className="secondOption  mt-1">In 24 hours!</p>
                <p className="secondOption2  mt-1">Hire</p>
              
              </Col>
              <Col>
                {" "}
                <p className="secondOption  ">Find a</p>
                <p className="secondOption  mt-1">Job</p>
                <p className="secondOption  mt-1">In 48 hours!</p>
                <p className="secondOption2  mt-1">Apply</p>
              </Col>{" "}
            </Row>{" "}
          </div>
          <div className="thirdQuestion1">
            <Row className="studentsLabel d-flex justify-content-center question">
              {" "}
              Why Sonik?
            </Row>
            <Row className=" mt-3">
              <Col className="textInfo2 ">
                {" "}
                <Row className="d-flex justify-content-center"> EMPLOYE </Row>
                <Row className="d-flex justify-content-left"> * Clean terms and conditions </Row>
                <Row> * Fixed duration of the contract </Row>
                <Row>
                  {" "}
                  * Personal dashboard after landing a job in a company{" "}
                </Row>
                <Row>
                  {" "}
                  * Most of our applicants find job in the first 48 hours after
                  after filling the form!{" "}
                </Row>
                <Row> * Easy apply </Row>
              </Col>
              <Col className="textInfo2 borderLeft">
                <Row className="d-flex justify-content-center"> EMPLOYERS </Row>
                <Row>
                  {" "}
                  * Every single worker listed in our website do has a
                  Construction Skills Certification Scheme as well with all
                  other required paperwork to work eligable in The Uk{" "}
                </Row>
                <Row>* Easy hire in just 2 steps</Row>
              </Col>
            </Row>{" "}
          </div>
          <div className="thirdQuestion1">
            <Row className="studentsLabel d-flex justify-content-center question">
              {" "}
              How to hire a worker?
            </Row>
            <Row className="d-flex justify-content-center mt-3">
              <Row className="d-flex justify-content-center textInfo2">
                {" "}
                Go to the hire page, select the type of worker that you are
                looking for, choose the right candidate and click on the "Hire"
                button, fill the form and we will contact you in the next 24
                hours for more details.
              </Row>
            </Row>{" "}
          </div>
          <div className="thirdQuestion1">
            <Row className="studentsLabel d-flex justify-content-center question">
              {" "}
              How to apply for a job?
            </Row>
            <Row className="d-flex justify-content-center mt-3">
              {" "}
              <Row className="d-flex justify-content-center textInfo2">
                {" "}
                Go to the apply page and fill in the form. In the next 24 hours
                we will contact you to confirm your details and Vuala, you are
                already on your way to be seen by hundreds of employers. Simple
                as that{" "}
              </Row>
            </Row>{" "}
          </div>
        </Container>
      </>
    );
  }
}
export default StartPage;
