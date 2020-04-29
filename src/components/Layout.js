import React from 'react';
import { Navbar, Nav, Container, } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import GameDetails from "./gameDetails/GameDetails";

function Layout() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="md" sticky="top">
        <NavLink to="/" exact>
          <Navbar.Brand>DevShaft Media</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/" exact className="nav-link">
              Home
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid className="main-container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/game/:id" component={GameDetails} />
        </Switch>
      </Container>
    </Router>
);
}

export default Layout;