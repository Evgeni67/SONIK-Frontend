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
import "./applyPage.css";
import axios from "axios"
import { AiFillPayCircle } from "react-icons/ai";

class ApplyPage extends Component {
  state = {
    submitApply:true,
    applyId:"",
    image: "",
    imageUploaded: false,
    name: "",
    phoneNumber: "",
    email: "",
    drivingLicense: "",
    status: "",
    location: "",
    cscsCard: "",
    workInTheUk: "",
    bio: "",
    pic: "1",
  };
  checker = () => {
    if(this.state.email === ""){
    const email = document.querySelector(".email")
    email.classList.add("redUnderline")
    this.setState({submitApply:false})
    } if(this.state.drivingLicense === ""){
      const drivingLicense = document.querySelector(".drivingLicense")
      drivingLicense.classList.add("redUnderline")
      this.setState({submitApply:false})
    }if(this.state.workInTheUk === ""){
      const workInTheUk = document.querySelector(".workInTheUk")
      workInTheUk.classList.add("redUnderline")
      this.setState({submitApply:false})
    } if(this.state.cscsCard === ""){
      const cscsCard = document.querySelector(".cscsCard")
      cscsCard.classList.add("redUnderline")
      this.setState({submitApply:false})
    }
    if(this.state.cscsCard === ""){
      const location = document.querySelector(".location")
      location.classList.add("redUnderline")
      this.setState({submitApply:false})
    }
    if(this.state.name === ""){
      const name = document.querySelector(".name")
      name.classList.add("redUnderline")
      this.setState({submitApply:false})
    }
    if(this.state.phoneNumber === ""){
      const phoneNumber = document.querySelector(".phoneNumber")
      phoneNumber.classList.add("redUnderline")
      this.setState({submitApply:false})
    }
    if(this.state.phoneNumber === ""){
      const phoneNumber = document.querySelector(".phoneNumber")
      phoneNumber.classList.add("redUnderline")
      this.setState({submitApply:false})
    }
  
   if(this.state.submitApply){
     this.addApply()
   }
  }
  postImage = async (postId) => {
    try {
        console.log(this.state.applyId)
      let post = new FormData();
       post.append("postPic", this.state.image);
      if (post) {
        let response = await fetch(
           " http://localhost:9999/apply/addPictureToApply/" + postId,
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
  addApply = async () => {
    this.setState({imageUploaded:false})
    const applyData = {
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      drivingLicense: this.state.drivingLicense,
      status: "available",
      location: this.state.location,
      bio: "bio",
      pic: this.state.pic,
      cscsCard: this.state.cscsCard,
      workInTheUk: this.state.workInTheUk
    };
    try {
      const response = await fetch("http://localhost:9999/apply/addApply", {
        method: "POST",
        body: JSON.stringify(applyData),
        headers: new Headers({
          "Content-Type": "application/json",
          
        }),
      });
      if (response.ok) {
       await response.json().then(json => {
          this.postImage(json)
        });
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
          Apply Form
        </Row>
        <Container className="applyContainer">
          <Row className="question1 d-flex justify-content-center">
            {" "}
            What is your name?
          </Row>
          <Row className="answerRow d-flex justify-content-center">
            <textarea
              className="answerTextArea name"
              onChange={(e) => this.setState({ name: e.currentTarget.value })}
            >
              {" "}
            </textarea>
          </Row>
          <Row className="question1 d-flex justify-content-center">
            {" "}
            Are you eligible to work in The UK?
          </Row>
          <Row className="answerRow d-flex justify-content-center">
            <textarea
              className="answerTextArea workInTheUk"
              onChange={(e) =>
                this.setState({ workInTheUk: e.currentTarget.value })
              }
            >
              {" "}
            </textarea>
          </Row>
          <Row className="question1 d-flex justify-content-center">
            {" "}
            What is your CSCS Level?
          </Row>
          <Row className="answerRow d-flex justify-content-center">
            <textarea
              className="answerTextArea cscsCard"
              onChange={(e) =>
                this.setState({ cscsCard: e.currentTarget.value })
              }
            >
              {" "}
            </textarea>
          </Row>
          <Row className="question1 d-flex justify-content-center">
            {" "}
            Where do you live?
          </Row>
          <Row className="answerRow d-flex justify-content-center">
            <textarea
              className="answerTextArea location"
              onChange={(e) =>
                this.setState({ location: e.currentTarget.value })
              }
            >
              {" "}
            </textarea>
          </Row>
          <Row className="question1 d-flex justify-content-center">
            {" "}
            Do you have a driving license?
          </Row>
          <Row className="answerRow d-flex justify-content-center">
            <textarea
              className="answerTextArea drivingLicense"
              onChange={(e) =>
                this.setState({ drivingLicense: e.currentTarget.value })
              }
            >
              {" "}
            </textarea>
          </Row>

          <Row className="question1 d-flex justify-content-center">
            {" "}
            Phone Number
          </Row>
          <Row className="answerRow d-flex justify-content-center">
            <textarea
              className="answerTextArea phoneNumber"
              onChange={(e) =>
                this.setState({ phoneNumber: e.currentTarget.value })
              }
            >
              {" "}
            </textarea>
          </Row>
          <Row className="question1 d-flex justify-content-center"> Email</Row>
          <Row className="answerRow d-flex justify-content-center ">
            <textarea
              className="answerTextArea email"
              onChange={(e) => this.setState({ email: e.currentTarget.value })}
            >
              {" "}
            </textarea>
          </Row>
          <Row className="question1 poctureOfYou d-flex justify-content-center">
            {" "}
            Picture of you
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
                  Picture of you
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
          ) : (
           null
          )}
           {!this.state.imageUploaded ? (
           <Row className = "d-flex justify-content-center"> 
           <Col className = "d-flex justify-content-center">
               <input
                 accept="image/*"
                 type="file"
                 id="postImage"
                 onChange={(e) =>
                   this.setState({ image: e.target.files[0], imageUploaded: true })
                 }
                 class=" form-control-file"
                 className = "inputFile"
               ></input>
               </Col>
               </Row>
          ) : (
           null
          )}
          
         

         
          <Row className="applyRow d-flex justify-content-center mb-5">
            <button className="applyBtn" onClick={() => this.checker()}>
              Apply{" "}
            </button>
          </Row>
        </Container>
      </>
    );
  }
}
export default ApplyPage;
