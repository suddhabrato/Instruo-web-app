import React from "react"
import SponsorCard from "./SponsorCard"

import DTS from "../../assets/sponsors/DTS.jpeg"
import sears from "../../assets/sponsors/sears.png"
import SDLC from "../../assets/sponsors/SDLC.png"

const SponsorSection = ({ title, bg }) => {
	return (
		<div
			className={`bg-base-${bg} flex justify-center items-center text-center`}>
			<div>
				<h2 className="mt-16 mb-2 text-5xl font-extrabold md:text-6xl">
					{title}
				</h2>
				<div className="p-6 not-prose grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 my-10 gap-6">
					<SponsorCard name="Sears Holdings India" logoUrl={sears} />
					<SponsorCard
						name="Sears Deep Learning Centre"
						logoUrl={SDLC}
					/>
					<SponsorCard
						name="Coding Ninjas"
						logoUrl="https://files.codingninjas.in/0000000000000723.jpg"
					/>
					<SponsorCard
						name="T.I.M.E"
						logoUrl="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/325987269_869845554291316_7388624397662696654_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nAfw69BJQLUAX_jkB0a&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfB4L8I9Hrh9IX2oqbTbqDaGCR4yArSMECTSMB1JozYsIQ&oe=63E52C23"
					/>
					<SponsorCard
						name="Erudite"
						logoUrl="https://erudite.in/wp-content/uploads/2018/08/logo-1.jpg"
					/>
					<SponsorCard
						name="Roasted Cart"
						logoUrl="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/292564617_464861085639686_3011550964506932231_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=18zGgA9v3RMAX8Mz2AJ&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfDDVohLZbaiU1xAlPK8F1ABEqti6yPsZvGB4rORfK7xbw&oe=63E5321A"
					/>
					<SponsorCard
						name="DTS (Deepak Tea Station)"
						logoUrl={DTS}
					/>
				</div>
			</div>
		</div>
	)
}

export default SponsorSection
