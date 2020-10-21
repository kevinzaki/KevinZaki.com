import React, { useState } from "react";
import "../styles/portfolio.css";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import portfolioData from "../util/portfolioData";

function Portfolio() {
  const [portfolioIdx, setPortfolioIdx] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <div id="work" className="portfolio-bg">
      <Container>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          size="lg"
          centered
          show={show}
          onHide={handleClose}
        >
          <Modal.Header
            style={{
              backgroundImage: `url(${portfolioData[portfolioIdx].modalImage})`
            }}
            closeButton
          >
            <Modal.Title>{portfolioData[portfolioIdx].title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{portfolioData[portfolioIdx].details}</Modal.Body>
        </Modal>

        <CardColumns>
          {portfolioData.map((item, key) => {
            return (
              <Card
                key={key}
                onClick={() => {
                  setPortfolioIdx(key);
                  setShow(!show);
                }}
                className="bg-dark text-white portfolio-card"
              >
                <Card.Img
                  className="portfolio-card"
                  src={item.cardImage}
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Title className="card-title">{item.type}</Card.Title>
                  <Card.Text className="card-text">{item.blurb}</Card.Text>
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
