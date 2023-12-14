// NewsGoose.js

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
import newsgoose from "./NewsGoose.mp4";
import { Link } from "react-router-dom";
import "./NewsGoose.css"; // Import the new CSS file
import "./contact.css";

export default function NewsGoose() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Link to="/" className="home mt-5 ">
        Home
      </Link>
      <Link to="/Work" className="workhead mt-5">
        Meet.Work
      </Link>
      <div className="d-flex text-align-center justify-content-center mt-5">
        <h1 className="page-title" data-aos="fade-down">
          NewsGoose
        </h1>
      </div>
      <div className="newsgoosepara" data-aos="flip-left">
        <p>
          I developed this App using React.js, integrating a news API to fetch
          real-time data and displayed it using dynamic CSS with the help of
          Bootstrap. Additionally, I added some dynamic functionality such as a
          spinner and loading bar to make this app look aesthetically pleasing.
          Unfortunately, I could not deploy this app due to restrictions on the
          API. Do check out the video below as I browse through NewsGoose in my
          local environment:
        </p>
      </div>
      <div className="video-container" data-aos="fade-down">
        <video width="90%" height="50%" controls>
          <source src={newsgoose} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}
