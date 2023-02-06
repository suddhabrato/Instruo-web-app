import React from "react"
import SponsorCard from "./SponsorCard"

const SponsorSection = ({ title, bg }) => {
	return (
		<div
			className={`bg-base-${bg} flex justify-center items-center text-center`}>
			<div>
				<h2 className="mt-16 mb-2 text-5xl font-extrabold md:text-6xl">
					{title}
				</h2>
				<div className="p-6 not-prose grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 my-10 gap-6">
					<SponsorCard
						name="Coding Ninjas"
						logoUrl="https://files.codingninjas.in/0000000000000723.jpg"
					/>
					<SponsorCard name="T.I.M.E" logoUrl="" />
					<SponsorCard name="Erudite" logoUrl="" />
					<SponsorCard name="Roasted Cart" logoUrl="" />
					<SponsorCard name="DTS (Deepak Tea Station)" logoUrl="" />
				</div>
			</div>
		</div>
	)
}

export default SponsorSection
