import React from "react"

const About = ({ desc }) => {
	return (
		<div className="flex flex-col justify-center items-center">
			<h2 className="mb-8 text-5xl font-bold text-center">About</h2>
			<p className="mx-auto mb-8 w-full text-center px-2">{desc}</p>
			<a className="btn btn-secondary btn-wide" target="_blank">
				Download Brochure
			</a>
		</div>
	)
}

export default About
