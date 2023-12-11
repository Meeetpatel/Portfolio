import React, { useState, useEffect } from "react";
import "./works.css";
import shreehari from "./shreehari.jpg";
import { Link } from "react-router-dom";
import newsgoose from "./icon.png";
import textutils from "./textutils.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = ({ imageUrl, title, description, link, aosAnimation }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  const calculateRotation = () => {
    const tiltMax = 70;
    const { x, y } = mousePosition;

    const rotationX = (y / window.innerHeight - 0.5) * tiltMax;
    const rotationY = (x / window.innerWidth - 0.5) * tiltMax;

    return `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  };

  return (
    <Link to={link} data-aos={aosAnimation}>
      <div
        className="card"
        style={{
          width: "18rem",
          transform: calculateRotation(),
        }}
        onMouseMove={handleMouseMove}
      >
        <img className="card-img-top" src={imageUrl} alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">
            {title}
            <br />
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

const Work = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <Link to="/" className="home">
          Home
        </Link>
      </div>
      <div className="mt-5"></div>
      <div className="d-flex justify-content-center">
        <h1 className="mywork">My Work</h1>
      </div>
      <div>
        <p className="para1">
          From Web Components and UI/UX animations to React.JS, Redux, Vue.JS,
          and Node.JS. Check out my latest web software development portfolio
          projects.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          imageUrl={newsgoose}
          title="NewsGoose"
          description="A daily News app"
          link="/Newsgoose"
          aosAnimation="flip-left"
        />
        <a
          href="https://meeetpatel.github.io/Shreehari/"
          style={{
            marginLeft: "10%",
            marginRight: "10%",
          }}
          data-aos="fade-down"
        >
          <Card
            imageUrl={shreehari}
            title="Shree Hari"
            description="Interior Designs"
            link="https://meeetpatel.github.io/Shreehari/"
          />
        </a>
        <a href="https://meeetpatel.github.io/TextUtils/" data-aos="flip-right">
          <Card
            imageUrl={textutils}
            title="Textutils"
            description="Modify your text"
            link="https://meeetpatel.github.io/TextUtils/"
          />
        </a>
      </div>
    </>
  );
};

export default Work;
