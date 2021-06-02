import urlImg from '../assets/img/hamster-default-4.jpg'

const HamsterCard = (props) => {
	const name = props.name
	//const imgName = props.imgName
	const age = props.age
	const favFood = props.favFood
	const loves = props.loves
	const wins = props.wins
	const defeats = props.defeats
	const games = props.games


	// const urlImg = '/assets/'

	return (
		<article className="Hamster-card">
			<h2>{name}</h2>
			{/* <img src={urlImg + imgName} alt={name} /> */}
			<img src={urlImg} alt={name} />
			<div className="Hamster-card-details">
				<p>{age}</p>
				<p>{favFood}</p>
				<p>{loves}</p>
				<p>{wins}</p>
				<p>{defeats}</p>
				<p>{games}</p>
			</div>
		</article>
	)
}

export default HamsterCard