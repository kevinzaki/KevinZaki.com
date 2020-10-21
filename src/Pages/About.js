import React from "react";
import FunFact from "../Components/FunFact";
import { Container } from "react-bootstrap";
import "../styles/about.css";

function About() {
  return (
    <Container id="about" className="about-bg">
      <p className="value-prop">
        I provide value by solving difficult business problems through
        engineering, design, and leadership.
      </p>
      <p className="about">
        As a professional I wear many hats.  I’ve worked as a software engineer
        at Verizon Wireless, built dozens of websites for clients as a
        freelancer, and most recently bootstrapped a retail business to
        multimillion dollar revenue.  Solving complex engineering problems in an
        elegant and simple manner is what I’m most passionate about. 
      </p>
      <FunFact text="I graduated magna cum laude in Computer Science from Kean University." />
      <p className="about">
        I am very much the same personally as I am professionally.  I set goals,
        seek progress, and enjoy the journey.  I live a healthy lifestyle which
        includes daily running or weight lifting sessions.  I try to train Jiu
        Jitsu as much as I can - something that gives me immense satisfaction. 
        To truly unwind I seek out comedic relief through stand up comedy,
        podcasts, or just having a good time with friends.
      </p>
      <FunFact text="I am currently a Blue Belt in Brazilian Jiu Jitsu!" />
      <p className="about">
        To know about me is to know <em>at least</em> a little bit of where I
        come from.  My father, an immigrant from Egypt, worked as a baker for
        years until he saved up enough money to buy his own bakery. Everything I
        know about hard work starts with him. My mother, who also works at the
        family bakery, provided me with the love I needed to develop the self
        confidence and can-do attitude I use to accomplish all my goals.  I grew
        up in the inner city of Elizabeth, New Jersey.  Although rough and
        dangerous at times - it provided me with lasting life perspective and
        the toughness to overcome any obstacle.  I developed my love for
        technology through video games and my competitiveness and discipline
        through years of organized sports.
      </p>
      <FunFact text="I created my first website using iframes and a .tk domain when I was 13." />
      <p className="about">
        I seek out challenges that enable growth for both myself and those
        around me.  The thought of working with a great team to accomplish a
        common goal is one that genuinely excites me. After selling my retail
        business to my partners in 2020 I am transitioning back into my
        true passion of technology.  I am seeking a role as a Software Engineer
        or Product Manager.  Please reach out with any inquiries. 
      </p>
    </Container>
  );
}

export default About;
