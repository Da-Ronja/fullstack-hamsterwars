import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import './App.css';
import Gallery from './components/gallery/Gallery'
import Battle from './components/battle/Battle'
import Home from './components/home/Home'

//TODO
//[ ]	Css
//[ ]	En egen nav component
//QUESTION ska React Router-länkana bo här eller startsidan


function App() {
	return (
		<div className="App">
			<Router>
				<header className="App-header">
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/battle">Battle</Link>
							</li>
							<li>
								<Link to="/gallery">Gallery</Link>
							</li>
						</ul>
					</nav>
				</header>

				<main>

					<Switch>
						<Route path="/gallery">
							<Gallery />
						</Route>
						<Route path="/battle">
							<Battle />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>

				</main>
			</Router>
		</div>
	);
}

export default App;
