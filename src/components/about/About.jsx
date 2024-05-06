import React, { useEffect } from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import Aboutpic from "../../Extras/photo-1531297484001-80022131f5a1.jpg";

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
    <div className="body">
      <section id="about" className="reveal fade-bottom">
        <h5>Get to Know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={Aboutpic}  />
            </div>
          </div>

          <div className="about_content">
            <div className="about_cards">
              <article className="about_card">
                <FaAward className="about_icon" />
                <h5>CGPA</h5>
                <small>9.02</small>
              </article>

              <article className="about_card">
                <FaAward className="about_icon" />
                <h5>POR</h5>
                <small>3 at BIT Mesra</small>
              </article>

              <article className="about_card">
                <FaAward className="about_icon" />
                <h5>Projects</h5>
                <small>3+ Projects</small>
              </article>
            </div>
            <p>
              Hello! I'm Akshar Dubey, a Pre-Final Year student pursuing
              Electronics and Communication Engineering at BIT Mesra. With a
              deep passion for computers and technology, I constantly explore
              new horizons in the digital world. As a strong team player, I
              thrive in collaborative environments and believe in the power of
              collective ideas to drive innovation. Through my journey, I've
              honed my skills in problem-solving and critical thinking, striving
              to make a positive impact in the realm of technology. Let's embark
              on a transformative journey together, harnessing the potential of
              cutting-edge advancements in the digital landscape.
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's Connect
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RevealComponent;
