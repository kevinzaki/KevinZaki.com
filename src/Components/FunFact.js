import React from "react";
import "./funFact.css";

function FunFact({ text }) {
  return (
    <div className="fact-container">
      <b>Fun Fact:</b> {text}
    </div>
  );
}

export default FunFact;
