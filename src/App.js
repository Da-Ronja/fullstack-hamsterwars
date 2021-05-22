import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Gallery from './components/gallery/Gallery'
import HamsterCard from './components/gallery/HamsterCard'
import Battle from './components/battle/Battle'
import Home from './components/home/Home'

//TODO
//[ ]	Css
//[x]	En egen nav component
//QUESTION ska React Router-länkana bo här eller startsidan


function App() {

	function Status({ code, children }) {
		return (
			<Route
				render={({ staticContext }) => {
					if (staticContext) staticContext.status = code;
					return children;
				}}
			/>
		);
	}

	function NotFound() {
		return (
			<Status code={404}>
				<div>
					<h1>Sorry, the page dosen't exist.</h1>
				</div>
			</Status>
		);
	}

	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<Navbar />
				</header>

				<main>
					<Switch>
						<Route path="/gallery" component={Gallery} />
						<Route path="/HamsterCard/:id" component={HamsterCard} />
						<Route path="/battle" component={Battle} />
						<Route exact path="/" component={Home} />
						<Route component={NotFound} />
					</Switch>
				</main>
			</div>
		</Router>
	);
}

export default App;
