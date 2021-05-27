import React from 'react'
import { NavLink, Route } from 'react-router-dom';


const Navbar = () => {
	return (

		<nav>
			<Route>
				<NavLink to="/">Home </NavLink>
				<NavLink to="/battle"> Battle </NavLink>
				<NavLink to="/gallery"> Gallery</NavLink>
			</Route>
		</nav>
	)
}

export default Navbar
