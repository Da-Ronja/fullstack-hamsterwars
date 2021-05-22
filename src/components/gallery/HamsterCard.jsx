//[ ] Lägg till statestik för vilka hamstar den besegrat.

import { useParams } from "react-router"
import useFetch from "../useFetch";

//NOTE added loves
const HamsterCard = () => {
	const { id } = useParams();
	const { data: hamster, isLoaded, error } = useFetch('http://localhost:1357/hamsters/' + id)
	console.log(hamster)

	return (
		<div>
			{ isLoaded ? <p>Loading...</p> : <>
				<h2>Hamster Data</h2>
				{error && <div>{error}</div>}
				{hamster && (
					<article>
						<img src={`/assets/${hamster.imgName}`} alt={hamster.name} />
						<h2>{`Name: ${hamster.name}`}</h2>
						<p>{`Age: ${hamster.age}`}</p>
						<p>{`Favorit Food: ${hamster.favFood}`}</p>
						<p>{`Loves: ${hamster.loves}`}</p>
						<p>{`Wins: ${hamster.wins}`}</p>
						<p>{`Defeats: ${hamster.defeats}`}</p>
						<p>{`Games: ${hamster.games}`}</p>
					</article>
				)}

			</>}
		</div >
	)
}

export default HamsterCard
