//TODO
//[ ]	Css gid
//[ ]	Formulär för att skapa ny hamster
//[ ]	Tabort hamster
//IDEA Show hamsterName when hovoring over img
//https://stackoverflow.com/questions/14263594/how-to-show-text-on-image-when-hovering

//QUESTION hur gör jag för att spara vart i arryen jag är för att gå tillbacka från HamsteCard
import { Link } from "react-router-dom"
import React, { useState } from 'react';
import useFetch from "../useFetch";
import UploadNewHamster from "./UploadNewHamster";
import HamsterCard from "../HamsterCard";

const Gallery = () => {

	const { data: hamsters, isLoaded, error } = useFetch('http://localhost:1357/hamsters')
	//console.log(hamsters);

	// PAINATION
	const hamsterPerPage = 3
	const [currentPage, setCurrentPage] = useState(1);

	const displayPage = hamsters.slice(currentPage, currentPage + hamsterPerPage)
	//console.log(displayPage, 'displayPage');

	let maxPage = Math.ceil(hamsters.length / hamsterPerPage)
	//console.log(maxPage, 'maxPage ');

	function nextPage() {
		setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage))
	}

	const prevPage = () => {
		setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
	}


	// Hamster-object List
	//FIXME get img to work
	const renderHamsters = displayPage.map(hamsters => (
		<li key={hamsters.id}>
			<Link to={`/HamsterProfile/${hamsters.id}`}>
				<HamsterCard
					imgName={hamsters.imgName}
					name={`Name: ${hamsters.name}`}
				/>

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

			<UploadNewHamster />

		</div>
	)
}

export default Gallery;