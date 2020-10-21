import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import kevin from "../assets/kevin-zaki-image.png";
import "../styles/introduction.css";

function Introduction() {
  return (
    <Jumbotron className="background">
      <Container className="introContainer">
        <Row className="align-items-center">
          <Col md className="titleCol">
            <h1 className="intro">Hi, I'm Kevin Zaki.</h1>
            <ul className="titleList">
              <li className="title titleOne">Software Engineer</li>
              <li className="title titleTwo">Designer</li>
              <li className="title titleThree">Entrepreneur</li>
              <li className="title titleFour">Fitness Ethusiast</li>
              <li className="title titleFive">Jiu Jitsu Practitioner</li>
            </ul>
          </Col>
          <Col md>
            <img src={kevin} className="img-fluid imgStyle" alt="Kevin Zaki" />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Introduction;
