import React from "react";
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

const App = () => {
  return (
    <div className="h-screen w-screen bg-white px-16 lg:px-32 overflow-y-visible">
      <div className="relative">
        <Dec1 />
       
      </div>

      <NavBar />

      <Header />
      <Companies />
      <Services/>
      <Work />
      <Testimonials />
      <About />
      <Contact />
    </div>
  );
};

export default App;
