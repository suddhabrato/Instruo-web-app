import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/logo.svg"

const NavBar = () => {
	return (
		<nav className="sticky top-[1rem] z-30 navbar bg-base-300 rounded-box bg-opacity-60 mt-[1rem] backdrop-blur transition-all duration-100 text-base-content shadow-sm w-11/12 mx-auto">
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
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
						<li>
							<a>Item 1</a>
						</li>
						<li>
							<a>Item 3</a>
						</li>
						<li>
							<a>Sign In</a>
						</li>
						<li>
							<a>Register</a>
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
						<NavLink to="/events">
							Events
							{/* <svg
									className="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24">
									<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
								</svg> */}
						</NavLink>
						{/* <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
							<li>
								<a>Submenu 1</a>
							</li>
							<li>
								<a>Submenu 2</a>
							</li>
						</ul> */}
					</li>
					<li>
						<a>Contact Us</a>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
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
