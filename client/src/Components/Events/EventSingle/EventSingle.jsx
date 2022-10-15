import React from "react";
import Hero from "./Hero";
import Faq from "./Faq";
import Register from "./Register";
import EventDetails from "./EventDetails";

const EventSingle = () => {
  let event = {
    title: "Competitive Programming",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eteius ipsam minima, inventore officias tempora maiores",
    category: "online",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eteius ipsam minima, inventore officia tempora maiores id eum aperiam quiratione praesentium temporibus delectus! Corporis reprehenderit ullam addolorum!",
    image: "https://placeimg.com/1920/1280/arch",
    rules: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eteius ipsam minima, inventore officia tempora maiores id eum aperiam quiratione praesentium temporibus delectus! Corporis reprehenderit ullam addolorum!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eteius ipsam minima, inventore officia tempora maiores id eum aperiam quiratione praesentium temporibus delectus! Corporis reprehenderit ullam addolorum!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eteius ipsam minima, inventore officia tempora maiores id eum aperiam quiratione praesentium temporibus delectus! Corporis reprehenderit ullam addolorum!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eteius ipsam minima, inventore officia tempora maiores id eum aperiam quiratione praesentium temporibus delectus! Corporis reprehenderit ullam addolorum!",
    ],
    faq: [
      {
        question: "Do you know what this is about?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        question: "Do you know what this is about?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        question: "Do you know what this is about?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        question: "Do you know what this is about?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    contacts: [
      {
        name: "Abhishek Gupta",
        email: "abhigupta@gmail.com",
        phone: "917883299922",
      },
      {
        name: "Abhishek Gupta",
        email: "abhigupta@gmail.com",
        phone: "917423299922",
      },
    ],
    schedule: [
      {
        title: "Round 1",
        date: "3 November, 2022",
        time: "8:30 PM",
        duration: "3 hours",
        venue: "Amenities Center",
      },
      {
        title: "Round 2",
        date: "3 November, 2022",
        time: "8:30 PM",
        duration: "3 hours",
        venue: "Amenities Center",
      },
      {
        title: "Round 3",
        date: "3 November, 2022",
        time: "8:30 PM",
        duration: "3 hours",
        venue: "Amenities Center",
      },
      {
        title: "Round 4",
        date: "3 November, 2022",
        time: "8:30 PM",
        duration: "3 hours",
        venue: "Amenities Center",
      },
    ],
    prizes: [
      { standing: "Winner", reward: "INR 3500", color: "primary" },
      { standing: "Runner Up", reward: "INR 1500", color: "secondary" },
      { standing: "Top 5", reward: "GFG Coupons", color: "neutral" },
    ],
  };
  return (
    <>
      <Hero title={event.title} subtitle={event.subtitle} image={event.image} />
      <EventDetails {...event} />
      <Register />
    </>
  );
};

export default EventSingle;
