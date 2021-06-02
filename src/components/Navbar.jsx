import React from 'react'
import { NavLink, Route } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar">
			<Route>
				<NavLink to="/">Home </NavLink>
				<NavLink to="/battle"> Battle </NavLink>
				<NavLink to="/gallery"> Gallery</NavLink>
				<NavLink to="/stats"> Statistic </NavLink>
				{/* <NavLink to="/historia"> Historia </NavLink> */}
			</Route>
		</nav>
	)
}

export default Navbar