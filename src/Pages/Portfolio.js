import React, { useState } from "react";
import "../styles/portfolio.css";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import image from "../assets/image.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import urge from "../assets/urge.png";
import quantum from "../assets/quantum.png";
import graphics from "../assets/graphics.png";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Portfolio() {
  const portfolio = [
    {
      type: "APP",
      title: "MAY I CARD GAME BUILT USING REACT NATIVE, SOCKET.IO, & NODE JS.",
      details: "",
      cardImage: image,
      modalImage: image
    },
    {
      type: "WEBSITE",
      title: "LANDING PAGE WEBSITE BUILT USING REACT & NODE.",
      details: "",
      cardImage: image2,
      modalImage: image2
    },
    {
      type: "WEBSITE",
      title: "MY PERSONAL PORTFOLIO BUILT USING REACT.",
      details: "",
      cardImage: image3,
      modalImage: image3
    },
    {
      type: "WEBSITE",
      title: "ECOMMERCE WEBSITE FOR URGE SMOKE SHOP USING SHOPIFY.",
      details: "",
      cardImage: urge,
      modalImage: urge
    },
    {
      type: "GRAPHICS",
      title: "HUNDREDS OF GRAPHICS MADE OVER 2-3 YEARDS.",
      details: "",
      cardImage: graphics,
      modalImage: graphics
    },
    {
      type: "CORPORATE BRANDING",
      title:
        "WEBSITE, BROCHURE, BUSINESS CARDS, & LOGO FOR QUANTUM LEGAL SOLUTIONS.",
      details: "",
      cardImage: quantum,
      modalImage: quantum
    }
  ];
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="portfolio-bg">
      <Container>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          size="lg"
          centered
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <CardColumns>
          {portfolio.map((item, key) => {
            return (
              <Card
                key={key}
                onClick={() => setShow(!show)}
                className="bg-dark text-white portfolio-card"
              >
                <Card.Img
                  className="portfolio-card"
                  src={item.cardImage}
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title className="card-title">{item.type}</Card.Title>
                  <Card.Text className="card-text">{item.title}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </div>
  );
}

export default Portfolio;
