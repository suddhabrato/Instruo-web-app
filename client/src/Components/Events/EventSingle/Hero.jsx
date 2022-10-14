import React from "react";

const Hero = ({ title, subtitle, image }) => {
  return (
    <div
      className="hero -mt-[5rem] h-[60vh]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-primary-content mt-[5rem]">
        <div className="max-w-md ">
          <h1 className="mb-5 text-5xl font-bold ">{title}</h1>
          <p className="mb-5 text-secondary-content">{subtitle}</p>
          <div className="text-sm text-neutral-content breadcrumbs flex justify-center">
            <ul>
              <li>
                <a>Instruo</a>
              </li>
              <li>
                <a>Events</a>
              </li>
              <li>
                <a>{title}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
