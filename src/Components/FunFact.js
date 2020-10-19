import React from "react";
import Badge from "react-bootstrap/Badge";
import "./funFact.css";

function FunFact({ text }) {
  return (
    <div className="fact-container">
      <b>Fun Fact:</b> {text}
    </div>
  );
}

export default FunFact;
