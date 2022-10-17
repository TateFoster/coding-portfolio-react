import { useState } from "react";
import "./Projects.css";
import fairFare from "./fair-fare.png";
import pourLoser from "./pour-loser.png";
import employeeTracker from "./employee-tracker.PNG";
import bubbleDungeonZ from "./bubble-dungeonZ.png";

export default function Projects() {
	let [index, setIndex] = useState(0);

	const projects = [
		{
			name: "Pour Loser",
			image: pourLoser,
			liveSite: "https://tatefoster.github.io/pour-loser-game/",
			repository: "https://github.com/TateFoster/pour-loser-game",
			altText:
				"Image of the start of a trivia game board prompting the user to begin",
		},
		{
			name: "Fair Fare",
			image: fairFare,
			liveSite: "https://fair-fare-app.herokuapp.com/",
			repository: "https://github.com/TateFoster/the-foo-d-s",
			altText:
				"Home page image of an application showing a menu to select food type with a picture of people enjoying food",
		},
		{
			name: "Employee Tracker",
			image: employeeTracker,
			repository: "https://github.com/TateFoster/employee-tracker",
			altText:
				"Image showing start of inline program showing prompts in the terminal",
		},
		{
			name: "Bubble DungeonZ",
			image: bubbleDungeonZ,
			liveSite: "https://sleepy-mountain-95539.herokuapp.com/",
			repository: "https://github.com/l1keafox/bubbleDungeonz",
			altText:
				"Front page of the website showing a featured game as well as high scores from the game",
		},
	];

	const addToIndex = () => {
		if (index < projects.length - 1) {
			setIndex(index + 1);
		} else {
			setIndex(0);
		}
	};

	const subtractFromIndex = () => {
		if (index > 0) {
			setIndex(index - 1);
		} else {
			setIndex(projects.length - 1);
		}
	};

	const flipLeft = () => {
		const card = document.getElementById("cardProject");
		card.classList.add("flip-2-ver-left-2");
		card.classList.remove("flip-2-ver-left-2");
	};
	const flipRight = () => {
		const card = document.getElementById("cardProject");
		card.classList.add("flip-2-ver-right-2");
		card.classList.remove("flip-2-ver-right-2");
	};

	return (
		<div className="projectsContainer">
			<div id="cardProject" className="cardProject">
				<h2>{projects[index].name}</h2>
				<div className="imageSection">
					<div
						className="btnProjects lrgScreen"
						onClick={(e) => {
							e.preventDefault();
							subtractFromIndex();
							flipLeft();
						}}
					>
						Prev
					</div>

					<img
						className="projectImage"
						src={projects[index].image}
						alt={projects[index].altText}
					></img>
					<div
						className="btnProjects lrgScreen"
						onClick={(e) => {
							e.preventDefault();
							addToIndex();
							flipRight();
						}}
					>
						Next
					</div>
				</div>
				<div className="cardFooter">
					<div
						className="btnProjects smlScreen"
						onClick={(e) => {
							e.preventDefault();
							subtractFromIndex();
							flipLeft();
						}}
					>
						Prev
					</div>
					<div className="linkBox">
						<a
							className="projectLink"
							href={projects[index].repository}
							target="_blank"
							rel="noreferrer"
						>
							Code
						</a>
						{projects[index].liveSite ? (
							<a
								className="projectLink"
								href={projects[index].liveSite}
								target="_blank"
								rel="noreferrer"
							>
								Application
							</a>
						) : (
							<></>
						)}
					</div>
					<div
						className="btnProjects smlScreen"
						onClick={(e) => {
							e.preventDefault();
							addToIndex();
							flipRight();
						}}
					>
						Next
					</div>
				</div>
			</div>
		</div>
	);
}
