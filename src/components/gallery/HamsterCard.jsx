import { useParams } from "react-router"


const HamsterCard = () => {
	const { id } = useParams();

	return (
		<div>
			<h2>Hamster - {id}</h2>
		</div>
	)
}

export default HamsterCard
