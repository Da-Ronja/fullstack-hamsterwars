//TODO
// [ ] 	Vg del spara data för matcher 

import { useState, useEffect } from 'react';
import HamsterCard from "../../components/HamsterCard";
import ModalWinner from "../modalViews/ModalWinner";
import "./battle.css"


const Battle = () => {

	const [hamsterOne, setHamsterOne] = useState([]);
	const [hamsterTwo, setHamsterTwo] = useState([]);

	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);
	const [newGame, setNewGame] = useState(true);
	const [isShowing, setIsShowing] = useState(false);

	const [hamsterWins, setHamsterWins] = useState([]);
	const [hamsterLoser, setHamsterLoser] = useState([]);
	// console.log(hamsterOne.id, hamsterOne.name);
	// console.log(hamsterTwo.id, hamsterTwo.name);

	function toggle() {
		setIsShowing(!isShowing);
	}


	useEffect(() => {
		const fetchRandomHamster = async () => {
			try {
				setIsLoaded(true);
				const responseOne = await fetch('/hamsters/random', { method: 'GET' });
				const responseTwo = await fetch('/hamsters/random', { method: 'GET' });

				if (!responseOne.ok || !responseTwo.ok) {
					if (responseOne.status === 500 || responseTwo.status === 500) {
						console.log('500 (internal server error)')
						throw Error('Could not fetch the data for that resourse.  Please try again')
					}
					throw Error('Oh No! Someting went wrong! The error has to do with status code:', responseOne.status, 'Please try again')
				}

				const resultOme = await responseOne.json();
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
				games: winner.games + 1
			}
			const loserUpdate = {
				defeats: loser.defeats + 1,
				games: loser.games + 1
			}

			// console.log('Winner', winner.name, winner.id, winnerUpdate,);
			// console.log('Loser', loser.name, loser.id, loserUpdate);

			setHamsterWins(winner)
			setHamsterLoser(loser)
			// toggle(isShowing, winner.id)
			updateHamster(winner.id, winnerUpdate);
			updateHamster(loser.id, loserUpdate);
			newMatchPost(winner.id, loser.id);
			toggle(isShowing)
			setNewGame(!newGame)

		}
	}

	const updateHamster = async (id, upDate) => {

		try {
			const response = await fetch(`/hamsters/${id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(upDate)
			});

			if (!response.ok) {
				if (response.status === 400) {
					console.log('400(bad request)')
					throw Error('It was a bad request. Please try again')
				}
				else if (response.status === 404) {
					console.log('404 (not found)')
					throw Error('Could not find the data for that resourse. Please try again')
				}
				else if (response.status === 500) {
					console.log('500 (internal server error)')
					throw Error('Could not POST the data for that resourse.  Please try again')
				}
				throw Error('Oh No! Someting went wrong! The error has to do with status code:', response.status, 'Please try again')
			}

			const hamsterData = await response.json();
			console.log('hej', hamsterData);

		} catch (error) {
			setError(error.message)
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

			if (!response.ok) {
				if (response.status === 400) {
					console.log('400(bad request)')
					throw Error('It was a bad request. Please try again')
				}
				else if (response.status === 404) {
					console.log('404 (not found)')
					throw Error('Could not find the data for that resourse. Please try again')
				}
				else if (response.status === 500) {
					console.log('500 (internal server error)')
					throw Error('Could not fetch the data for that resourse.  Please try again')
				}
				throw Error('Oh No! Someting went wrong! The error has to do with status code:', response.status, 'Please try again')
			}

			const matchData = await response.json();
			console.log('då', matchData);

			return matchData
		} catch (error) {
			setError(error.message)
			return error.message;
		}
	};


	return (
		<div className="main-container">
			<h1> Battle </h1>

			{isLoaded ? <p>Loading...</p> : <>

				{error &&
					<div className="error-message">
						<p>{error}</p>
						<button onClick={() => setNewGame(!newGame)}>Reload page</button>
					</div>
				}
				<article className="flex-content flex-content-space">

					<div className="battle-card">
						<div onClick={() => handleClick(hamsterOne, hamsterTwo)}>
							<HamsterCard
								imgName={hamsterOne.imgName}
								name={`Name: ${hamsterOne.name}`}
								age={`Age: ${hamsterOne.age}`}
								favFood={`Favorit Food: ${hamsterOne.favFood}`}
								loves={`Loves: ${hamsterOne.loves}`}
							/>
						</div>
						<button onClick={() => handleClick(hamsterOne, hamsterTwo)}>
							Pick {hamsterOne.name}
						</button>
					</div>

					<div onClick={() => handleClick(
						hamsterTwo, hamsterOne
					)}>
						<div className="battle-card">
							<HamsterCard
								imgName={hamsterTwo.imgName}
								name={`Name: ${hamsterTwo.name}`}
								age={`Age: ${hamsterTwo.age}`}
								favFood={`Favorit Food: ${hamsterTwo.favFood}`}
								loves={`Loves: ${hamsterTwo.loves}`}
							/>
						</div>
						<button onClick={() => handleClick(
							hamsterTwo, hamsterOne
						)}>
							Pick {hamsterTwo.name}
						</button>
					</div>
				</article>
			</>}
			<button onClick={() => setNewGame(!newGame)}>Two New Hamsters</button>


			<ModalWinner
				isShowing={isShowing}
				hide={toggle}
				hamsterWins={hamsterWins}
				hamsterLoser={hamsterLoser}
			/>
		</div>
	)
}

export default Battle
