import React from "react"
import HeroSection from "../Shared/HeroSection"
import logo from "../../assets/logo.svg"

const SignUp = () => {
	return (
		<div>
			<HeroSection
				title={"Register"}
				desc={
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, ullam?"
				}
				breadParams={[
					{
						title: "Instruo",
						url: "/",
					},
					{
						title: "Register",
						url: "",
					},
				]}
			/>

			<div className="flex flex-col items-center p-5">
				<div className="text-9xl font-bold my-8">Instruo 2k23</div>
				<div className="w-2/3 shadow-2xl bg-base-100">
					<div className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Full Name</span>
							</label>
							<input
								type="text"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">
									Institute Name
								</span>
							</label>
							<input
								type="text"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Course Name</span>
							</label>
							<input
								type="text"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">
									Graduation Year
								</span>
							</label>
							<input
								type="text"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email ID</span>
							</label>
							<input
								type="text"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">
									Mobile Number
								</span>
							</label>
							<input
								type="text"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="text"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">
									Confirm Password
								</span>
							</label>
							<input
								type="text"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control mt-6 w-40 mx-auto">
							<button className="btn btn-primary">
								Register
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUp
