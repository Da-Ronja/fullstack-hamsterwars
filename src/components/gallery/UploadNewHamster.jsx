// [ ] css + css för att förtydliga inputfälten
// [ ] tydliga felmedelanden vid fel inmatning
// [ ] validering av alla input fält så att den inte kan gå under 0
// [ ] Validerinf av fetch POST request
// [ ] Error message on input img 
// [ ] Lyckad uppladdning medelande

//QUESTION Till Sara Ska det vara input= text eller textarea??

import { useState } from "react"
//import { useHistory } from 'react-router-dom'

const UploadNewHamster = () => {

	//const fileInput = useRef(null)
	const [name, setName] = useState('')
	const [age, setAge] = useState(0)
	const [favFood, setFavFood] = useState('')
	const [loves, setLoves] = useState('')
	//const [ingFile, setIngFile] = useState(null)
	const [imgName, setImgName] = useState('')
	//const history = useHistory()

	const handleImgInput = (e) => {
		// handle validations
		const file = e.target.files[0];
		console.log(file);

		if (file.size > 1024) {
			console.log('File is to big');
		} else {
			//setIngFile(file)
			let fileName = file.name
			setImgName(fileName)
			console.log('Size is good');
		}
	}


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
			imgName
		};

		fetch('/hamsters/', {
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
				<label>Hamsters Name:
					<input
						type="text"
						required
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</label>

				<label>Hamsters Age:
					<input
						type="number"
						required
						onBlur={event => validateAgeInput(event)}
						value={age}
						onChange={(event) => setAge(event.target.value)}
					/>
				</label>
				<label>Hamsters Favorit Food:
					<input
						type="text"
						required
						value={favFood}
						onChange={(event) => setFavFood(event.target.value)}
					/>
				</label>
				<label>Hamster Loves:
					<input
						type="text"
						required
						value={loves}
						onChange={(event) => setLoves(event.target.value)}
					/>
				</label>
				{/* https://dev.to/faddalibrahim/filtering-and-validating-file-uploads-with-javascript-327p 
				https://codeforgeek.com/file-uploads-using-node-js/*/}
				<label>
					<input
						type="file"
						multiple accept=".jpg, .png"
						onChange={handleImgInput}
					/>
				</label>
				<button type="submit" >Upload Hamster</button>
			</form>
			<p> {name} </p>
			<p> {age} </p>
			<p> {favFood} </p>

		</div>
	)
}

export default UploadNewHamster
