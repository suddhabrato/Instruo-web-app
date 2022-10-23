import { React, useState, useEffect } from "react";
import Faq from "./Faq";
import Register from "./Register";
import EventDetails from "./EventDetails";
import HeroSection from "../../Shared/HeroSection";
import axios from "axios";
import { Sugar } from "react-preloaders";

const EventSingle = () => {
  const [events, getEvents] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://evening-brushlands-79138.herokuapp.com/api/v1/events ",
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        getEvents(res.data.events[0]);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {!loading && (
        <div>
          <HeroSection
            title={events.title}
            desc={events.subtitle}
            breadParams={[
              {
                title: "Instruo",
                url: "/",
              },
              {
                title: "Events",
                url: "/events",
              },
              {
                title: events.title,
                url: "",
              },
            ]}
          />
          <EventDetails {...events} />
          <Register />
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

export default EventSingle;
