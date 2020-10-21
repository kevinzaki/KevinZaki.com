import React from "react";
import mayi from "../assets/mayi.png";
import fitainer from "../assets/fitainer.png";
import kevin from "../assets/kevin.png";
import urge from "../assets/urge.png";
import quantum from "../assets/quantum.png";
import quantumModal from "../assets/quantum-modal.png";
import graphics from "../assets/graphics.png";
import graphicsModal from "../assets/graphics-modal.png";
import urgeModal from "../assets/urge-modal.png";
import mayiModal from "../assets/mayi-modal.png";
import fitainerModal from "../assets/fitainer-modal.png";
import kevinModal from "../assets/kevin-modal.png";

const portfolioData = [
  {
    type: "APP",
    title: "MAY I CARD GAME APP",
    blurb: "MAY I CARD GAME BUILT USING REACT NATIVE, SOCKET.IO, & NODE JS.",
    details: (
      <p>
        May I is a multiplayer card game with similar rules to Rummy. <br />
        <br /> I used Expo for application setup, React Native, Node, and
        SocketIO as core technologies and any many helper libraries including
        react-navigation, react-native-paper, and react-native-confetti-cannon.
        <br />
        <br /> The goal going into the project was to get more experience with
        building a full stack application using React Native and Node.
        <br />
        <br /> You can view a video of the game in action{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://youtu.be/dTn7_qRHsFs"
        >
          here
        </a>
        . All the code for this project is available on my GitHub. You can find
        the front-end code{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kevinzaki/May-I-Card-Game-Front-end"
        >
          here
        </a>{" "}
        and the back-end code{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kevinzaki/May-I-Card-Game-Back-End"
        >
          here
        </a>
        .
      </p>
    ),
    cardImage: mayi,
    modalImage: mayiModal
  },
  {
    type: "WEBSITE",
    title: "FITAINER LANDING PAGE",
    blurb: "LANDING PAGE WEBSITE BUILT USING REACT & NODE.",
    details: (
      <p>
        Fitainer was a full product development practice project. The landing
        page was used to collect contact information for those who where
        interested in a theoretical product which was essentially a complete
        home gym built from a shipping container. The idea and concept was in
        response to gyms being closed during COVID-19. <br />
        <br /> I sketched a drawing and layout of what the home gym would look
        like. I then paid to have renderings made for relatively cheap using
        Fiverr. I even setup social profiles for the project and went through
        with the entire proof of concept phase of running ads and collecting
        leads. <br />
        <br />
        The landing page itself was build using react and node. I used bootstrap
        to handle some of the nitty styling. To store the contact information
        submitted via the form on the landing page I used MailChimp and
        connected to my account via their API. <br />
        <br />
        You can view the landing page{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.fitainer.com"
        >
          here
        </a>
        . If your curious to see what the Fitainer may look like you can check
        it out a video render{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://youtu.be/e_dxfVJTfow"
        >
          here
        </a>
        .
      </p>
    ),
    cardImage: fitainer,
    modalImage: fitainerModal
  },
  {
    type: "WEBSITE",
    title: "KEVIN ZAKI PORTFOLIO WEBSITE",
    blurb: "MY PERSONAL PORTFOLIO BUILT USING REACT.",
    details: (
      <p>
        KevinZaki.com is my personal portfolio website! <br />
        <br />I love simple and elegant design. When I am designing for myself I
        attempt to make things as clean and simple as possible. My design and
        development process usually includes a pen and paper sketch followed by
        a photoshop mockup and finally I begin coding and finding libraries that
        will allow me to quickly reach my vision. <br />
        <br />I got my website started using create-react-app. For quick and
        useful grid styling and components I installed react-bootstrap. I also
        utilized react-icons for social icons in the connect area of my site. I
        built the portfolio section by highly customizing bootstraps included
        cards and modals. I hosted the site using Firebase.
        <br />
        <br />
        You can check out the code on my Github by clicking{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kevinzaki/KevinZaki.com"
        >
          here
        </a>
        .
      </p>
    ),
    cardImage: kevin,
    modalImage: kevinModal
  },
  {
    type: "WEBSITE",
    title: "URGE SMOKE SHOP ECOMMERCE WEBSITE",
    blurb: "ECOMMERCE WEBSITE FOR URGE SMOKE SHOP USING SHOPIFY.",
    details: (
      <p>
        Urge Smoke Shop is a company I co-owned and worked at until early 2020.
        I was responsible for anything and everything design and technology
        related amongst other things. There are dozens of technical aspects that
        I have implemented over my years at Urge including programming a custom
        customer rewards script using LighSpeedPOS API and using Twilio to write
        sms marketing scripts. However, here I am highlighting the e-commerce
        platform I was responsible for.
        <br />
        <br /> Although we used a premium Shopify template for this design there
        was a lot of customizations - from the front page featured categories
        section to the checkout process where age verification was needed. I was
        also responsible for all the search engine optimization needed to rank
        us at the top of many search terms which ultimately generated thousands
        of dollars in revenue. <br />
        <br />
        Check out the website{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://urgesmokeshop.com/"
        >
          here
        </a>
        .
      </p>
    ),
    cardImage: urge,
    modalImage: urgeModal
  },
  {
    type: "GRAPHICS",
    title: "HUNDREDS OF GRAPHIC DESIGN ITEMS",
    blurb: "HUNDREDS OF GRAPHICS MADE OVER 2-3 YEARDS.",
    details: (
      <p>
        Over the last several years I have designed hundreds if not thousands of
        graphics both small and large. Many of them social media posts for new
        products, sales signs, and infographics from my time at Urge. In
        addition I have designed logos, invitations, business cards, and
        brochures.
        <br />
        <br />I am current putting together a gallery of all of my graphic work.
        This is a time consuming task and not at the top of my priority list.
        Please check back at a later time or contact me directly if this is
        something you would like access to.
      </p>
    ),
    cardImage: graphics,
    modalImage: graphicsModal
  },
  {
    type: "CORPORATE BRANDING",
    title: "QUANTUM LEGAL SOLUTIONS BRANDING",
    blurb:
      "WEBSITE, BROCHURE, BUSINESS CARDS, & LOGO FOR QUANTUM LEGAL SOLUTIONS.",
    details: (
      <p>
        Quantum Legal Solutions was one of my earlier projects as freelance
        developer. I was commissioned to handle the entire corporate branding
        for a new legal solutions company. This included logo design, business
        card design, brochure design, and most importantly website development.{" "}
        <br />
        <br />I customized a simple html template to the needs of Quantum. This
        kept costs down for the customer. I used vanilla javascript and php to
        to handle form submission - a big and important feature for them (at the
        time). <br />
        <br />
        You can check out the Quantum website{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://quantumlegalsolutions.com/"
        >
          here
        </a>
        .
      </p>
    ),
    cardImage: quantum,
    modalImage: quantumModal
  }
];

export default portfolioData;
