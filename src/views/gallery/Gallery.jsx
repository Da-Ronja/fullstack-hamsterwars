//TODO
// [ ] Vg del ( visa vilka hamstern har besegrat) -ska ligga i hamsterProfile.
//IDEA Show hamsterName when hovoring over img
//https://stackoverflow.com/questions/14263594/how-to-show-text-on-image-when-hovering


import React, { useState } from 'react';
import { Link } from "react-router-dom"
import useFetch from "../useFetch";
import HamsterCard from "../../components/HamsterCard";
import ModalForms from "../modalViews/ModalForms";
import './gallery.css';

const Gallery = () => {
	const hamsterPerPage = 3
	const [currentPage, setCurrentPage] = useState(0);
	const [data, setData] = useState(3);
	const [isShowing, setIsShowing] = useState(false)
	const { data: hamsters, isLoaded, error } = useFetch('/hamsters')
	// console.log(hamsters)

	function toggle() {
		setIsShowing(!isShowing);
	}

	// PAINATION
	const displayPage = hamsters.slice(currentPage, currentPage + hamsterPerPage)
	// console.log(displayPage, 'displayPage');

	function nextPage() {
		if (currentPage < hamsters.length - 1) {
			setData(data + 1)
			setCurrentPage(currentPage => currentPage + hamsterPerPage)
		}
	}

	const prevPage = () => {
		if (currentPage > 1) {
			//console.log('prevPage right');
			setCurrentPage(currentPage => currentPage - hamsterPerPage)
		}
	}
	// console.log(currentPage, 'currentPage ');

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
					<div className="grid-content">
						{renderHamsters}
					</div>
				</article>
				<button onClick={prevPage}>Prev</button>
				<button onClick={nextPage}>Next</button>
			</>}
		</div>
	)
}

export default Gallery;