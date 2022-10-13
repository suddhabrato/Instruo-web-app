import React from "react";

const Hero = () => {
  return (
    <div
      className="hero -mt-[5rem] h-[60vh]"
      style={{
        backgroundImage: `url("https://placeimg.com/1920/1280/arch")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-primary-content mt-[5rem]">
        <div className="max-w-md ">
          <h1 className="mb-5 text-5xl font-bold ">Sponsors</h1>
          <p className="mb-5 text-secondary-content">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi.
          </p>
          <div className="text-sm text-neutral-content breadcrumbs flex justify-center">
            <ul>
              <li>
                <a>Instruo</a>
              </li>
              <li>
                <a>Sponsors</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
