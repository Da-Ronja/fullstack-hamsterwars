// [ ] Upload img with validation
// [ ] fetch POST request

//QUESTION onSubmit on button or on  form
import { useState } from "react"

const UploadNewHamster = () => {

	const [name, setName] = useState('')
	const [age, setAge] = useState(0)
	const [favFood, setFavFood] = useState('')
	const [loves, setLoves] = useState('')

	const handleSubmit = (event) => {
		event.preventDefault()

		const newHamster = {
			name,
			age: Number(age),
			favFood,
			loves,
			wins: 0,
			defeats: 0,
			games: 0
		};

		console.log(newHamster)
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
