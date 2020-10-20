import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/navigation.css";
import { ReactComponent as Logo } from "../assets/logo.svg";
function Navigation() {
  return (
    <Navbar collapseOnSelect expand="md" variant="dark" className="navBG">
      <div className="container">
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#work">WORK</Nav.Link>
            <Nav.Link href="#connect">CONNECT</Nav.Link>
            <Nav.Link className="nav-color" href="#resume">
              RESUME
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation;
