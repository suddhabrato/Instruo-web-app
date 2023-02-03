import React from "react";
import logo from "../../assets/logo_home.jpg";

const About = ({ aboutRef }) => {
  return (
    <div
      className="hero bg-base-200 text-base-content mx-auto py-16 px-8"
      ref={aboutRef}
    >
      <div className="hero-content px-4 md:px-2 text-center">
        <div className="flex flex-col gap-16">
          <h2 className="text-5xl font-extrabold md:text-6xl" id="about">
            About Us
          </h2>
          <div className="card card-side bg-base-100 shadow-xl flex-col lg:flex-row">
            <figure className="lg:w-1/3">
              <img
                className="h-full object-cover"
                src="https://www.iiests.ac.in/assets/images/bg/05.jpg"
                alt="iiests"
              />
            </figure>
            <div className="card-body lg:w-2/3 px-8 my-auto">
              <h2 className="card-title justify-center lg:justify-start">
                IIEST, Shibpur
              </h2>
              <p className="text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, eligendi eum aliquam inventore sequi magnam iusto
                libero unde, neque ipsa dolores ea omnis totam pariatur natus!
                Quas ratione expedita saepe tenetur in vitae esse aliquam, totam
                minima veritatis, quisquam quo commodi omnis iure tempore
                obcaecati alias explicabo quod! Aliquid nesciunt harum dolor
                alias ipsum adipisci nihil corporis placeat corrupti, qui
                accusamus porro temporibus aut. Dignissimos beatae quos facilis
                quae ab et cum dolore? Quasi corrupti veritatis quia incidunt!
                Dolor similique iste itaque quod maiores mollitia vel voluptas,
                temporibus, ratione provident aliquam maxime. Reprehenderit
                dolores voluptates quasi deserunt omnis ut exercitationem.
              </p>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl flex-col lg:flex-row-reverse">
            <figure className="lg:w-1/3">
              <img className="h-full object-cover" src={logo} alt="instruo" />
            </figure>
            <div className="card-body lg:w-2/3 px-8 my-auto">
              <h2 className="card-title justify-center lg:justify-start">
                New movie is released!
              </h2>
              <p className="text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, eligendi eum aliquam inventore sequi magnam iusto
                libero unde, neque ipsa dolores ea omnis totam pariatur natus!
                Quas ratione expedita saepe tenetur in vitae esse aliquam, totam
                minima veritatis, quisquam quo commodi omnis iure tempore
                obcaecati alias explicabo quod! Aliquid nesciunt harum dolor
                alias ipsum adipisci nihil corporis placeat corrupti, qui
                accusamus porro temporibus aut. Dignissimos beatae quos facilis
                quae ab et cum dolore? Quasi corrupti veritatis quia incidunt!
                Dolor similique iste itaque quod maiores mollitia vel voluptas,
                temporibus, ratione provident aliquam maxime. Reprehenderit
                dolores voluptates quasi deserunt omnis ut exercitationem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
