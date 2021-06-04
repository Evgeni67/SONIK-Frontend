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
             
              <Col>
                {" "}
                <img src = "https://static.timesofisrael.com/www/uploads/2017/12/managers.jpg" className  ="test" />
              </Col>{" "}
            </Row>{" "}
          </div>
          <div className="secondQuestion1">
            <Row className="d-flex justify-content-center question">
              {" "}
              Accusantium unde omnisa{" "}
            </Row>
            <Row className="borderBottom d-flex justify-content-center mt-3">
              <Col className="textInfo">
                {" "}
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, sit voluptatem omnis

              </Col>
              <Col>
                {" "}
                <p className="secondOption  ">voluptatem</p>
                <p className="secondOption  mt-2">Iste</p>
                <p className="secondOption  mt-2">Sedut</p>
              </Col>{" "}
            </Row>{" "}
          </div>
          <div className="thirdQuestion1">
            <Row className="studentsLabel d-flex justify-content-center question">
              {" "}
              Voluptate
            </Row>
            <Row className="d-flex justify-content-center mt-3">
            <Col className="textInfo2">
                {" "}
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, sit voluptatem omnis

              </Col>
              <Col className="textInfo2 borderLeft">
                {" "}
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, sit voluptatem omnis

              </Col>}
            </Row>{" "}
          </div>
        </Container>
      </>
    );
  }
}
export default StartPage;
