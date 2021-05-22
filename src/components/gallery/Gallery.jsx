//TODO
//[ ]	Css gid
//[ ]	Formulär för att skapa ny hamster
//[ ]	Tabort hamster
import { Link } from "react-router-dom"
import React, { useState } from 'react';
import useFetch from "../useFetch";

const Gallery = () => {

	const { data: hamsters, isLoaded, error } = useFetch('http://localhost:1357/hamsters')

	console.log('data bd:', hamsters)


	// PAINATION
	const hamsterPerPage = 3
	const [currentPage, setCurrentPage] = useState(1);

	const displayPage = hamsters.slice(currentPage, currentPage + hamsterPerPage)
	console.log(displayPage, 'displayPage');

	let maxPage = Math.ceil(hamsters.length / hamsterPerPage)
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
			<Link to={`/hamsterCard/${hamster.id}`}>
				<p>{`Name: ${hamster.name}`}</p>
				<img src={`/assets/${hamster.imgName}`} alt={hamster.name} />
			</Link>
		</li>
	))


	return (
		<div className="content">
			<h1>All hamsters</h1>

			{ isLoaded ? <p>Loading...</p> : <>
				<h2>Hamster Data</h2>
				{error && <div>{error}</div>}
				{renderHamsters}

				<button onClick={prevPage}>Prev</button>
				<button onClick={nextPage}>Next</button>
			</>}

		</div>
	)
}

export default Gallery;