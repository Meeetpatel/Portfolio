import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
import newsgoose from "./NewsGoose.mp4";
import { Link } from "react-router-dom";
import "./contact.css";
import "./newsgoose.css";
export default function NewsGoose() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="mb-5">
      <Link to="/" className="home mt-5 ">
        Home
      </Link>
      <Link to="/Work" className="workhead">
        Work
      </Link>
      <div className="d-flex text-align-center justify-content-center mt-5">
        <h1 data-aos="fade-down" className="newshead">
          NewsGoose
        </h1>
      </div>
      <div className="newspara">
        <p data-aos="flip-left">
          I developed this App using React.js, integrating a news API to fetch
          real-time data and displayed it using dynamic CSS with the help of
          Bootstrap. Additionally, I added some dynamic functionality such as a
          spinner and loading bar to make this app look aesthetically pleasing.
          Unfortunately, I could not deploy this app due to restrictions on the
          API. Do check out the video below as I browse through NewsGoose in my
          local environment:
        </p>
      </div>
      <div className="d-flex text-align-center justify-content-center mt-5">
        <video data-aos="fade-down" width="90%" height="50%" controls>
          <source src={newsgoose} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
