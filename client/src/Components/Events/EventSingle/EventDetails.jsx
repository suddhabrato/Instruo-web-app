import React from "react";
import Faq from "./Faq";
import Rules from "./Rules";
import About from "./About";
import Schedule from "./Schedule";
import Prizes from "./Prizes";
import Contacts from "./Contacts";
import Rounds from "./Rounds";

const EventDetails = ({ desc, rules, schedule, contacts, faq, prizes }) => {
  return (
    <div>
      <div className="bg-base-100 text-base-content mx-auto max-w-md md:max-w-full px-8">
        <div className="hero-content px-4 md:px-2 mx-auto flex flex-col">
          <div className="prose w-full max-w-full flex-grow px-4 md:px-2 my-20">
            <About desc={desc} />
            <Rules rules={rules} />
            <Rounds schedule={schedule} />
            <Schedule schedule={schedule} />
            {/* <Faq faq={faq} /> */}
            <Contacts contacts={contacts} />
            <Prizes prizes={prizes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
