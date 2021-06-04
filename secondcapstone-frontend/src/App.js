import NavbarItem from "./components/navbar/navbar"
import HirePage from "./components/hirePage/hirePage"
import StartPage from "./components/startPage/startPage"
import Footer from "./components/footer/footer"
import ApplyPage from "./components/applyPage/applyPage"
import HireRequests from "./components/hireRequests/hireRequests"
import AddWorker from "./components/addWorker/AddWorker"
import HireForm from "./components/hireForm/hireForm"
import ApplyRequests from "./components/applyRequests/applyRequests"
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
    <HirePage />
    </Route>
    <Route path="/home">
    <StartPage />
    </Route>
    <Route path="/apply">
    <ApplyPage />
    </Route>
    <Route path="/hireRequests">
    <HireRequests />
    </Route>
    <Route path="/addWorker">
    <AddWorker />
    </Route>
    <Route path="/hireForm">
    <HireForm/>
    </Route>
    <Route path="/applyRequests">
    <ApplyRequests/>
    </Route>
    
    <Footer />
    </Container>
    </Router>
    </>
  )
}
}

export default App;