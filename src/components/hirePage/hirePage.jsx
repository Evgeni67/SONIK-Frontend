import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./homePage.css";
import { connect } from "react-redux";
import loader from "./loader2.gif";
import Worker from "../worker/worker";
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
class Home extends Component {
  state = {
    workers: [],
    loaded: false,
    editMode: true,
    showAddContainer: false,
  };

  componentDidMount = async () => {
    console.log(process.env.REACT_APP_URL)
    const url =  process.env.REACT_APP_URL +"/workers/getWorkers";
    await fetch(url)
      .then((response) => response.json())
      .then((data) => this.props.setWorkers(data));
    const that = this;
    setTimeout(function () {
      that.setState({ loaded: true });
    }, 2000);
  };

  
  render() {
    return (
      <>
        <Row className="hireText d-flex justify-content-center ">
          Hire from the best construction workers in the world
        </Row>
        {this.state.loaded ? (
          <>
            <Row>
              {this.props.workers.workers.reverse().map((workerToPass) => (
                <Col xs={12} s={12} md={6} lg={4}>
                  <Worker
                    worker={workerToPass}
                    adminMode={this.props.admin.amin}
                  />
                </Col>
              ))}
              {this.props.admin.admin ? (
                <>
                  {" "}
                  <Row className="addEmployeRow d-flex justify-content-center mt-3">
                    <Col> </Col>

                    <Col className="addWorkerBtn d-flex justify-content-center">
                      {" "}
                      <Link
                        to="/addWorker"
                        className="addWorkerBtn"
                        onClick={() =>
                          this.setState({ showAddContainer: true })
                        }
                      >
                        Add a new employe
                      </Link>
                     
                    </Col>
                    <Col> </Col>
                  </Row>
                </>
              ) : null}
            </Row>{" "}
          </>
        ) : (
          <>
            <Row className="loadingRow d-flex justify-content-center">
              <img src={loader} className="loader " />
            </Row>
            <Row className="connectionMessage d-flex justify-content-center ">
              Connecting to the server...
            </Row>{" "}
          </>
        )}
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
