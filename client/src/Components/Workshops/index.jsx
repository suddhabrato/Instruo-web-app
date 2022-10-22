import React from "react";
import WorkshopCard from "./WorkshopCard";
import HeroSection from "../Shared/HeroSection";

const workshops = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
];

const Workshops = () => {
  return (
    <div>
      <HeroSection
        title={"Workshops"}
        desc={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, ullam?"
        }
        breadParams={[
          {
            title: "Instruo",
            url: "/",
          },
          {
            title: "Workshops",
            url: "",
          },
        ]}
      />
      <div className="p-10 mt-32 mb-32 flex flex-wrap gap-10 justify-center">
        {workshops.map((workshop, i) => (
          <WorkshopCard key={i} workshopId={workshop.id} />
        ))}
      </div>
    </div>
  );
};

export default Workshops;
