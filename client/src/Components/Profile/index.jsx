import React, { useState, useEffect } from "react"
import axios from "axios"
import { useStateContext } from "../../Contexts/ContextProvider"

import HeroSection from "../Shared/HeroSection"
import Loader from "../Shared/Loader"

const Profile = () => {
	const { loginUser } = useStateContext()
	const [userDetails, setUserDetails] = useState({})
	const [loading, setLoading] = useState(true)

	async function getUserDetails() {
		try {
			const { data: res } = await axios.get("/api/v1/users", {
				id: loginUser._id,
			})

			setUserDetails({ ...res.data.user })
			console.log(res)
			setLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getUserDetails()
	}, [])

	return (
		<div>
			<HeroSection
				title={"Your Profile"}
				desc={
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, ullam?"
				}
				breadParams={[
					{
						title: "Instruo",
						url: "/",
					},
					{
						title: "Profile",
						url: "",
					},
				]}
			/>
			{loading ? (
				<div className="text-center p-10">
					<Loader />
				</div>
			) : (
				<div className="m-8 shadow-xl border-2 border-gray-800 p-8 max-w-screen-xl xl:mx-auto">
					<div className="flex flex-col-reverse md:flex-row items-center justify-center md:gap-8">
						<div>
							<p className="text-5xl font-extrabold">
								{userDetails.name}
							</p>
							<p className="text-3xl font-bold mt-4">
								{userDetails.college.toUpperCase()}
							</p>
							<p className="text-2xl">
								{userDetails.course.toUpperCase()}
							</p>
							<p className="text-lg mt-4">
								Phone: {userDetails.mobile}
							</p>
							<p className="text-lg">
								Email: {userDetails.email}
							</p>
						</div>
						<div className="avatar placeholder md:-translate-y-2/3 -translate-y-1/3">
							<div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 bg-gray-800">
								<span className="text-3xl">
									{userDetails.name.match(/\b(\w)/g).join("")}
								</span>
							</div>
						</div>
					</div>
					<h3 className="mt-6 text-3xl text-center font-bold underline">
						Registered Events
					</h3>
					<div className="overflow-x-auto mt-4">
						<table className="table table-zebra w-full">
							<thead>
								<tr>
									<th></th>
									<th>Name</th>
									<th>Job</th>
									<th>Favorite Color</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th>1</th>
									<td>Cy Ganderton</td>
									<td>Quality Control Specialist</td>
									<td>Blue</td>
								</tr>
								<tr>
									<th>2</th>
									<td>Hart Hagerty</td>
									<td>Desktop Support Technician</td>
									<td>Purple</td>
								</tr>
								<tr>
									<th>3</th>
									<td>Brice Swyre</td>
									<td>Tax Accountant</td>
									<td>Red</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			)}
		</div>
	)
}

export default Profile
