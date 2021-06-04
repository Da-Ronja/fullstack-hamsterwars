
import './home.css';
import Rainbow from '../../assets/img/rainbow.svg'

const Home = () => {
	return (
		<section className="main-container home-grid">
			<h1 className="subheader">Welcome to Hamsterwar Application</h1>

			<img src={Rainbow} alt="a rainbow" className="rainbow" />

			<h3 className="cutness-to-death">Cutness to Death</h3>
			<p>A playful app where you can vote for the cutest hamster. You can also upload your own hamster or just explore and read fun facts about other hamster.</p>

		</section>
	)
}

export default Home
