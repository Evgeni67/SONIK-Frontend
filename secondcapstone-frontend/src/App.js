import NavbarItem from "./components/navbar/navbar"
import Home from "./components/home/homePage"
import StartPage from "./components/startPage/startPage"
import Footer from "./components/footer/footer"
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import "./components/app.css"
import {
  Nav,
  FormControl,
  Button,
  Form,
  Row,
  Col,
  Container,
} from "react-bootstrap";

class App extends Component {
  render() {
    return (
    <>
    <Container className = "mainContainer">
    <NavbarItem className = ""/>
    <Home />
    <Footer />
    </Container>
    </>
  )
}
}

export default App;