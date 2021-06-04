import { useEffect, useState } from "react";
import './history.css'

const History = () => {

	const [matchWinners, setMatchWinners] = useState(null)
	const [matchLosers, setMatchLosers] = useState(null)
	// const [removed, setRemoved] = useState(false)



	useEffect(() => {
		const getWinnerAndLoser = async () => {
			try {
				const response = await fetch('/matches', { method: 'GET' });
				const data = await response.json();
				const latest = data.slice(-5).reverse();
				// console.log(latest);

				const winnerHamsters = latest.map(winner => winner.winnerId)
				const winnerResponse = await Promise.all(winnerHamsters.map(async id => fetch(`/hamsters/${id}`, { method: 'GET' })))
				const winnerData = await Promise.all(winnerResponse.map(res => res.json()))
				// console.log('winnerData');
				setMatchWinners(winnerData)

				const loserHamsters = latest.map(loser => loser.loserId)
				console.log('loserHamsters');

				// [ ] if hamster id dont exist gå to next

				const loserResponse = await Promise.all(loserHamsters.map(async id => fetch(`/hamsters/${id}`, { method: 'GET' })))
				console.log('loserResponse');

				const loserData = await Promise.all(loserResponse.map(res => res.json()))
				console.log('loserData');
				setMatchLosers(loserData)

			} catch (error) {
				console.log(error);

			}
		}
		getWinnerAndLoser()
	}, [])



	return (
		<div>


		</div>
	)
};

export default History;