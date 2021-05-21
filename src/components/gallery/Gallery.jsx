//TODO
//[ ]	Css gid
//[ ]	Formulär för att skapa ny hamster
//[ ]	Tabort hamster

import React, { useState, useEffect } from 'react';

const Gallery = () => {

	const [hamsterDB, setHamsterDB] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {

		const fetchHamsters = async () => {
			try {
				setLoading(true);
				let url = 'http://localhost:1337/hamsters'
				const response = await fetch(url);
				const result = await response.json();

				setLoading(false);
				setHamsterDB(result)
				console.log(result);

			} catch (error) {
				return error;
			}
		};
		fetchHamsters();
	}, [])

	//FIXME get img to work
	const renderHamsters = hamsterDB.map(hamster => (
		<li key={hamster.id}>
			{hamster.name}
			<img src={`/hamsterImg/${hamster.imgName}`} alt={hamster.name} />
		</li>
	))


	return (
		<div className="content">
			<h1>All hamsters</h1>

			{ loading ? <p>Loading...</p> : <>
				<h2>Hamster Data</h2>
				{renderHamsters}
			</>}

		</div>
	)
}

export default Gallery;