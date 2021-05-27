//TODO
//[ ] 	Visa resultat
// //[ ]	Initiera nästa match

import { useState, useEffect } from 'react';
import HamsterCard from "../HamsterCard";


const Battle = () => {

	const [hamsterOne, setHamsterOne] = useState({});
	const [hamsterTwo, setHamsterTwo] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);
	const [newGame, setNewGame] = useState(true);
	const [hamsterWins, setHamsterWins] = useState({});
	//console.log(hamsterOne.id, hamsterOne.name);
	//console.log(hamsterTwo.id, hamsterTwo.name);


	useEffect(() => {
		const fetchRandomHamster = async () => {
			try {
				setIsLoaded(true);
				const responseOne = await fetch('/hamsters/random', { method: 'GET' });
				const resultOme = await responseOne.json();

				const responseTwo = await fetch('/hamsters/random', { method: 'GET' });
				const resultTwo = await responseTwo.json();

				if (resultOme.id === resultTwo.id) {
					console.log("Two of the same!")
					newGame ? setNewGame(false) : setNewGame(true);

				} else {
					setHamsterOne(resultOme)
					setHamsterTwo(resultTwo)
				}

				setIsLoaded(false);
			} catch (error) {
				setIsLoaded(false);
				setError(error.message)
				return error.message;
			}
		};
		fetchRandomHamster();
	}, [newGame]);


	const handleClick = async (winner, loser) => {

		if (winner && loser) {
			const winnerUpdate = {
				wins: winner.wins + 1,
				games: loser.games + 1
			}
			const loserUpdate = {
				defeats: loser.defeats + 1,
				games: loser.games + 1
			}

			console.log('Winner', winner.name, winner.id, winnerUpdate,);
			console.log('Loser', loser.name, loser.id, loserUpdate);
			setHamsterWins(winner)
			updateHamster(winner.id, winnerUpdate);
			updateHamster(loser.id, loserUpdate);
			newMatchPost(winner.id, loser.id);
		}
	}

	const updateHamster = async (id, upDate) => {

		try {
			const response = await fetch(`/hamsters/${id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(upDate)
			});
			const hamsterData = await response.text();
			console.log(hamsterData);

		} catch (error) {
			return error.message;
		}
	};

	const newMatchPost = async (winner, loser) => {

		const newMatch = {
			winnerId: winner,
			loserId: loser
		}

		try {
			const response = await fetch('/matches', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newMatch)
			});
			const matchData = await response.text();
			console.log(matchData);

		} catch (error) {
			return error.message;
		}
	};

	return (
		<div className="battle">
			<h1> Battle </h1>
			{ isLoaded ? <p>Loading...</p> : <>
				{error && <div>{error}</div>}
				<article className="heje">

					<div>

						<HamsterCard
							imgName={hamsterOne.imgName}
							name={`Name: ${hamsterOne.name}`}
							age={`Age: ${hamsterOne.age}`}
							favFood={`Favorit Food: ${hamsterOne.favFood}`}
							loves={`Loves: ${hamsterOne.loves}`}
						/>
						<button onClick={() => handleClick(hamsterOne, hamsterTwo)}>
							Pick {hamsterOne.name}
						</button>
					</div>


					<div >
						<HamsterCard
							imgName={hamsterTwo.imgName}
							name={`Name: ${hamsterTwo.name}`}
							age={`Age: ${hamsterTwo.age}`}
							favFood={`Favorit Food: ${hamsterTwo.favFood}`}
							loves={`Loves: ${hamsterTwo.loves}`}
						/>
						<button onClick={() => handleClick(hamsterTwo, hamsterOne)}>
							Pick {hamsterTwo.name}
						</button>
					</div>
				</article>

			</>}
			<article className="heje">

				<div>
					<HamsterCard
						imgName={hamsterWins.imgName}
						name={`Name: ${hamsterWins.name}`}
						age={`Age: ${hamsterWins.age}`}
						favFood={`Favorit Food: ${hamsterWins.favFood}`}
						loves={`Loves: ${hamsterWins.loves}`}
					/>
				</div>

			</article>

			<button onClick={() => setNewGame(!newGame)}>Two New Hamsters</button>
		</div>
	)
}

export default Battle
