//TODO
//REVIEW	förklara hur man använder appen
// [ ]	användarvänligt felmeddelande
// [ ] Om det av någon anledning inte går att nå backend-servern så ska du visa ett användarvänligt felmeddelande här. Användaren ska också få möjligheten att försöka igen

import './home.css';
import Hover from "./Hover"

const Home = () => {
	return (
		<section className="main-container">
			<h1 className="subheader">Welcome to Hamsterwar Application</h1>
			<h3>Cutness to Death</h3>
			<p>A playful app where you can vote for the cutest hamster. You can also upload your own hamster or just explore and read fun facts about other hamster.</p>

			<Hover />
		</section>
	)
}

export default Home
