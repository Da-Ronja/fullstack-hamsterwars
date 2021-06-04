

import React, { useState } from 'react';
import { Link } from "react-router-dom"
import useFetch from "../useFetch";
import HamsterCard from "../../components/HamsterCard";
import ModalForms from "../modalViews/ModalForms";
import './gallery.css';

const Gallery = () => {
	const hamsterPerPage = 6

	const [currentPage, setCurrentPage] = useState(0);
	const [stopData, setStopData] = useState(3);
	const [isShowing, setIsShowing] = useState(false)
	const { data: hamsters, isLoaded, error } = useFetch('/hamsters')
	//console.log(hamsters)

	function toggle() {
		setIsShowing(!isShowing);
	}

	// PAINATION
	const displayPage = hamsters.slice(currentPage, currentPage + hamsterPerPage)
	console.log(displayPage, 'displayPage');
	// console.log();

	function nextPage() {
		if (currentPage < hamsters.length - 1) {
			setStopData(stopData + 1)
			setCurrentPage(currentPage => currentPage + hamsterPerPage)
		}
	}

	const prevPage = () => {
		if (currentPage > 1) {
			console.log('prevPage right');
			setCurrentPage(currentPage => currentPage - hamsterPerPage)
		}
	}
	console.log(currentPage, 'currentPage ');

	const renderHamsters = displayPage.map(hamsters => (
		<li key={hamsters.id} className="list-card">
			<Link to={`/HamsterProfile/${hamsters.id}`} className="list-card-link">
				<HamsterCard
					imgName={hamsters.imgName}
					name={`Name: ${hamsters.name}`}
				/>
			</Link>
		</li>
	))


	return (
		<div className="main-container">
			<h1>All hamsters</h1>

			<button
				className="button-default"
				onClick={toggle}
			>
				Add new Hamster
			</button>
			<ModalForms
				isShowing={isShowing}
				hide={toggle}
			/>

			{ isLoaded ? <p>Loading...</p> : <>
				<article className="gallery-list">
					{error &&
						<div className="error-message">
							<p>{error}</p>
							<button onClick={() => window.location.reload(false)}>Reload page</button>
						</div>
					}
					<div className="gallery-placement">
						<button onClick={nextPage} className="arrow-button">Next</button>
						<div className="grid-content">
							{renderHamsters}
						</div>
						<button onClick={prevPage} className="arrow-button">Prev</button>
					</div>
				</article>
			</>}
		</div>
	)
}

export default Gallery;