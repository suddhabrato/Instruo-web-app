import React from "react"
import HeroSection from "../Shared/HeroSection"
import EventCard from "./EventCard"

const events = [
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
]
const Events = () => {
	return (
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
			<div className="p-10 flex flex-wrap gap-10 justify-center">
				{events.map((event, i) => (
					<EventCard key={i} eventId={event.id} />
				))}
			</div>
		</div>
	)
}

export default Events
