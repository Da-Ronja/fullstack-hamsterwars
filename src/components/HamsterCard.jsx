
//NOTE Kolla så att allt stämmet med props
const HamsterCard = (props) => {
	const name = props.name
	const imgName = props.imgName
	const age = props.age
	const favFood = props.favFood
	const loves = props.loves
	const wins = props.wins
	const defeats = props.defeats
	const games = props.games

	// const age = props.age
	const urlImg = '/assets/'



	return (
		<article className="hamster-card">
			<h2>{name}</h2>
			<img src={urlImg + imgName} alt={name} />
			<div className="card-details">
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
