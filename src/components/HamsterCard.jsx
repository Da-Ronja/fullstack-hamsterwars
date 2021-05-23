
//NOTE Kolla så att allt stämmet med props
const HamsterCard = (props) => {
	const name = props.name
	const age = props.age
	const favFood = props.favFood
	const loves = props.loves
	const imgName = props.imgName
	const wins = props.wins
	const defeats = props.defeats
	const games = props.games

	// const age = props.age
	const urlImg = '/assets/'



	return (
		<article>
			<h2>{name}</h2>
			<p>{age}</p>
			<p>{favFood}</p>
			<p>{loves}</p>
			<p>{wins}</p>
			<p>{defeats}</p>
			<p>{games}</p>
			<img src={urlImg + imgName} alt={name} />
		</article>
	)
}

export default HamsterCard
