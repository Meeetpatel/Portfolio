import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./about.css";
export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });

    // Add a scroll event listener to update the state based on the scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="background-section">
        <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
          <Link to="/" className="home mt-5">
            Home
          </Link>
        </div>
        <div className="head">
          <p>
            I design & Build <br></br>Digital Products
          </p>
        </div>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "4vw",
            fontWeight: "800",
            color: "lightblue",
            animation: " contactlogo1 1s forwards ",
            opacity: "0",
            animationDelay: "1s",
          }}
        >
          Skills
        </h1>
        <div className="skills mt-5">
          <span className="badge badge-pill badge1 ">HTML/CSS</span>
          <span className="badge badge-pill badge2">JAVASCRIP</span>
          <span className="badge badge-pill badge3 ">REACT</span>
          <span className="badge badge-pill badge4">Responsive Design</span>
          <span className="badge badge-pill badge5 ">node</span>
          <span className="badge badge-pill badge6 ">python</span>
          <span className="badge badge-pill badge7 ">git</span>
          <span className="badge badge-pill badge8 ">Shell Script</span>
          <span className="badge badge-pill badge9 ">Angular</span>
        </div>

        <div className="about">
          <p className="paragraph1" data-aos="fade-up">
            My name is Meet Patel.I'm a multi-disciplinary maker with over 5
            years of experiences in wide range of roles such as Restaurant
            Managing Partner,front-end developer & General manager.
          </p>

          <p data-aos="fade-right">
            I don’t like to define myself by the work I’ve done. I define myself
            by the work I want to do. Skills can be taught, personality is
            inherent. I prefer to keep learning, continue challenging myself,
            and do interesting things that matter.
          </p>
          <p data-aos="fade-left">
            Fueled by high energy levels and boundless enthusiasm, I’m easily
            inspired and more then willing to follow my fascinations wherever
            they take me. I’m passionate, expressive, multi-talented spirit with
            a natural ability to entertain and inspire. I’m never satisfied to
            just come up with ideas. Instead I have an almost impulsive need to
            act on them.
          </p>
          <p data-aos="flip-">
            My abundant energy fuels me in the pursuit of many interests,
            hobbies, areas of study and artistic endeavors. I’m a fast learner,
            able to pick up new skills and juggle different projects and roles
            with relative ease.
          </p>
          <p data-aos="fade-in">
            I like to develop expertise in a number of areas over the course of
            my life and career.I am currently looking for a job where I can can
            leverage my skills and expertise to contribute meaningfully to a
            dynamic team or organization.
          </p>
        </div>
      </div>
      <div>
        <Link to="/Contact">
          <p className="home mb-5 mt-5 d-flex align-items-center justify-content-center">
            Contact
          </p>
        </Link>
      </div>
    </>
  );
}
