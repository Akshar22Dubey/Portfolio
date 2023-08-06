import React, { useEffect } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2d74d6o",
        "template_zn7sp3z",
        form.current,
        "_dkanSFIP1yKVya6B"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact" className="reveal fade-right">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>aksharansh123@gmail.com</h5>
            <a href="mailto:aksharansh123@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsLinkedin className="contact_option-icon" />
            <h4>Linkedin</h4>
            <h5>Akshar Dubey</h5>
            <a
              href="https://www.linkedin.com/messaging/thread/2-MTQxYTgwZWQtNzc5Zi00YzZhLWJmZjAtYTE1ZThmZmIwYzY4XzAxMw==/"
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+918294861916</h5>
            <a
              href="https://api.whatsapp.com/send?phone+8294861916"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/*End of Contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />

          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default RevealComponent;
