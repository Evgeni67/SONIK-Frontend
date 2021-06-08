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
    const url =  process.env.REACT_APP_URL +"/apply/getApplies";
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
      }
     
    };
    await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ applyRequests: data }));
    console.log(this.state.applyRequests);

    const that = this;
    setTimeout(function () {
      that.setState({ loaded: true });
    }, 3000);
  };
  deleteApply = async (id) => {
    this.setState({ loaded: false });
    const url =  process.env.REACT_APP_URL +"/apply/declineApply/" + id;
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
      }
     
    };
    await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ applyRequests: data }));
    console.log(this.state.applyRequests);

    const that = this;
    setTimeout(function () {
      that.setState({ loaded: true });
    }, 1400);
  };
 
  addWorker = async (request) => {
    console.log(request)
    const url =  process.env.REACT_APP_URL +"/workers/addWorker";
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({
        name: request.name,
        profileImg: request.pic,
        drivingLicense: request.drivingLicense,
        status: request.status,
        location: request.location,
        bio: request.bio,
        cscsLevel: request.cscsCard,
      }),
    })
      .then((response) => response.json())
      .then((data) => this.props.setWorkers(data));
  };
 
  
  render() {
    return (
      <>
        {this.state.loaded ? (
          <Container className="notificationContaiener">
            <Row className="d-flex justify-content-center totalApplyRequests">
              {" "}
              You have {this.state.applyRequests.length} new apply requests
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
                   Phone: 
                      {request.phoneNumber}
                    </Row>
                    <Row className="employeDetails d-flex flex-postion-left">
                      {" "}
                   Email: 
                      {request.email}
                    </Row>
                    <Row className="employeDetails d-flex flex-postion-left">
                      {" "}
                    </Row>
                    <Row className="employeDetails d-flex flex-row-reverse mt-3">
                      <img
                        className="cardType"
                        src="https://prikachi.net/images/bsUWp.jpg"
                      />
                      CSCS Level: {request.cscsCard}
                    </Row>
                    <Row className="d-flex justify-content-center mb-4 mt-4">
                      <button
                        className="hireBtn"
                        onClick = {() => this.addWorker(request)}
                      >
                        {" "}
                          Confrim{" "}
                      </button>
                    </Row>
                    <Row className="d-flex justify-content-center mb-4 mt-1">
                      <button
                        className="hireBtn"
                        onClick = {() => this.deleteApply(request._id)}
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
