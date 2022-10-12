import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "../Register"
import Navbar from "./Components/Navbar"
import About from "./Components/Home/About"
import Hero from "./Components/Home/Hero"
import Footer from "./Components/Footer"
import Sponsors from "./Components/Home/Sponsors"
import EventCards from "./Components/EventCards"
import Home from "./Components/Home"
import Events from "./Components/Events"
import SignUp from "./Components/AuthPage/SignUp"
import LogIn from "./Components/AuthPage/LogIn"

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/events" element={<Events />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/login" element={<LogIn />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
