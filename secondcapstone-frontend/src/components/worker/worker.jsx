import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Container } from "react-bootstrap";
import "./worker.css";
import { connect } from "react-redux";
import loader from "./loader2.gif";
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
    setWorkers: (workers) =>
    dispatch({
      type: "SET_NEW_WORKERS",
      payload: workers,
    }),
});
class Worker extends Component {
  state = {};
  deleteWorker = async (id) => {
      console.log(id)
      const url = "http://localhost:9999/workers/removeWorker/";
      await fetch(url + id, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then((data) => this.props.setWorkers(data));
  }
  render() {
    return (
      <>
        {" "}
        <Container className="profileContainer d-flex flex-row-reverse  text-light mb-5 mt-5">
          <Row className="profilePicRow d-flex justify-content-center mt-3 ">
            <Row className="adminBtnsRow mb-3">
              <Col className = "d-flex justify-content-center"><div
              className={
                this.props.admin.admin ? "adminbtn" : "visually-hidden"
              }
            >
              Edit{" "}
            </div></Col>
              <Col></Col> 
              <Col className = "d-flex justify-content-center" ><div
              className={
                this.props.admin.admin ? "adminbtn" : "visually-hidden"
              }
            >
              Report{" "}
            </div></Col> 
              <Col></Col> 
              <Col className = "d-flex justify-content-center"> <div
              className={
                this.props.admin.admin ? "adminbtn" : "visually-hidden"
              }
              onClick = { ()=> this.deleteWorker(this.props.worker._id)}
            >
              Delete{" "}
            </div></Col>{" "}
            </Row>
           
            <img
              className="profilePic"
              src={this.props.worker.profileImg}
            ></img>
            <br />
            <Row className="employeName d-flex justify-content-center">
              {this.props.worker.name}
            </Row>
            <Row className="employeBio d-flex justify-content-center">
              {this.props.worker.bio}
            </Row>
            <Row className="employeDetails d-flex flex-postion-left">
              {" "}
              {this.props.worker.location}
            </Row>
            <Row className="employeDetails d-flex flex-postion-left">
              {" "}
              Drivers License:{this.props.worker.drivingLicense}
            </Row>
            <Row className="employeDetails d-flex flex-postion-left">
              {" "}
              Insurance: Yes
            </Row>
            <Row className="employeDetails d-flex flex-postion-left">
              {" "}
              Status: {this.props.worker.status}
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
        </Container>{" "}
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Worker);
