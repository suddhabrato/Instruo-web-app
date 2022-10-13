import React from "react";
import FaqSingle from "./FaqSingle";

const Faq = () => {
  return (
    <>
      <div className="hero bg-base-100 text-base-content mx-auto min-h-screen max-w-md md:max-w-full">
        <div className="hero-content px-4 md:px-2 ">
          <div className="flex flex-col">
            <h2 className="mt-16 mb-4 text-5xl font-extrabold md:text-6xl">
              Frequently asked questions (FAQs)
            </h2>
            <div className="mt-10 mb-20 flex flex-col">
              <FaqSingle
                question="Do you know what this is about?"
                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
              <FaqSingle
                question="Do you know what this is about?"
                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
              <FaqSingle
                question="Do you know what this is about?"
                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
              <FaqSingle
                question="Do you know what this is about?"
                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
