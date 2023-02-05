import { React, useState, useEffect } from "react"
import Register from "./Register"
import WorkshopDetails from "./WorkshopDetails"
import HeroSection from "../../Shared/HeroSection"
import axios from "axios"
import Loader from "../../Shared/Loader"
import { useStateContext } from "../../../Contexts/ContextProvider"

const WorkshopSingle = ({ workshopId }) => {
	const { loginUser } = useStateContext()

	const [workshop, setWorkshop] = useState("")
	const [isRegistered, setIsRegistered] = useState(false)
	const [loading, setLoading] = useState(true)

	const getWorkshopDetails = async () => {
		try {
			let res
			if (loginUser)
				({ data: res } = await axios.post(
					`/api/v1/workshops/${workshopId}`,
					{
						userId: loginUser._id,
					}
				))
			else
				({ data: res } = await axios.post(
					`/api/v1/workshops/${workshopId}`
				))
			// console.log(res)
			setWorkshop(res.data.workshop)
			setIsRegistered(res.data.isRegistered)
			setLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getWorkshopDetails()
	}, [])

	return (
		<div>
			{loading ? (
				<div className="text-center p-10">
					<Loader />
				</div>
			) : (
				<div>
					<HeroSection
						title={workshop.title}
						desc={workshop.subtitle}
						breadParams={[
							{
								title: "Instruo",
								url: "/",
							},
							{
								title: "Workshop",
								url: "/workshops",
							},
							{
								title: workshop.title,
								url: "",
							},
						]}
					/>
					<WorkshopDetails {...workshop} />
					<div className="">
						<h2 className="mb-8 text-5xl font-bold text-center">
							Registration Status
						</h2>
						<Register {...workshop} isRegistered={isRegistered} />
					</div>
				</div>
			)}
		</div>
	)
}

export default WorkshopSingle
