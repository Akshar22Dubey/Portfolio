import React from "react";
import "./index.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <div className="main">
        <div className="content-wrapper">
          <Header />

          <Nav />
          <About />
          <Experience />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
