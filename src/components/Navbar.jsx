import React from 'react'
import { NavLink, Route } from 'react-router-dom';

const Navbar = () => {
	return (

		<nav className="nav-bar">
			<Route>
				<NavLink to="/">Home </NavLink>
				<NavLink to="/battle"> Battle </NavLink>
				<NavLink to="/gallery"> Gallery</NavLink>
			</Route>
			<div className="nav-button"></div>
		</nav>
	)
}

export default Navbar
