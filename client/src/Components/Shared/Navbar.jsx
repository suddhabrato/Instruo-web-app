import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.svg"

const NavBar = () => {
	return (
		<nav className="sticky top-[1rem] z-50 navbar bg-base-300 rounded-box bg-opacity-60 mt-[1rem] backdrop-blur transition-all duration-100 text-base-content shadow-sm w-11/12 mx-auto">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow-sm bg-base-300 rounded-box w-52 bg-opacity-60">
						<li>
							<NavLink to="/sponsors">Sponsors</NavLink>
						</li>
						<li>
							<NavLink to="/events">Events</NavLink>
						</li>
						<li>
							<a>Contact Us</a>
						</li>
						<li>
							<NavLink to="/login">Log In</NavLink>
						</li>
						<li>
							<NavLink to="/signup">Register</NavLink>
						</li>
					</ul>
				</div>
				<NavLink to="/" className="btn btn-ghost normal-case text-xl">
					<img
						src={logo}
						className="max-w-sm mx-3"
						width="25"
						height="25"
					/>
					Instruo
				</NavLink>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal p-0">
					<li>
						<a href="/#about">About</a>
					</li>

					<li>
						<NavLink to="/sponsors">Sponsors</NavLink>
					</li>
					<li tabIndex={0}>
						<NavLink to="/events">Events</NavLink>
					</li>
					<li>
						<a>Contact Us</a>
					</li>
				</ul>
			</div>
			<div className="navbar-end hidden lg:flex">
				<NavLink
					to="/login"
					className="btn btn-outline btn-primary mx-2">
					Log In
				</NavLink>
				<NavLink to="/signup" className="btn btn-primary mx-2">
					Register
				</NavLink>
			</div>
		</nav>
	)
}

export default NavBar
