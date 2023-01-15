import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

import About from "./About";
import Carousel from "./Carousel";
import Hero from "./Hero";
import Sponsors from "./Sponsors";
import Stats from "./Stats";

const Home = () => {
  const aboutRef = useRef();

  return (
    <>
      <Hero aboutRef={aboutRef} />
      <About aboutRef={aboutRef} />
      {/* <EventCards /> */}
      <div className="hero bg-base-200">
        <div className="hero-content mx-auto my-16 flex flex-col gap-8">
          <h2 className="text-5xl font-extrabold text-center px-4 mt-4">
            What's in store for you?
          </h2>
          <Stats />
          <div className="flex flex-col lg:flex-row justify-evenly gap-2 lg:gap-8 px-4">
            <Link
              to="/events"
              className="btn btn-primary btn-wide rounded-full mb-4 mx-2 tracking-wide"
            >
              View all events
            </Link>
            <Link
              to="/workshops"
              className="btn btn-primary btn-wide rounded-full mb-4 mx-2 tracking-wide"
            >
              View all workshops
            </Link>
          </div>
          <Carousel />
        </div>
      </div>
      <Sponsors />
    </>
  );
};

export default Home;
