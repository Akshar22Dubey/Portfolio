import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Akshar Dubey
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.instagram.com/" target="_blank">
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/akshar-dubey-802a88249/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/Akshar22Dubey" target="_blank">
          <BsGithub />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Akshar Dubey.All rights reserved </small>
      </div>
    </footer>
  );
};

export default Footer;
