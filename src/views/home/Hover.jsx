import React, { useState, useEffect } from 'react';
import './hover.css'

const Hover = () => {

	const allUrl = '/hamsters/0q37IGAQPbvfI62SIP0A';
	const [hamster, setHamster] = useState([]);
	//console.log(hamster)

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(allUrl, { method: 'GET' });
				const result = await response.json();
				setHamster(result)
			} catch (error) {
				return error.message;
			}
		}
		fetchData();
	}, []);


	return (
		<div className="hover">
			<h2>Hamster Data</h2>
			<div className="image">
				<img className="image__img" src={`/assets/${hamster.imgName}`} alt={hamster.name} />
				<div className="image__overlay">
					<h2 className="image__title">{`Name: ${hamster.name}`}</h2>
					<div className="image__description">
						<p>{`Age: ${hamster.age}`}</p>
						<p>{`Favorit Food: ${hamster.favFood}`}</p>
						<p>{`Loves: ${hamster.loves}`}</p>
					</div>
				</div>
			</div>
			{/* <figure className="effect-goliath">
				<img src={`/assets/${hamster.imgName}`} alt={hamster.name} />
				<figcaption>
					<h2>{`Name: ${hamster.name}`}</h2>
					<div className="hide">
						<p>{`Age: ${hamster.age}`}</p>
						<p>{`Favorit Food: ${hamster.favFood}`}</p>
						<p>{`Loves: ${hamster.loves}`}</p>
					</div>
				</figcaption> 
			</figure>*/}
		</div >
	)
}

export default Hover
