//[ ] VG del Lägg till statestik för vilka hamstar den besegrat.
//[ ] If no hamsterID exist show error massage

import { useParams } from "react-router"
import { useHistory } from 'react-router-dom'
import useFetch from "../useFetch";

const HamsterProfile = () => {

	const { id } = useParams();
	const urlHamesteById = '/hamsters/' + id
	//const matchChampion = '/matchWinners/' + id


	const { data: hamster, isLoaded, error } = useFetch(urlHamesteById)
	//console.log(hamster.id)


	const history = useHistory()

	const goBack = () => {
		history.go(-1)
	}

	const deleteHamster = async (id) => {
		//console.log('Delete hamster', id)

		if ((window.confirm("Delete the item?"))) {
			console.log('throw the hamster away')
			try {
				await fetch('/hamsters/' + id, {
					method: "DELETE"
				});
				//console.log(id)
				history.push('/');
			} catch (error) {
				//setError(error.message)
				return error.message;
			}
		} else {
			console.log('No! Keep the hamster')
		}
	}


	return (
		<div className="main-container">
			{ isLoaded ? <p>Loading...</p> : <>
				<h2>Hamster Data</h2>
				<button onClick={goBack}>Go Back</button>
				{error && <div>
					<p>{error}</p>
					<p>Try refreshing the page or come back later and try again</p>
					<button onClick={() => window.location.reload(false)}>Reload page</button>
				</div>
				}
				{hamster && (
					<article className="hamster-profile-card">
						<img
							src={`/assets/${hamster.imgName}`}
							alt={hamster.name}
						/>
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
			<div>

			</div>
		</div >
	)
}

export default HamsterProfile
