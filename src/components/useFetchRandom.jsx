//[ ] Create error message to display to 
import { useState, useEffect } from 'react';

const useFetch = () => {
	const [hamsterOne, setHamsterOne] = useState([]);
	const [hamsterTwo, setHamsterTwo] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);

	//On params changes
	useEffect(() => {
		const urlRandom = 'http://localhost:1357/hamsters/random'
		const fetchRandomHamster = async () => {
			try {
				setIsLoaded(true);
				const responseOne = await fetch(urlRandom);
				const resultOme = await responseOne.json();

				const responseTwo = await fetch(urlRandom);
				const resultTwo = await responseTwo.json();

				setIsLoaded(false);

				if (resultOme.id === resultTwo.id) {
					console.log("Two of the same!")
					// 	newGame ? setNewGame(false) : setNewGame(true);

				} else {
					setHamsterOne(resultOme)
					setHamsterTwo(resultTwo);
				}
			} catch (error) {
				setIsLoaded(false);
				setError(error.message)
				return error.message;
			}
		};
		fetchRandomHamster();
	}, []);
	return { hamsterOne, hamsterTwo, isLoaded, error }
}

export default useFetch