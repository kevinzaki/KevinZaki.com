import React from "react";
import { Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../assets/logo-white.svg";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiMail, FiGithub, FiInstagram, FiYoutube } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import "../styles/connect.css";

function Connect() {
  return (
    <IconContext.Provider value={{ size: "1.5em" }}>
      <div className="connect-bg">
        <Container>
          <Logo />
          <p className="connect-text">be uncommon.</p>
          <p className="connect-text">
            <Button className="icon-button">
              <FaLinkedinIn />
            </Button>
            <Button className="icon-button">
              <FiGithub />
            </Button>
            <Button className="icon-button">
              <SiLeetcode />
            </Button>
            <Button className="icon-button">
              <FiInstagram />
            </Button>
            <Button className="icon-button">
              <FiYoutube />
            </Button>

            <Button className="icon-button">
              <FiMail />
            </Button>
          </p>
        </Container>
      </div>
    </IconContext.Provider>
  );
}
export default Connect;
