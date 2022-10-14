import React from "react"
import WindMap from "../Anims/WindMap"

const Hero = () => {
	return (
		<div
			className="hero -mt-[5rem] h-[33vh] bg-black"
			// style={{
			// 	backgroundImage: `url(
			// 		"https://images.pexels.com/photos/13268789/pexels-photo-13268789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
			// 	)`}}
		>
			<WindMap />
			<div className="text-center mt-auto">
				<h1 className="mt-auto mb-2 text-5xl font-bold text-white">
					Sponsors
				</h1>
				<p className="mb-5 text-secondary-content">
					Provident cupiditate voluptatem et in. Quaerat fugiat ut
					assumenda excepturi exercitationem quasi.
				</p>
				<div className="text-sm text-neutral-content breadcrumbs flex justify-center mb-5">
					<ul>
						<li>
							<a>Instruo</a>
						</li>
						<li>
							<a>Sponsors</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Hero
