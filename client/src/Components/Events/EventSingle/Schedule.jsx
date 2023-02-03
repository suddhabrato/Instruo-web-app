import React from "react";

const Schedule = ({ schedule }) => {
  return (
    <>
      <h2 className="mb-8 text-5xl font-bold text-center">Schedule</h2>
      {schedule.map((round, idx) => (
        <p key={idx} className="text-xl">
          <span className="pr-2">
            {" "}
            <b>{round.title}: </b>
          </span>
          {`${round.date} | ${round.time} | ${round.duration} | `}
          <a className="link link-hover" href={round.locUrl}>
            {round.venue}
          </a>
        </p>
      ))}
    </>
  );
};

export default Schedule;
