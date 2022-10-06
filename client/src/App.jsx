import React from "react";
import Register from "../Register";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Sponsors from "./Components/Sponsors";
import EventCards from "./Components/EventCards";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <EventCards /> */}
      <Sponsors />
      <Footer />
    </>
  );
};

export default App;
