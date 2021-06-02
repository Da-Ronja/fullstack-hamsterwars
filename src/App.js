import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar';
import Home from './views/home/Home'
import Battle from './views/battle/Battle'
import Gallery from './views/gallery/Gallery'
import HamsterProfile from './views/hamster/HamsterProfile'
import Stats from './views/stats/Stats'
//import History from './views/history/History'

import HamsterWarsLogo from './assets/img/hamster-wars.svg';

//TODO
// [ ] Delete Felmeddelande 500, "Vänligen försök ladda om sidan" (inne i fetch) använd catch för att fånga upptill att tsta igen.
// [ ] Css
// [ ] Snygga till Home med kanske en hamstern.
// [ ] readme dokumentatiom.


// [ ] Alla Sidor som är klara Plocka ut funktioner och komponenter imån det går
// [ ] Kolla upp props / interface. Är det samma som HamsterCard?
// [ ] Option för 3 default img på Forms eller 3 olika default bilder som standard


// TODO VG 
// [ ] I Gallery välja en hamster, och visa vilka den har besegrat. (/matchWinners)
// [ ] Ny vy Historik Spara resultaten för senast vunna matcher. ...history / useState

// TODO Extra poäng 
// [ ] Lägg till statestik för vilka hamstern har besegrat.
// [ ] Fixa animering på bilder och knappar (Hover)


//[ ] bättre Felmeddelande

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
						<Route path="/stats" component={Stats} />
						{/* <Route path="/history" component={History} />
					 */}
						<Route exact path="/" component={Home} />
						<Route component={NotFound} />
					</Switch>
				</main>
			</div>
		</Router>
	);
}

export default App;
