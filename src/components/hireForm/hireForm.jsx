import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Navbar,
  Nav,
  FormControl,
  Button,
  Form,
  Row,
  Col,
  Container,
  Modal,
} from "react-bootstrap";
import "./hireForm.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class HireForm extends Component {
  state = {
    submitApply: true,
    applyId: "",
    firstName: "",
    secondName: "",
    phone: "",
    email: "",
    question: "",
    pic: "1",
  };
  checker = () => {
    if (this.state.firstName === "") {
      const email = document.querySelector(".firstName");
      email.classList.add("redUnderline");
      this.setState({ submitApply: false });
    }
    if (this.state.secondName === "") {
      const drivingLicense = document.querySelector(".secondName");
      drivingLicense.classList.add("redUnderline");
      this.setState({ submitApply: false });
    }
    if (this.state.phone === "") {
      const workInTheUk = document.querySelector(".phone");
      workInTheUk.classList.add("redUnderline");
      this.setState({ submitApply: false });
    }
    if (this.state.email === "") {
      const cscsCard = document.querySelector(".email");
      cscsCard.classList.add("redUnderline");
      this.setState({ submitApply: false });
    }
    if (this.state.question === "") {
      const location = document.querySelector(".question");
      location.classList.add("redUnderline");
      this.setState({ submitApply: false });
    }

    if (this.state.submitApply) {
      this.addRequest();
    }
  };
  postImage = async (postId) => {
    try {
      console.log(this.state.applyId);
      let post = new FormData();
      post.append("postPic", this.state.image);
      if (post) {
        let response = await fetch(
          process.env.REACT_APP_URL +"/apply/addPictureToApply/" + postId,
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
  addRequest = async () => {
    this.setState({ imageUploaded: false });
    const applyData = {
      firstName: this.state.firstName,
      secondName: this.state.secondName,
      phone: this.state.phone,
      email: this.state.email,
      question: this.state.question,
      workerId: this.state.workerId,
    };
    try {
      const response = await fetch( process.env.REACT_APP_URL +"/hireRequest/addRequest", {
        method: "POST",
        body: JSON.stringify(applyData),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });
      if (response.ok) {
       console.log("ok")
      }
    } catch (e) {
      console.log(e); // Error
    }
  };
  render() {
    return (
      <>
        <Row className="applyFormText d-flex justify-content-center">
          {" "}
          Hire Form
        </Row>
        <Container className="applyContainer">
          <Row className="question1 d-flex justify-content-center">
            {" "}
            First Name
          </Row>
          <Row className="answerRow d-flex justify-content-center">
            <textarea
              className="answerTextArea firstName"
              onChange={(e) =>
                this.setState({ firstName: e.currentTarget.value })
              }
            >
              {" "}
            </textarea>
          </Row>
          <Row className="question1 d-flex justify-content-center">
            {" "}
            Second Name
          </Row>
          <Row className="answerRow d-flex justify-content-center">
            <textarea
              className="answerTextArea secondName"
              onChange={(e) =>
                this.setState({ secondName: e.currentTarget.value })
              }
            >
              {" "}
            </textarea>
          </Row>
          <Row className="question1 d-flex justify-content-center"> Phone</Row>
          <Row className="answerRow d-flex justify-content-center">
            <textarea
              className="answerTextArea phone"
              onChange={(e) => this.setState({ phone: e.currentTarget.value })}
            >
              {" "}
            </textarea>
          </Row>
          <Row className="question1 d-flex justify-content-center"> Email</Row>
          <Row className="answerRow d-flex justify-content-center">
            <textarea
              className="answerTextArea email"
              onChange={(e) => this.setState({ email: e.currentTarget.value })}
            >
              {" "}
            </textarea>
          </Row>
          <Row className="question1 d-flex justify-content-center">
            {" "}
            Do you have any question?
          </Row>
          <Row className="answerRow d-flex justify-content-center mb-5">
            <textarea
              className="answerTextArea question"
              onChange={(e) =>
                this.setState({ question: e.currentTarget.value })
              }
            >
              {" "}
            </textarea>
          </Row>

          <Row className="applyRow d-flex justify-content-center mb-5">
            <button className="applyBtn" onClick={() => this.checker()}>
              Send{" "}
            </button>
          </Row>
        </Container>
      </>
    );
  }
}
export default HireForm;
