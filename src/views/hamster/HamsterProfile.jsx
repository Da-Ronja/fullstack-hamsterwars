//[ ] If no hamsterID exist show error massage

import { useState, useEffect } from 'react';
import { useParams } from "react-router"
import { useHistory } from 'react-router-dom'
import useFetch from "../useFetch";

const HamsterProfile = () => {

	const { id } = useParams();
	const urlHamesteById = '/hamsters/' + id

	const [defeatedList, setDefeatedList] = useState([])

	const { data: hamsters } = useFetch('/hamsters/')
	const { data: hamster, isLoaded, error } = useFetch(urlHamesteById)
	//console.log(hamsters)


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

	useEffect(() => {
		const matchWinner = async () => {

			try {
				const response = await fetch('/matchWinners/' + id, {
					method: 'GET'
				})
				const data = await response.json();
				//console.log('då', data);

				const matches = data;
				let defeatedHamsterId = [];

				matches.forEach(match => {
					const loserId = match.loserId;
					defeatedHamsterId.push(loserId);
				})
				//console.log(defeatedHamsterId);


				let defeatedHamster = [];
				defeatedHamsterId.forEach(defeatId => {
					defeatedHamster.push(hamsters.find(({ id }) => id === defeatId)
					)
				});

				setDefeatedList(defeatedHamster)
				//console.log(defeatedHamster);


			} catch (error) {
				console.log("No won matches")
				return error.message;
			}
		};
		matchWinner();
	}, [hamsters, id]);

	// const renderDefeated = defeatedList.map(hamster => (
	// 	<li key={hamster.id} className="statsHamsters">
	// 		<p style={{ fontWeight: "bold" }}>{`Name: ${hamster.name}`} </p>
	// 	</li>
	// ))


	return (
		<div className="main-container">

			{ isLoaded ? <p>Loading...</p> : <>

				<button onClick={goBack}>Go Back</button>
				{error && <div>
					<p>{error}</p>
					<p>Try refreshing the page or come back later and try again</p>
					<button onClick={() => window.location.reload(false)}>Reload page</button>
				</div>
				}
				{hamster && (
					<>
						<h2>{`Name: ${hamster.name}`}</h2>
						<article className="hamster-profile-card">

							<img
								src={`/assets/${hamster.imgName}`}
								alt={hamster.name}
							/>
							<div>
								<p>{`Age: ${hamster.age}`}</p>
								<p>{`Favorit Food: ${hamster.favFood}`}</p>
								<p>{`Loves: ${hamster.loves}`}</p>
								<p>{`Wins: ${hamster.wins}`}</p>
								<p>{`Defeats: ${hamster.defeats}`}</p>
								<p>{`Games: ${hamster.games}`}</p>
							</div>
							<div>
								<h3>Has killed with cutness</h3>
								{/* <ol>
									{renderDefeated}
								</ol> */}
							</div>
						</article>
						<button onClick={() => deleteHamster(hamster.id)}>Delete Hamster</button>
					</>
				)}

			</>}
			<div>

			</div>
		</div >
	)
}

export default HamsterProfile
