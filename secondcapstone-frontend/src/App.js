import NavbarItem from "./components/navbar/navbar"
import Home from "./components/home/homePage"
import StartPage from "./components/startPage/startPage"
import Footer from "./components/footer/footer"
import ApplyPage from "./components/applyPage/applyPage"
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import "./components/app.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
     <Router>
    <Container className = "mainContainer">
    <NavbarItem className = ""/>
    <Route path="/hire">
    <Home />
    </Route>
    <Route path="/home">
    <StartPage />
    </Route>
    <Route path="/apply">
    <ApplyPage />
    </Route>
    <Footer />
    </Container>
    </Router>
    </>
  )
}
}

export default App;