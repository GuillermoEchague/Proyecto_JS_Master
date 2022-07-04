import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection(props) {
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
      }}
    >
      <h1>{props.text}</h1>

      <div className="hero-btns">
        <Link to={props.link}>
          <button><h1 className="text-h1">{props.buttonName}</h1></button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
