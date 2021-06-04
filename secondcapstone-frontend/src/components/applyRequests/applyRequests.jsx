import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Row,
  Col,
  Container,
} from "react-bootstrap";
import "./applyRequests.css";
import loader from "./loader2.gif";
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
  setWorkers: (workers) =>
    dispatch({
      type: "SET_NEW_WORKERS",
      payload: workers,
    }),
});
class ApplyRequests extends Component {
  state = {
    applyRequests: ["ab", "vd", "cd"],
    showButton: false,
    showInfo: false,
    loaded: false,
  };
  componentDidMount = async () => {
    const url = "http://localhost:9999/apply/getApplies";

    await fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ applyRequests: data }));
    console.log(this.state.applyRequests);

    const that = this;
    setTimeout(function () {
      that.setState({ loaded: true });
    }, 3000);
  };
  render() {
    return (
      <>
        {this.state.loaded ? (
          <Container className="notificationContaiener">
            <Row className="d-flex justify-content-center totalRequests">
              {" "}
              You have {this.state.applyRequests.length} new requests
            </Row>
            {this.state.applyRequests.reverse().map((request) => (
              <>
                {" "}
                <Container className="profileContainer d-flex flex-row-reverse  text-light mb-5 mt-5">
                  <Row className="profilePicRow d-flex justify-content-center mt-3 ">
                    <img
                      className="profilePic"
                      src={request.pic}
                    ></img>
                    <br />
                    <Row className="employeName d-flex justify-content-center">
                      {request.name}
                    </Row>
                    <Row className="employeBio d-flex justify-content-center">
                      {request.bio}
                    </Row>
                    <Row className="employeDetails d-flex flex-postion-left">
                      {" "}
                      Location : {request.location}
                    </Row>
                    <Row className="employeDetails d-flex flex-postion-left">
                      {" "}
                      Drivers License: {request.drivingLicense}
                    </Row>
                    <Row className="employeDetails d-flex flex-postion-left">
                      {" "}
                      Insurance: Yes
                    </Row>
                    <Row className="employeDetails d-flex flex-postion-left">
                      {" "}
                      Status:
                      {request.status}
                    </Row>
                    <Row className="employeDetails d-flex flex-postion-left">
                      {" "}
                    Eligable to work in the uk:
                      {request.workInTheUk}
                    </Row>
                    <Row className="employeDetails d-flex flex-postion-left">
                      {" "}
                    </Row>
                    <Row className="employeDetails2 d-flex flex-row-reverse ">
                      <img
                        className="cardType"
                        src="https://prikachi.net/images/bsUWp.jpg"
                      />
                      CSCS Level: {request.cscsCard}
                    </Row>
                    <Row className="d-flex justify-content-center mb-4 mt-4">
                      <button
                        className="hireBtn"
                      >
                        {" "}
                          Confrim{" "}
                      </button>
                    </Row>
                    <Row className="d-flex justify-content-center mb-4 mt-4">
                      <button
                        className="hireBtn"
                      >
                        {" "}
                          Delete{" "}
                      </button>
                    </Row>
                  </Row>
                </Container>{" "}
              </>
            ))}
          </Container>
        ) : (
          <>
            <Row className="loadingRow d-flex justify-content-center">
              <img src={loader} className="loader " />
            </Row>
            <Row className="connectionMessage d-flex justify-content-center">
              Connecting to the server...
            </Row>{" "}
          </>
        )}
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ApplyRequests);
