import React from "react"
import WindMap from "../Anims/WindMap"

const HeroSection = ({ title, desc, bgImage }) => {
	return (
		<div className="h-[33vh] -mt-[5rem] hero bg-black">
			<WindMap />
			<div className="text-center mt-auto">
				<h1 className="mt-auto mb-2 text-5xl font-bold text-white">
					{title}
				</h1>
				<p className="mb-5 text-secondary-content max-w-xl">{desc}</p>
				<div className="text-sm text-neutral-content breadcrumbs flex justify-center mb-5">
					<ul>
						<li>
							<a>Instruo</a>
						</li>
						<li>
							<a>HeroSection</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default HeroSection
