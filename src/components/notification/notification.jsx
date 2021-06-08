import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Navbar,
  Nav,
  FormControl,
  Button,
  Modal,
  Form,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import "./notification.css";
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
class Notification extends Component {
  state = {
    showButton: false,
  };
  deleteNotification = async () => {
    console.log(this.props.data._id)
    const url =  process.env.REACT_APP_URL +"/hireRequest/deleteRequest/" +  this.props.data._id;
    await fetch(url , {
      method: "DELETE",
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      window.location = window.location
  };
  handleButtons = () => {
    this.state.showButton
      ? this.setState({ showButton: false })
      : this.setState({ showButton: true });
  };
  render() {
    return (
      <>
        <Row
          className={
            this.state.showButton ? "reqestRowClicked mt-4" : "reqestRow mt-4"
          }
        >
          <Col
            className={this.state.showButton ? "reqestClicked" : "request"}
            onClick={() => this.handleButtons()}
          >
            1 new notification from {this.props.data.firstName}{" "}
          </Col>
        </Row>
        <Row
          className={
            this.state.showButton ? "buttonsRow mt-4" : "visually-hidden"
          }
        >
          {" "}
          <Col
            className="button"
            onClick={() => this.setState({ showInfo: true })}
          >
            Read{" "}
          </Col>
          <Col className="date d-flex justify-content-center">
            {this.props.data.createdAt.slice(0, 10)}
          </Col>
          <Col className="button" onClick = {() => this.deleteNotification()}>Delete </Col>
        </Row>
        <Modal className="modalLogin" show={this.state.showInfo}>
          <Modal.Body className="inputBody d-flex justify-content-center">
            <Container className="loginContainer">
              <Row className="question1 d-flex justify-content-center">
                {" "}
                First name
              </Row>
              <Row className="answerRow d-flex justify-content-center mb-5">
                <Row className="loginTextArea name">
                  {" "}
                  {this.props.data.firstName}
                </Row>
              </Row>
              <Row className="question1 d-flex justify-content-center">
                {" "}
                Second name
              </Row>
              <Row className="answerRow d-flex justify-content-center mb-5">
                <Row className="loginTextArea name">
                  {" "}
                  {this.props.data.secondName}
                </Row>
              </Row>
              <Row className="question1 d-flex justify-content-center">
                {" "}
                Phone
              </Row>
              <Row className="answerRow d-flex justify-content-center mb-5">
                <Row className="loginTextArea name">
                  {" "}
                  {this.props.data.phone}
                </Row>
              </Row>
              <Row className="question1 d-flex justify-content-center">
                {" "}
                Email
              </Row>
              <Row className="answerRow d-flex justify-content-center mb-5">
                <Row className="loginTextArea name">
                  {" "}
                  {this.props.data.email}
                </Row>
              </Row>
              <Row className="question1 d-flex justify-content-center">
                {" "}
                Who is it about?
              </Row>
              <Row className="answerRow d-flex justify-content-center mb-5">
                <Row className="loginTextArea name">
                  {" "}
                  {this.props.data.workerName}
                </Row>
              </Row>
              <Row className="question1 d-flex justify-content-center">
                {" "}
                Question
              </Row>
              <Row className=" d-flex justify-content-center mb-5">
                <Row className="question"> {this.props.data.question}</Row>
              </Row>

              <Row className=" d-flex justify-content-center mb-4">
                <Col className="d-flex justify-content-center">
                  <button
                    className="notificationBtn "
                    onClick={() => this.setState({ showInfo: false })}
                  >
                    Close{" "}
                  </button>
                </Col>
                <Col></Col>
                <Col className="d-flex justify-content-center">
                  <button
                    className="notificationBtn "
                    onClick={() => this.deleteNotification()}
                  >
                    Delete{" "}
                  </button>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Notification);
