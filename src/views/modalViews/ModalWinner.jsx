import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import HamsterCard from "../../components/HamsterCard";
import { Link } from "react-router-dom"
import "./modal.css"
//https://upmostly.com/tutorials/modal-components-react-custom-hooks


const ModalWinner = ({ isShowing, hide, hamsterWins, hamsterLoser }) => isShowing ? ReactDOM.createPortal(
	<React.Fragment>
		<div className="modal-overlay" />
		<div
			className="modal-wrapper"
			aria-modal aria-hidden
			tabIndex={-1}
			role="dialog"
		>
			<div className="modal">
				<div className="modal-header">
				</div>
				<div className="modal">
					<h2>{hamsterWins.name} killed {hamsterLoser.name} with cutness!</h2>
					<p>{hamsterWins.name} has won {hamsterWins.wins + 1} out of {hamsterWins.games + 1} games and lost {hamsterWins.defeats}.</p>

					<section className="grid-content">
						<div className="winner-article">
							<>
								<Link to={`/HamsterProfile/${hamsterWins.id}`}>
									<HamsterCard
										imgName={hamsterWins.imgName}
									/>
								Visit {hamsterWins.name}
								</Link>
							</>
						</div>


						<div className="loser-article">
							<>
								<Link to={`/HamsterProfile/${hamsterLoser.id}`}>
									<HamsterCard
										imgName={hamsterLoser.imgName}
									/>
								Visit {hamsterLoser.name}
								</Link>
								<div className="modal-battle-vinner-text">
									<p>who has:
									lost {hamsterLoser.defeats + 1},
									won {hamsterLoser.wins},
									a total of {hamsterLoser.games + 1} games</p>
								</div>
							</>
						</div>
					</section>
					<div>
						<button
							type="button"
							className="modal-close-button" data-dismiss="modal"
							aria-label="Close"
							onClick={hide}
						>
							Play again!
						</button>
					</div>
				</div>
			</div>
		</div>
	</React.Fragment>, document.body
) : null;

export default ModalWinner;