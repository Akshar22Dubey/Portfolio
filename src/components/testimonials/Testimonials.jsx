import React, { useEffect } from "react";
import "./testimonials.css";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import msphoto from "../../Extras/th.jpg";
import googlephoto from "../../Extras/th (1).jpg";
import winterconsultphoto from "../../Extras/th (2).jpg";
import bitphoto from "../../Extras/th (3).jpg";
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
    <section id="testimonials" className="reveal fade-bottom">
      <h2>My Ahievements</h2>

      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={msphoto} alt="Avator one" />
          </div>
          <h5 className="client_name">Microsoft Learn Student Ambassador</h5>
          <small className="client_review">
            Certification in Front-End Web Development Essentials, covering
            essential skills in HTML, CSS, and JavaScript.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={googlephoto} alt="Avator one" />
          </div>
          <h5 className="client_name"> Google Developer Student Club</h5>
          <small className="client_review">
            Certification in Front-End Web Development Essentials, covering
            essential skills in HTML, CSS, and JavaScript.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={winterconsultphoto} alt="Avator one" />
          </div>
          <h5 className="client_name">
            Winter Consulting 2022 | Consulting and Analytics Club | IIT
            Guwahati
          </h5>
          <small className="client_review">
            Completed the 4-week primer course on Management Consulting by
            Consulting & Analytics Club, IIT Guwahati. Ranked top 25 percentile
            among 4,000+ participants, demonstrating exceptional understanding
            and performance.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={bitphoto} alt="Avator one" />
          </div>
          <h5 className="client_name">Winner Of Bitotsav</h5>
          <small className="client_review">
            Exhibited exemplary leadership as the team leader, successfully
            steering the team to an impressive 1st place victory among 100+
            teams in the esteemed cultural fest BITOTSAV, comprising more than
            50 diverse technical and cultural events.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default RevealComponent;
