import React, { useState } from "react"

const ContactUs = () => {
	const [tabActive, setTabActive] = useState(2)
	return (
		<div>
			<div className="tabs tabs-boxed">
				<a
					className={`tab ${tabActive === 1 ? "tab-active" : ""}`}
					onClick={() => setTabActive(1)}>
					Tab 1
				</a>
				<a
					className={`tab ${tabActive === 2 ? "tab-active" : ""}`}
					onClick={() => setTabActive(2)}>
					Tab 2
				</a>
				<a
					className={`tab ${tabActive === 3 ? "tab-active" : ""}`}
					onClick={() => setTabActive(3)}>
					Tab 3
				</a>
			</div>
			{tabActive === 1 && (
				<div className="flex flex-wrap gap-5">
					<img
						className="mask mask-squircle"
						src="https://placeimg.com/160/160/arch"
					/>
					<img
						className="mask mask-squircle"
						src="https://placeimg.com/160/160/arch"
					/>
					<img
						className="mask mask-squircle"
						src="https://placeimg.com/160/160/arch"
					/>
				</div>
			)}
			{tabActive === 2 && (
				<div className="flex flex-wrap gap-5">
					<img
						className="mask mask-squircle"
						src="https://placeimg.com/160/160/arch"
					/>
					<img
						className="mask mask-squircle"
						src="https://placeimg.com/160/160/arch"
					/>
					<img
						className="mask mask-squircle"
						src="https://placeimg.com/160/160/arch"
					/>
					<img
						className="mask mask-squircle"
						src="https://placeimg.com/160/160/arch"
					/>
				</div>
			)}
			{tabActive === 3 && (
				<div className="flex flex-wrap gap-5">
					<img
						className="mask mask-squircle"
						src="https://placeimg.com/160/160/arch"
					/>
					<img
						className="mask mask-squircle"
						src="https://placeimg.com/160/160/arch"
					/>
					<img
						className="mask mask-squircle"
						src="https://placeimg.com/160/160/arch"
					/>
					<img
						className="mask mask-squircle"
						src="https://placeimg.com/160/160/arch"
					/>
					<img
						className="mask mask-squircle"
						src="https://placeimg.com/160/160/arch"
					/>
				</div>
			)}
		</div>
	)
}

export default ContactUs
