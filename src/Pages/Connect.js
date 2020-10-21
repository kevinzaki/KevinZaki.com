import React from "react";
import { Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../assets/logo-white.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiGithub, FiInstagram } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import "../styles/connect.css";

function Connect() {
  return (
    <IconContext.Provider value={{ size: "1.5em" }}>
      <div id="connect" className="connect-bg">
        <Container>
          <Logo />
          <p className="connect-text">be uncommon.</p>
          <p className="connect-text">
            <Button
              href="https://www.linkedin.com/in/kevinzaki/"
              variant="link"
              className="icon-button"
            >
              <FaLinkedinIn />
            </Button>
            <Button
              href="https://www.github.com/kevinzaki"
              variant="link"
              className="icon-button"
            >
              <FiGithub />
            </Button>
            <Button
              href="https://www.leetcode.com/kevinzaki/"
              variant="link"
              className="icon-button"
            >
              <SiLeetcode />
            </Button>
            <Button
              href="https://www.instagram.com/kevinzaki/"
              variant="link"
              className="icon-button"
            >
              <FiInstagram />
            </Button>

            <Button
              href="mailto:kevinzaki@gmail.com"
              variant="link"
              className="icon-button"
            >
              <FiMail />
            </Button>
          </p>
        </Container>
      </div>
    </IconContext.Provider>
  );
}
export default Connect;
