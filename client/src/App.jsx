import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar";
import Footer from "./Components/Shared/Footer";
import Sponsors from "./Components/Sponsors/Sponsors";
import Home from "./Components/Home";
import Events from "./Components/Events";
import SignUp from "./Components/AuthPage/SignUp";
import LogIn from "./Components/AuthPage/LogIn";
import EventSingle from "./Components/Events/EventSingle";
import Workshops from "./Components/Workshops";
import WorkshopSingle from "./Components/Workshops/WorkshopSingle";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventSingle />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/workshops/:workshopId" element={<WorkshopSingle />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
