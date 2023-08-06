import React from "react";
import "./header.css";
import Buttons from "./buttons";
import Me from "../../Extras/ProfilePhoto.jpeg";
import Socialmedia from "./socialid";
import videobg from "../../Extras/video.mp4";
const Header = () => {
  return (
    <div className="headers">
      <video src={videobg} autoPlay loop muted className="vid" />
      <header className="header">
        <div className="container header_container">
          <div className="content">
            <div className="text">
              <h5>Hello I'm</h5>
              <h1>Akshar Dubey</h1>
              <h5 className="text-light">Web Developer</h5>
            </div>

            <div className="me">
              <img src={Me} alt="me" className="im" />
            </div>
          </div>

          <Buttons />
          <Socialmedia />

          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
