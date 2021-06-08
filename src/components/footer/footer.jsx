import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Container, Modal, Button } from "react-bootstrap";
import "./footer.css";
import logo from "./SONIK2.png";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { connect } from "react-redux";
import { axios } from "axios";
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
class Footer extends Component {
  state = {
    show: false,
    name: "",
    password: "",
  };
  saveTokensLocally = (data) => {
     localStorage.setItem("accessToken", data.accessToken);
     localStorage.setItem("refreshToken", data.refreshToken);
     this.props.adminIn()
     this.setState({show:false})
  } 
  login = async () => {
    const url =  process.env.REACT_APP_URL +"/admin/login";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: this.state.name,
        password: this.state.password,
      }),
    };
    const res = await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => this.saveTokensLocally(data));
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
            <Col
              className="topBorder1 d-flex justify-content-center mt-0"
              onClick={() => this.setState({ show: true })}
            >
              {" "}
              Admin
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
        <Modal className="modalLogin" show={this.state.show}>
          <Modal.Body className="inputBody d-flex justify-content-center">
            <Container className="loginContainer">
              <Row className="logoRow d-flex justify-content-center">
                <img src={logo} className="modalLogo" />{" "}
              </Row>{" "}
              <Row className="question1 d-flex justify-content-center">
                {" "}
                Name
              </Row>
              <Row className="answerRow d-flex justify-content-center">
                <input
                  className="loginTextArea name"
                  onChange={(e) =>
                    this.setState({ name: e.currentTarget.value })
                  }
                />
              </Row>{" "}
              <Row className="question1 d-flex justify-content-center">
                {" "}
                Password
              </Row>
              <Row className="answerRow d-flex justify-content-center mb-5">
                <input
                  className="loginTextArea name"
                  type="password"
                  onChange={(e) =>
                    this.setState({ password: e.currentTarget.value })
                  }
                />
              </Row>
              <Row className="answerRow d-flex justify-content-center mb-4">
                <button className="applyBtn" onClick={() => this.login()}>
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
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
