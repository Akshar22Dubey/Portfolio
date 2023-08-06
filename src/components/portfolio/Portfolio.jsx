import React, { useEffect } from "react";
import "./portfolio.css";
import Drumkit from "../../Extras/images.jpg";
import Learningapp from "../../Extras/images (1).jpg";

function RevealComponent() {
  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <section id="portfolio" className="reveal fade-left">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Drumkit} alt="Drumkit" />
          </div>
          <h3>Drum Key Play</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Akshar22Dubey/FirstProject"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://akshar22dubey.github.io/FirstProject/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Learningapp} alt="as" className="lapp" />
          </div>
          <h3>Interactive Learning and Poem App</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Akshar22Dubey/Learningapp"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://please-ms26.onrender.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default RevealComponent;
