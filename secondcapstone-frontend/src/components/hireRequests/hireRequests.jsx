import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Navbar,
  Nav,
  FormControl,
  Button,
  Form,
  Row,
  Modal,
  Col,
  Container,
} from "react-bootstrap";
import Notification from "../notification/notification";
import "./hireRequests.css";
import logo from "./SONIK2.png";
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
class hireRequests extends Component {
  state = {
    hireRequests: ["ab", "vd", "cd"],
    showButton: false,
    showInfo: false,
    loaded: false,
  };
  componentDidMount = async () => {
    const url = "http://localhost:9999/hireRequest/getRequests";

    await fetch(url)
      .then((response) => response.json())
      .then((data) => this.props.setWorkers(data));
    console.log(this.state.hireRequests);
   
    const that=this
    setTimeout(function(){
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
              You have {this.state.hireRequests.length} new requests
            </Row>
            {this.state.hireRequests.map((request) => (
              <>
                {" "}
                <Notification data={request} />
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
export default connect(mapStateToProps, mapDispatchToProps)(hireRequests);
