
import { useParams } from "react-router"
import { useHistory } from 'react-router-dom'
import useFetch from "../useFetch";

const HamsterProfile = () => {

	const { id } = useParams();
	const urlHamesteById = '/hamsters/' + id
	const { data: hamster, isLoaded, error } = useFetch(urlHamesteById)
	// const [loserHamsters, setLoserHamsters] = useState([])


	const history = useHistory()

	const goBack = () => {
		history.go(-1)
	}


	const deleteHamster = async (id) => {
		//console.log('Delete hamster', id)

		if ((window.confirm("Delete the item?"))) {
			console.log('throw the hamster away')

			try {
				await fetch('/hamsters/' + id, {
					method: "DELETE"
				});
				//console.log(id)

				history.push('/');

			} catch (error) {
				//setError(error.message)
				return error.message;
			}
		} else {
			console.log('No! Keep the hamster')
		}
	}




	return (
		<div className="main-container">

			{ isLoaded ? <p>Loading...</p> : <>

				<button onClick={goBack}>Go Back</button>
				{error && <div>
					<p>{error}</p>
					<p>Try refreshing the page or come back later and try again</p>
					<button onClick={() => window.location.reload(false)}>Reload page</button>
				</div>
				}
				{hamster && (
					<>
						<h2>{`Name: ${hamster.name}`}</h2>
						<article className="grid-content">
							<div className="hamster-profile-card-img">
								<img
									src={`/assets/${hamster.imgName}`}
									alt={hamster.name}
								/>
							</div>
							{/* <div className="hamster-profile-info-flex"> */}
							<div className="hamster-profile-info-text">
								<p>{`Age: ${hamster.age}`}</p>
								<p>{`Favorit Food: ${hamster.favFood}`}</p>
								<p>{`Loves: ${hamster.loves}`}</p>
								<p>{`Wins: ${hamster.wins}`}</p>
								<p>{`Defeats: ${hamster.defeats}`}</p>
								<p>{`Games: ${hamster.games}`}</p>
							</div>

						</article>
						<button onClick={() => deleteHamster(hamster.id)}>Delete Hamster</button>
					</>
				)}

			</>}
			<div>

			</div>
		</div >
	)
}

export default HamsterProfile
