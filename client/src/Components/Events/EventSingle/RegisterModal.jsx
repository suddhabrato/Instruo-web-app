import React, { useState } from "react"
import axios from "axios"
import Loader from "../../Shared/Loader"
import { useStateContext } from "../../../Contexts/ContextProvider"

const RegisterModal = ({ type, eventId }) => {
	const { loginUser, showToastHandler } = useStateContext()
	const [loading, setLoading] = useState(false)

	const registerIndividual = async () => {
		setLoading(true)
		try {
			await axios.post("/api/v1/events/register", {
				eventId: eventId,
				participantId: loginUser._id,
			})
			showToastHandler("Individual registration successful", "success")
			setLoading(false)
		} catch (error) {
			console.log(error)
			showToastHandler("Individual registration failed", "error")
			setLoading(false)
		}
	}

	const createTeam = async () => {}

	const joinTeam = async () => {}

	if (type === "Individual")
		return (
			<div className="modal-box">
				<h3 className="font-bold text-lg">Confirm Registration</h3>
				<p className="py-4">
					Are you sure you want to register for this event?
					<br /> Click Yes to proceed and NO to cancel.
				</p>
				{loading ? (
					<Loader />
				) : (
					<div className="modal-action">
						<label htmlFor="my-modal-6" className="btn">
							No
						</label>
						<button
							className="btn btn-primary"
							onClick={registerIndividual}>
							Yes
						</button>
					</div>
				)}
			</div>
		)
	return <div className="modal-box">loda lassan</div>
}

export default RegisterModal
