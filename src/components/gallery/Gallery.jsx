//TODO
//[ ]	Css gid
//[ ]	Formulär för att skapa ny hamster
//[ ]	Tabort hamster

import React, { useState, useEffect } from 'react';

const Gallery = () => {

	const [hamsterDB, setHamsterDB] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	// PAINATION
	const hamsterPerPage = 3
	const [currentPage, setCurrentPage] = useState(1);


	// FETCH
	useEffect(() => {

		const fetchHamsters = async () => {
			try {
				setIsLoaded(true);
				//let url = '/hamstersRoute'
				let url = 'http://localhost:1337/hamsters'
				const response = await fetch(url);
				const result = await response.json();

				setIsLoaded(false);
				setHamsterDB(result)
				//console.log(result);

			} catch (error) {
				setIsLoaded(false);
				console.error(error);
				return null;
			}
		};
		fetchHamsters();
	}, [])


	// PLAGINATION
	const displayPage = hamsterDB.slice(currentPage, currentPage + hamsterPerPage)
	console.log(displayPage, 'displayPage');

	let maxPage = Math.ceil(hamsterDB.length / hamsterPerPage)
	console.log(maxPage, 'maxPage ');

	function nextPage() {
		setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage))
	}

	const prevPage = () => {
		setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
	}

	// Hamster-object List
	//FIXME get img to work
	const renderHamsters = displayPage.map(hamster => (
		<li key={hamster.id}>
			<p>{`Name: ${hamster.name}`}</p>
			<img src={`/assets/${hamster.imgName}`} alt={hamster.name} />
		</li>
	))


	return (
		<div className="content">
			<h1>All hamsters</h1>

			{ isLoaded ? <p>Loading...</p> : <>
				<h2>Hamster Data</h2>
				{renderHamsters}

				<button onClick={prevPage}>Prev</button>
				<button onClick={nextPage}>Next</button>
			</>}

		</div>
	)
}

export default Gallery;