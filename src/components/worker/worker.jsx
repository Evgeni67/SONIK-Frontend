import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Container } from "react-bootstrap";
import "./worker.css";
import { connect } from "react-redux";
import loader from "./loader2.gif";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  setWorkers: (workers) =>
    dispatch({
      type: "SET_NEW_WORKERS",
      payload: workers,
    }),
    changeCurrentWorker: (id1) =>
    dispatch({
      type: "CHANGE_CURRENT_WORKER",
      payload: id1,
    }),
   
});
class Worker extends Component {
  state = {
    editMode: false,
    name: this.props.worker.name,
    profileImg: this.props.worker.profileImg,
    drivingLicense: this.props.worker.drivingLicense,
    status: this.props.worker.status,
    location: this.props.worker.location,
    bio: this.props.worker.bio,
    cscsLevel: this.props.worker.cscsLevel,
  };
  handleEditMode = () => {
    if (this.state.editMode) {
      this.setState({ editMode: false });
    } else {
      this.setState({ editMode: true });
    }
  };
  editWorker = async (id) => {
    const url =  process.env.REACT_APP_URL +"/workers/editWorker/";
    await fetch(url + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
      },
      body: JSON.stringify({
        name: this.state.name,
        profileImg: this.state.profileImg,
        drivingLicense: this.state.drivingLicense,
        status: this.state.status,
        location: this.state.location,
        bio: this.state.bio,
        cscsLevel: this.state.cscsLevel,
      }),
    })
      .then((response) => response.json())
      .then((data) => this.props.setWorkers(data));
    this.setState({ editMode: false });
  };
  deleteWorker = async (id) => {
    console.log(id);
    const url =  process.env.REACT_APP_URL +"/workers/removeWorker/" + id;
    await fetch(url , {
      method: "DELETE",
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem("accessToken")}`
      },
    })
      .then((response) => response.json())
      .then((data) => this.props.setWorkers(data));
  };
  render() {
    return (
      <>
        {" "}
        <Container className="profileContainer d-flex flex-row-reverse  text-light mb-5 mt-5">
          <Row className="profilePicRow d-flex justify-content-center mt-3 ">
            <Row className="adminBtnsRow mb-3">
              <Col className="d-flex justify-content-center">
                <div
                  className={
                    this.props.admin.admin ? "adminbtn" : "visually-hidden"
                  }
                  onClick={() => this.handleEditMode()}
                >
                  Edit{" "}
                </div>
              </Col>
              <Col></Col>
              <Col className="d-flex justify-content-center">
                <div
                  className={
                    this.props.admin.admin ? "adminbtn" : "visually-hidden"
                  }
                >
                  Report{" "}
                </div>
              </Col>
              <Col></Col>
              <Col className="d-flex justify-content-center">
                {" "}
                <div
                  className={
                    this.props.admin.admin ? "adminbtn" : "visually-hidden"
                  }
                  onClick={() => this.deleteWorker(this.props.worker._id)}
                >
                  Delete{" "}
                </div>
              </Col>{" "}
            </Row>

            <img
              className="profilePic"
              src={this.props.worker.profileImg}
            ></img>
            <br />
            <Row className="employeName d-flex justify-content-center">
              {this.state.editMode ? (
                <textarea
                  className="editArea"
                  defaultValue={this.props.worker.name}
                  onChange={(e) =>
                    this.setState({ name: e.currentTarget.value })
                  }
                />
              ) : (
                this.props.worker.name
              )}
            </Row>
            <Row className="employeBio d-flex justify-content-center">
              {this.state.editMode ? (
                <textarea
                  className="editArea"
                  defaultValue={this.props.worker.bio}
                  onChange={(e) =>
                    this.setState({ bio: e.currentTarget.value })
                  }
                />
              ) : (
                this.props.worker.bio
              )}
            </Row>
            <Row className="employeDetails d-flex flex-postion-left">
              {" "}
              Location :{" "}
              {this.state.editMode ? (
                <textarea
                  className="editArea"
                  defaultValue={this.props.worker.location}
                  onChange={(e) =>
                    this.setState({ location: e.currentTarget.value })
                  }
                />
              ) : (
                this.props.worker.location
              )}
            </Row>
            <Row className="employeDetails d-flex flex-postion-left">
              {" "}
              Drivers License:{" "}
              {this.state.editMode ? (
                <textarea
                  className="editArea"
                  defaultValue={this.props.worker.drivingLicense}
                  onChange={(e) =>
                    this.setState({ drivingLicense: e.currentTarget.value })
                  }
                />
              ) : (
                this.props.worker.drivingLicense
              )}
            </Row>
            <Row className="employeDetails d-flex flex-postion-left">
              {" "}
              Insurance: Yes
            </Row>
            <Row className="employeDetails d-flex flex-postion-left">
              {" "}
              Status:
              {this.state.editMode ? (
                <textarea
                  className="editAreaStatus editArea"
                  defaultValue={this.props.worker.status}
                  onChange={(e) =>
                    this.setState({ status: e.currentTarget.value })
                  }
                />
              ) : (
                this.props.worker.status
              )}
            </Row>
            <Row className="employeDetails d-flex flex-postion-left"> </Row>
            <Row className="employeDetails2 d-flex flex-row-reverse ">
              {this.state.editMode ? (
                <textarea
                  className="editAreaCSCS editArea"
                  defaultValue={this.props.worker.cscsLevel}
                  onChange={(e) =>
                    this.setState({ status: e.currentTarget.value })
                  }
                />
              ) : (
                <img
                  className="cardType"
                  src="https://prikachi.net/images/bsUWp.jpg"
                />
              )}
              CSCS Level:
            </Row>
            <Row className="d-flex justify-content-center mb-4 mt-4">
              {this.state.editMode ? (
                <button
                  className="hireBtn"
                  onClick={() => this.editWorker(this.props.worker._id)}
                >
                  Edit
                </button>
              ) : (
             
                <button className="hireBtn" onClick = {() => this.props.changeCurrentWorker(this.props.worker._id)}>   <Link to = "/hireForm" className="hireBtn2">Hire  </Link></button>
              
              )}
            </Row>
          </Row>
        </Container>{" "}
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Worker);
