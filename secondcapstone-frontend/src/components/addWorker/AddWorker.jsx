import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Container } from "react-bootstrap";
import "./addWorker.css";
import { connect } from "react-redux";
import loader from "./loader2.gif";
import { Link } from "react-router-dom";
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  setWorkers: (workers) =>
    dispatch({
      type: "SET_NEW_WORKERS",
      payload: workers,
    }),
});
class AddWorker extends Component {
  state = {
    name: "123",
    profileImg: "123",
    drivingLicense: "123",
    status: "123",
    location: "123",
    bio: "123",
    cscsLevel: "123",
  };
  postImage = async (postId) => {
    try {
      let post = new FormData();
       post.append("postPic", this.state.profileImg);
      if (post) {
        let response = await fetch(
           " http://localhost:9999/workers/addPictureToWorker/" + postId,
          {
            method: "POST",
            body: post,
            headers: new Headers({
              Accept: "application/json",
            }),
          }
        );
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  addWorker = async () => {
    const url = "http://localhost:9999/workers/addWorker";
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
      .then((id) => this.postImage(id));
  };

  render() {
    return (
      <>
        {" "}
        <Row className="applyFormText d-flex justify-content-center  mt-4">
          {" "}
          Add a worker form
        </Row>
        <Container className="applyContainer">
          <Row className="question1 d-flex justify-content-center"> Name</Row>
          <Row className="answerRow d-flex justify-content-center">
            <input
              className="answerinput name"
              onChange={(e) => this.setState({ name: e.currentTarget.value })}
            />
          </Row>
          <Row className="question1 d-flex justify-content-center"> Bio</Row>
          <Row className="answerRow d-flex justify-content-center">
            <input
              className="answerinput workInTheUk"
              onChange={(e) =>
                this.setState({ bio: e.currentTarget.value })
              }
            />
          </Row>
          <Row className="question1 d-flex justify-content-center"> Status</Row>
          <Row className="answerRow d-flex justify-content-center">
            <input
              className="answerinput "
              onChange={(e) =>
                this.setState({ status: e.currentTarget.value })
              }
            />
          </Row>
          <Row className="question1 d-flex justify-content-center">
            {" "}
            CSCS Level
          </Row>
          <Row className="answerRow d-flex justify-content-center">
            <input
              placeholder="from 1 to 5"
              className="answerinput cscsCard"
              onChange={(e) =>
                this.setState({ cscsLevel: e.currentTarget.value })
              }
            />
          </Row>
          <Row className="question1 d-flex justify-content-center">
            {" "}
            Location
          </Row>
          <Row className="answerRow d-flex justify-content-center">
            <input
              className="answerinput location"
              onChange={(e) =>
                this.setState({ location: e.currentTarget.value })
              }
            />
          </Row>
          <Row className="question1 d-flex justify-content-center">
            {" "}
            Driving license
          </Row>
          <Row className="answerRow d-flex justify-content-center">
            <input
              className="answerinput drivingLicense"
              onChange={(e) =>
                this.setState({ drivingLicense: e.currentTarget.value })
              }
            />
          </Row>

          <Row className="question1 poctureOfYou d-flex justify-content-center">
            {" "}
            Picture
          </Row>
          <label class="form-label" for="postImage">
            <svg
              stroke="currentColor"
              fill="rgba(0, 0, 0, 0.7)"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              className="pic"
            >
              {!this.state.imageUploaded ? (
                <Row className=" picOfYou d-flex justify-content-center ">
                  {" "}
                  Picture
                </Row>
              ) : null}
            </svg>
          </label>
          {this.state.imageUploaded ? (
            <Row className="picPreviewRow d-flex justify-content-center mt-2">
              <img
                className="picPreview"
                src={URL.createObjectURL(
                  document.querySelector("#postImage").files[0]
                )}
              />{" "}
            </Row>
          ) : null}
          {!this.state.imageUploaded ? (
            <Row className="d-flex justify-content-center">
              <Col className="d-flex justify-content-center">
                <input
                  accept="image/*"
                  type="file"
                  id="postImage"
                  onChange={(e) =>
                    this.setState({
                        profileImg: e.target.files[0],
                    })
                  }
                  class=" form-control-file"
                  className="inputFile"
                />
              </Col>
            </Row>
          ) : null}

          <Row className="applyRow d-flex justify-content-center mb-5">
          <Link to="/hire" className="linkToHire">

            <button className="applyBtn" onClick={() => this.addWorker()}>
               Add a worker
      
            </button>
            </Link>
          </Row>
        </Container>
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddWorker);
