import React from "react"
import SponsorCard from "./SponsorCard"

const Sponsors = () => {
	return (
		<div className="hero bg-base-100 text-base-content mx-auto min-h-screen max-w-md md:max-w-full ">
			<div className="hero-content px-4 md:px-2 text-center lg:text-start flex flex-col">
				<div className="hero-content flex-col lg:flex-row">
					<div className="w-1/2 ">
						<h1 className="text-5xl font-bold">Our Sponsors</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat
							fugiat ut assumenda excepturi exercitationem quasi.
							In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button className="btn btn-primary">
							View all Sponsors
						</button>
					</div>
					<div className="p-6 not-prose grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 my-10 gap-6">
						<SponsorCard />
						<SponsorCard />
						<SponsorCard />
						<SponsorCard />
						<SponsorCard />
						<SponsorCard />
						<SponsorCard />
						<SponsorCard />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sponsors
