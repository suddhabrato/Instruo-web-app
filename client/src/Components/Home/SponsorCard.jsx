import React from "react"

const SponsorCard = ({}) => {
	return (
		<a
			className="card border-2 border-base-200 card-compact bg-white/5 hover:bg-gray-300/10 transition-all duration-200 hover:shadow hover:-translate-y-1"
			href="https://stackblitz.com/edit/daisyui-vite"
			target="\_blank"
			rel="noopener">
			<figure className="px-12 pt-6 pb-2 w-full aspect-[2/1] items-end">
				<img
					className="w-full h-auto"
					src="https://img.icons8.com/color/180/000000/adobe-after-effects--v1.png"
					alt="Vite"
				/>
			</figure>{" "}
			<div className="card-body text-center">
				<span className="text-xs">Vite</span>
			</div>{" "}
		</a>
	)
}

export default SponsorCard
