//[ ] Lägg till statestik för vilka hamstar den besegrat.
//[ ] Ändra gå tillbacka.
//[ ] Edit Hamster?

import { useParams } from "react-router"
import { useHistory } from 'react-router-dom'
import useFetch from "../useFetch";

//NOTE added loves and button for delet
const HamsterProfile = () => {

	const { id } = useParams();
	const { data: hamster, isLoaded, error } = useFetch('http://localhost:1357/hamsters/' + id)
	console.log(hamster)
	const history = useHistory()

	const goBack = () => {
		history.go(-1)
	}

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
						<button>Delete Hamster</button>
					</article>
				)}

			</>}
			<button onClick={goBack}>Go Back</button> <button>More statics</button>
		</div >
	)
}

export default HamsterProfile
