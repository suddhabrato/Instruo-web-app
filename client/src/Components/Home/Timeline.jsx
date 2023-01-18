import React from "react";

const Timeline = () => {
  return (
    <div>
      <h2 className="text-5xl font-extrabold text-center px-4 my-8">
        Our Timeline
      </h2>
      <ul className="steps steps-vertical lg:steps-horizontal mt-8">
        <li className="step step-primary" data-content="✓">
          Inauguration Ceremony
        </li>
        <li className="step step-primary" data-content="✓">
          Day 1 Events
        </li>
        <li className="step step-primary" data-content="✓">
          Day 2 Events
        </li>
        <li className="step" data-content="★">
          Session by Priyansh Agarwal
        </li>
        <li className="step" data-content="★">
          Day 3 Events
        </li>
        <li className="step" data-content="★">
          Closing Ceremony
        </li>
        <li className="step" data-content="★">
          Prize Distribution
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
