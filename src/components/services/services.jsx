import React, { useEffect } from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

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
    <section id="services" className="reveal fade-right">
      <h5>My Impact</h5>
      <h2>My POR</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Management Team Head | Robolution | BIT Mesra </h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Proactively secured valuable sponsorships, bolstering the club's
                financial resources, actively engaged alumni members, and
                efficiently managed a robust database, fostering a strong
                network and nurturing enduring connections.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Proactively managed budget ₹1 lac +, for effective resource
                allocation.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Ensured timely bill reimbursement. Effectively coordinated an
                Arduino workshop, fostering immersive hands-on learning for 30+
                engaged students.
              </p>
            </li>
          </ul>
        </article>

        {/* END OF Robolution */}
        <article className="service">
          <div className="service_head">
            <h3>Publicity Team Head | ECESOC | BIT Mesra</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Coordinated TECH-A-THON with active participation from 40+ team
                members representing various colleges.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Secured ₹7k - ₹10k in sponsorship offers, ensuring financial
                support for TECH-A-THON's success.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Implemented dynamic publicity strategies for the society,
                leveraging social media platforms and other mediums to generate
                awareness and maximize the reach of TECH-A-THON and other
                society events.
              </p>
            </li>
          </ul>
        </article>

        {/*sadadada*/}

        <article className="service">
          <div className="service_head">
            <h3>Resource Team Head | LEO Club | BIT Mesra</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Played a key role in the execution and effective resource
                management of the flagship event Deepotsav, which garnered a
                footfall of 1k+ people, creating a memorable and successful
                event experience.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Planned and executed captivating events such as Series Buzz and
                Connect the Matrix during the cultural fest Bitotasv, attracting
                600+ registrations to the event and adding vibrancy to the
                festival.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default RevealComponent;
