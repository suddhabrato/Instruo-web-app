import { React, useState, useEffect } from "react";
import HeroSection from "../Shared/HeroSection";
import EventCard from "./EventCard";
import { Sugar } from "react-preloaders";
import axios from "axios";

const Events = () => {
  const [events, getEvents] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/events ", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        getEvents(res.data.events);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {!loading && (
        <div>
          <HeroSection
            title={"Events"}
            desc={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, ullam?"
            }
            breadParams={[
              {
                title: "Instruo",
                url: "/",
              },
              {
                title: "Events",
                url: "",
              },
            ]}
          />
          <div className="p-10 py-32 flex flex-wrap gap-10 justify-center">
            {events.map((event, i) => (
              <EventCard key={i} eventId={event.eventId} />
            ))}
          </div>
        </div>
      )}
      <Sugar
        customLoading={loading}
        time={3000}
        animation="slide-down"
        background="#2A303C"
        color="#6419E6"
      />
    </>
  );
};

export default Events;
