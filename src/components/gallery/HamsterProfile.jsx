//[ ] Lägg till statestik för vilka hamstar den besegrat.
//[ ] Ändra gå tillbacka.
//QUESTION Edit Hamster?

import { useParams } from "react-router"
import { useHistory } from 'react-router-dom'
import useFetch from "../useFetch";

const HamsterProfile = () => {

	const { id } = useParams();
	const urlHamesteById = 'http://localhost:1357/hamsters/' + id
	const { data: hamster, isLoaded, error } = useFetch(urlHamesteById)
	console.log(hamster.id)
	const history = useHistory()

	const goBack = () => {
		history.go(-1)
	}

	// Delete Hamster
	//QUESTION hur får man även bort bilden
	const deleteHamster = (id) => {
		console.log('Delete hamster', id)
		if ((window.confirm("Delete the item?"))) {
			console.log('throw the hamster away')
			fetch('http://localhost:1357/hamsters/' + id, {
				method: "DELETE"
			}).then(() => {
				history.push('/');
			})
		} else {
			console.log('No! Keep the hamster')
		}
	}

	return (
		<div>
			{ isLoaded ? <p>Loading...</p> : <>
				<h2>Hamster Data</h2>
				<button onClick={goBack}>Go Back</button>
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

						<button onClick={() => deleteHamster(hamster.id)}>Delete Hamster</button>
					</article>
				)}

			</>}
			<button>More statics</button>
		</div >
	)
}

export default HamsterProfile
