import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import linkedin from "./linkedin.png";
import github from "./github.png";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [hovered, setHovered] = useState(false);
  const [Workhovered, setWorkHovered] = useState(false);
  const [Contacthovered, setContactHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  const handleMouseOverWork = () => {
    setWorkHovered(true);
  };

  const handleMouseOutWork = () => {
    setWorkHovered(false);
  };

  const handleMouseOverContact = () => {
    setContactHovered(true);
  };

  const handleMouseOutContact = () => {
    setContactHovered(false);
  };

  return (
    <>
      <div className="social">
        <Link
          className="social2"
          onClick={() =>
            window.open("https://www.linkedin.com/in/meet-patel25/", "_blank")
          }
        >
          <img src={linkedin} width="50" alt="Linkedin" />
        </Link>

        <Link
          className="social2 mt-5"
          onClick={() => window.open("https://github.com/Meeetpatel", "_blank")}
        >
          <img src={github} width="33" alt="github" />
        </Link>
      </div>
      <div className="home-container">
        <div className="hello">
          <Link
            to="/About"
            className={`hello ${hovered ? "hovered" : ""}`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {hovered ? "About" : "Hello."}
          </Link>
        </div>
        <div className="meet">
          <Link
            to="/Work"
            className={`meet ${Workhovered ? "hovered" : ""}`}
            onMouseOver={handleMouseOverWork}
            onMouseOut={handleMouseOutWork}
          >
            {" "}
            {Workhovered ? "My Work" : "I am"}
          </Link>
        </div>
        <div className="meet2">
          <Link
            to="/Contact"
            className={`meet2 ${Contacthovered ? "hovered" : ""}`}
            onMouseOver={handleMouseOverContact}
            onMouseOut={handleMouseOutContact}
          >
            {" "}
            {Contacthovered ? "Contact" : "Meet"}
          </Link>
        </div>
      </div>
    </>
  );
}
