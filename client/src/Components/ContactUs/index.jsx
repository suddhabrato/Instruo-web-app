import React, { useState } from "react";

import HeroSection from "../Shared/HeroSection";
import ContactCard from "./ContactCard";

import devanshu from "../../assets/team/devanshu.jpg";
import sudo from "../../assets/team/sudo.jpeg";
import debopriya from "../../assets/team/debopriya.jpeg";
import aditya from "../../assets/team/aditya.jpeg";

import pranshu from "../../assets/team/pranshu.jpg";
import nitu from "../../assets/team/nitu.jpg";
import ayan from "../../assets/team/ayan.jpg";
import moulindu from "../../assets/team/moulindu.jpg";
import souvik from "../../assets/team/souvik.jpg";

const ContactUs = () => {
  const [tabActive, setTabActive] = useState(2);
  return (
    <div>
      <HeroSection
        title={"Contact Us"}
        desc={"The team behind Instruo 12.0"}
        breadParams={[
          {
            title: "Instruo",
            url: "/",
          },
          {
            title: "Contact Us",
            url: "",
          },
        ]}
      />
      <div className="tabs tabs-boxed flex justify-center">
        <a
          className={`tab ${tabActive === 1 ? "tab-active" : ""}`}
          onClick={() => setTabActive(1)}
        >
          Design Team
        </a>
        <a
          className={`tab ${tabActive === 2 ? "tab-active" : ""}`}
          onClick={() => setTabActive(2)}
        >
          Technical Team
        </a>
        <a
          className={`tab ${tabActive === 3 ? "tab-active" : ""}`}
          onClick={() => setTabActive(3)}
        >
          Management Team
        </a>
      </div>
      {tabActive === 1 && (
        <div className="flex flex-wrap gap-10 p-10 justify-center">
          <ContactCard
            avatarImg={souvik}
            name="Souvik Sengupta"
            role="Designer"
            linkedinUrl="https://www.linkedin.com/in/souvik-sengupta-059a99156/"
          />
          <ContactCard
            avatarImg={moulindu}
            name="Moulindu Mandal"
            role="Designer"
            linkedinUrl="https://www.linkedin.com/in/moulindu-mandal-20a728215/"
          />
          <ContactCard
            avatarImg={ayan}
            name="Ayan Chatterjee"
            role="Designer"
            linkedinUrl="https://www.linkedin.com/in/ayan-chatterjee-5025481a2/"
          />
          <ContactCard
            avatarImg={nitu}
            name="Nitu Saha"
            role="Designer"
            linkedinUrl="https://www.linkedin.com/in/nitu-saha-171bab152/"
          />
          <ContactCard
            avatarImg={pranshu}
            name="Pranshu Singhal"
            role="Designer"
            linkedinUrl="https://www.linkedin.com/in/pranshu-singhal-bb11941a0/"
          />
        </div>
      )}
      {tabActive === 2 && (
        <div className="flex flex-wrap gap-10 p-10 justify-center">
          <ContactCard
            avatarImg={devanshu}
            name="Devanshu Chatterjee"
            role="Website Developer"
            linkedinUrl="https://www.linkedin.com/in/devanshu-chatterjee-517645200/"
          />
          <ContactCard
            avatarImg={sudo}
            name="Suddhabrato Ghosh"
            role="Website Developer"
            linkedinUrl="https://www.linkedin.com/in/suddhabrato-ghosh/"
          />
          <ContactCard
            avatarImg={aditya}
            name="Aditya Das"
            role="Website Developer"
            linkedinUrl="https://www.linkedin.com/in/aditya-das-86069b202/"
          />
          <ContactCard
            avatarImg={debopriya}
            name="Debopriya Roy"
            role="Website Developer"
            linkedinUrl="http://www.linkedin.com/in/debopriya-roy"
          />
        </div>
      )}
      {tabActive === 3 && (
        <div className="flex flex-wrap gap-10 p-10 justify-center">
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </div>
      )}
    </div>
  );
};

export default ContactUs;
