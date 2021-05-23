// [ ] Upload img with validation
// [ ] css + css för att förtydliga inputfälten
// [ ] tydliga felmedelanden vid fel inmatning
// [ ] validering av siffror så att den inte kan gå under 0
// [ ] Validerinf av fetch POST request

//QUESTION onSubmit on button or on  form
//QUESTION Till Sara Ska det vara input= text eller textarea??

import { useState } from "react"
//import { useHistory } from 'react-router-dom'

const UploadNewHamster = () => {

	const [name, setName] = useState('')
	const [age, setAge] = useState(0)
	const [favFood, setFavFood] = useState('')
	const [loves, setLoves] = useState('')
	//const history = useHistory()

	const handleSubmit = (event) => {
		event.preventDefault()

		const newHamster = {
			name,
			age: Number(age),
			favFood,
			loves,
			wins: 0,
			defeats: 0,
			games: 0,
			imgName: "test.jpg"
		};

		fetch('http://localhost:1357/hamsters/', {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newHamster)
		}).then(() => {
			console.log('new hamster');
		})
		console.log(newHamster)
	}

	const validateAgeInput = (event) => {
		console.log(event.target.value);
		//NOTE validateAge
	}

	return (
		<div>
			<h2>Upload New Hamster</h2>
			<form onSubmit={handleSubmit}>
				<label>Hamsters Name:</label>
				<input
					type="text"
					required
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>
				<label>Hamsters Age:</label>
				<input
					type="number"
					required
					onBlur={event => validateAgeInput(event)}
					value={age}
					onChange={(event) => setAge(event.target.value)}
				/>
				<label>Hamsters Favorit Food:</label>
				<input
					type="text"
					required
					value={favFood}
					onChange={(event) => setFavFood(event.target.value)}
				/>
				<label>Hamster Loves:</label>
				<input
					type="text"
					required
					value={loves}
					onChange={(event) => setLoves(event.target.value)}
				/>
				<button>Upload Hamster</button>
			</form>
			<p> {name} </p>
			<p> {age} </p>
			<p> {favFood} </p>

		</div>
	)
}

export default UploadNewHamster
