import React, { useEffect, useState } from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Contact() {
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
    <div>
      <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <Link to="/" className="home">
          Home
        </Link>
      </div>
      <div className="mt-5">
        {/* Add some space to compensate for the fixed navbar */}
      </div>
      <div className="create">
        <p>Let's Create </p>
        <p>Something Great!</p>
      </div>
      <div className="para">
        <h1
          className="pb-5"
          style={{ color: "orangered", fontWeight: "800" }}
          data-aos="fade-up"
        >
          Contact
        </h1>
        <p data-aos="fade-right">
          I'm seeking out opportunities to work in companies / agencies or for
          individuals, not just work for them, I want to bring my collective
          experience to the table where we can work together to solve real life
          problems in a way that optimizes all of our respective experience and
          knowledge.
        </p>
        <p data-aos="fade-left">
          I want to avoid subjective pissing-matches, and favor open-minded
          collaborators where egos are out of the equation. If that all sounds
          about right, then lets for sure chat about how we can work together.
        </p>
      </div>
      <div className="links">
        <a href="mailto:meetpatel4567.mp@gmail.com" className="email">
          Meetpatel4567.mp@gmail.com
        </a>
        <br></br>
        <a href="https://www.linkedin.com/in/meet-patel25/">LinkedIn</a>
      </div>
    </div>
  );
}
