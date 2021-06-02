import './stats.css';
import useFetch from "../useFetch";

const Stats = () => {

	const { data: topFiveWinnwes, isLoaded: isLoadedWin, error: errorWin } = useFetch('/winners')
	const { data: topFiveLosers, isLoaded: isLoadedLose, error: errorLose } = useFetch('/losers')

	// console.log(topFiveWinnwes);
	// console.log(topFiveLosers);

	const renderWinnwes = topFiveWinnwes.map(hamster => (
		<li key={hamster.id} className="statsHamsters">
			<p style={{ fontWeight: "bold" }}>{`Name: ${hamster.name}`} </p>
			<p>{`Wins: ${hamster.wins}`} </p>
			<p>{`Games: ${hamster.games}`} </p>
		</li>
	))
	const renderLosers = topFiveLosers.map(hamster => (
		<li key={hamster.id} className="statsHamsters">
			<p style={{ fontWeight: "bold" }}>{`Name: ${hamster.name}`} </p>
			<p>{`Defeats: ${hamster.defeats}`} </p>
			<p>{`Games: ${hamster.games}`} </p>
		</li>
	))


	return (
		<div className="main-container">
			<h1>Stats</h1>

			<article className="flex-content">
				{isLoadedWin ? <p>Loading...</p> : <>
					<section className="stats-list">
						<h2>Top 5 hamsters</h2>
						{errorWin &&
							<div className="error-message">
								<p>{errorWin}</p>
								<button onClick={() => window.location.reload(false)}>Reload page</button>
							</div>
						}
						<ol>
							{renderWinnwes}
						</ol>
					</section>
				</>}



				{isLoadedLose ? <p>Loading...</p> : <>
					<section className="stats-list">
						<h2>Bottom 5 hamsters</h2>
						{errorLose &&
							<div className="error-message">
								<p>{errorLose}</p>
								<button onClick={() => window.location.reload(false)}>Reload page</button>
							</div>
						}
						<ol>
							{renderLosers}
						</ol>
					</section>
				</>}
			</article>
		</div>
	)
}

export default Stats;