//TODO
//[ ]	CSS
//[ ]	Fetch två randomHamster
//[ ] if-sats inte samma hamster
//[ ]	Hamster-obj ska visa bild och info om hamstern
//[ ]	Clickfunktion för hamsterobjekt 
//[ ]	Uppdatera respektiv hamsterobjekt (PUT-req)
//[ ] 	Visa resultat
// //[ ]	Initiera nästa match

//import { useState, useEffect } from 'react';
import UseFetchRandom from "../useFetchRandom";
import HamsterCard from "../HamsterCard";



const Battle = () => {
	//const [currentPage, setCurrentPage] = useState();

	const { hamsterOne, hamsterTwo, isLoaded, error } = UseFetchRandom()
	// console.log(hamsterOne);
	// console.log(hamsterTwo);

	const newGame = () => {
		console.log('HEj')
	}

	return (
		<div>
			<h1> Battle </h1>
			{ isLoaded ? <p>Loading...</p> : <>
				<h2>Hamster Data</h2>
				{error && <div>{error}</div>}

				<HamsterCard
					imgName={hamsterOne.imgName}
					name={`Name: ${hamsterOne.name}`}
					age={`Age: ${hamsterOne.age}`}
					favFood={`Favorit Food: ${hamsterOne.favFood}`}
					loves={`Loves: ${hamsterOne.loves}`}
				/>

				<HamsterCard
					imgName={hamsterTwo.imgName}
					name={`Name: ${hamsterTwo.name}`}
					age={`Age: ${hamsterTwo.age}`}
					favFood={`Favorit Food: ${hamsterTwo.favFood}`}
					loves={`Loves: ${hamsterTwo.loves}`}
				/>
			</>}
			<button onClick={newGame}>Two New Hamsters</button>
		</div>
	)
}

export default Battle
