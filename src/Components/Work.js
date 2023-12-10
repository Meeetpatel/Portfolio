import React, { useState, useEffect } from "react";
import "./works.css";
import shreehari from "./shreehari.jpg";
import { Link } from "react-router-dom";
import newsgoose from "./icon.png";
import textutils from "./textutils.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Work() {
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
      <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <Link to="/" className="home">
          Home
        </Link>
      </div>
      <div className="mt-5">
        {/* Add some space to compensate for the fixed navbar */}
      </div>
      <div className=" d-flex justify-content-center">
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
        <Link to="/Newsgoose" data-aos="flip-left">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={newsgoose}
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">
                NewsGoose <br></br>A daily News app
              </p>
            </div>
          </div>
        </Link>
        <a
          href="https://meeetpatel.github.io/Shreehari/"
          style={{
            marginLeft: "10%",
            marginRight: "10%",
          }}
          data-aos="fade-down"
        >
          <div
            className="card"
            style={{
              width: "18rem",
            }}
          >
            <img
              className="card-img-top"
              src={shreehari}
              style={{ maxHeight: "100%" }}
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">
                Shree Hari
                <br></br>Interior Designs
              </p>
            </div>
          </div>
        </a>
        <a href="https://meeetpatel.github.io/TextUtils/" data-aos="flip-right">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={textutils}
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">
                Textutils <br></br>Modify your text
              </p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
