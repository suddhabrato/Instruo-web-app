import React from "react"
import moment from "moment"

const Schedule = ({ schedule }) => {
	return (
		<>
			<h2 className="mb-8 text-5xl font-bold text-center">Schedule</h2>
			{schedule.map((round, idx) => (
				<p key={idx} className="text-xl">
					<span className="pr-2">
						<b>{round.title}: </b>
					</span>
					{`${moment(round.date, moment.ISO_8601).format("ll")} | ${
						round.time
					} | ${round.duration} | `}
					<a
						className="link link-hover"
						href={round.locUrl}
						target="_blank">
						{round.venue}
					</a>
				</p>
			))}
		</>
	)
}

export default Schedule
