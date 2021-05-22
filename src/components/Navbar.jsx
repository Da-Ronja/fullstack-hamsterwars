import React from 'react'
//QUESTION varför funkar inte det att bara ha antingen Link eller NavLink
import { BrowserRouter as Link, NavLink } from 'react-router-dom';


const Navbar = () => {
	return (
		<nav>
			<NavLink to="/">Home </NavLink>
			<NavLink to="/battle"> Battle </NavLink>
			<NavLink to="/gallery"> Gallery</NavLink>

		</nav>
	)
}

export default Navbar
