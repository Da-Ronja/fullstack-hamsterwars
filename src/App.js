import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Gallery from './components/gallery/Gallery'
import HamsterProfile from './components/gallery/HamsterProfile'
import Battle from './components/battle/Battle'
import Home from './components/home/Home'

import HamsterWarsLogo from './hamster-wars.svg';

//TODO
// [x] Visa hur många vinster och förluster respektive hamster har efter match omgång.
// [x] Kolla så att alla fetch passar in med varandra
// [x] Validering på Forms med hjälp av css och hooks
// [x] Lyckad uppladdning medelande toggle
// [x] Kolla upp om det går att göra antingen en toggle eller if-sats för modal (forms battleWinner)
// [ ] Fel medelanden om det inte går att nå backend ska finnas möjlighet till att tsta igen.
// [ ] Kolla så att alla fetch har error medelanden
// [ ] Css + Responsive Css
// [ ] Snygga till Home med kanske regnbågen och hamstern.


// [ ] Alla Sidor som är klara Plocka ut funktioner och komponenter imån det går
// [ ] Kolla upp props / interface. Är det samma som HamsterCard?
// [ ] props för css på HamsterCard (className)
// [ ] Option för 3 default img på Forms eller 3 olika default bilder som standard


// TODO VG 
// [ ] I Gallery välja en hamster, och visa vilka den har besegrat. (/matchWinners)
// [ ] Ny vy Statistik Visa de 5 hamstrar som vunnit mest, och de 5 hamstrar som förlorat mest.
// [ ] Ny vy Historik Spara resultaten för senast vunna matcher. ...history / useState

// TODO Extra poäng 
// [ ] Lägg till statestik för vilka hamstern har besegrat.
// [ ] Fixa animering på bilder och knappar (Hover)


//[ ] bättre Felmeddelande

// QUESTION Måste man kunna ta bort en hamster från galleriet eller räker det att man länkar till hamsterns egna sida
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
					<h1>Sorry, the page you are searching for could not be fount.</h1>
				</div>
			</Status>
		);
	}

	return (
		<Router>
			<div className="App">
				<header className="App-header">
					{/* <div className="App-header-grid"> */}
					<img className="hamster-logo" src={HamsterWarsLogo} alt="Hamster Wars img" />
					<Navbar />
					{/* </div> */}
				</header>

				<main className="App-main">
					<Switch>
						<Route path="/gallery" component={Gallery} />
						<Route path="/HamsterProfile/:id" component={HamsterProfile} />
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
