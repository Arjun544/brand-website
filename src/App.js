import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Dec1 from "./assets/Dec1";
import Companies from "./components/Companies";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { Fade } from "react-reveal";

const App = () => {
  const [scrolled, setscrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset > 0 ? setscrolled(true) : setscrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <div id="home" className="h-screen w-auto bg-white overflow-y-visible">
      <div className="relative">
        <Dec1 />
      </div>

      <NavBar scrolled={scrolled} />

      <Header />
      <Companies />
      <Services />
      <Work />
      <About />

      <Testimonials />
      <Contact />
      <Fade bottom>
        <Footer />
      </Fade>
    </div>
  );
};

export default App;
