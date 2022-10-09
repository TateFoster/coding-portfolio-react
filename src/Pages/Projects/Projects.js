import { useState } from "react";
import "./Projects.css";
import fairFare from "./fair-fare.png";
import pourLoser from "./pour-loser.png";
import employeeTracker from "./employee-tracker.PNG";

export default function Projects() {
	let [index, setIndex] = useState(0);

	const projects = [
		{
			name: "Pour Loser",
			image: pourLoser,
			liveSite: "https://tatefoster.github.io/pour-loser-game/",
			repository: "https://github.com/TateFoster/pour-loser-game",
		},
		{
			name: "Fair Fare",
			image: fairFare,
			liveSite: "https://fair-fare-app.herokuapp.com/",
			repository: "https://github.com/TateFoster/the-foo-d-s",
		},
		{
			name: "Employee Tracker",
			image: employeeTracker,
			repository: "https://github.com/TateFoster/employee-tracker",
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
				<img className="projectImage" src={projects[index].image}></img>
				<a
					className="projectLink"
					href={projects[index].repository}
					target="_blank"
				>
					Code
				</a>
				{projects[index].liveSite ? (
					<a
						className="projectLink"
						href={projects[index].liveSite}
						target="_blank"
					>
						Application
					</a>
				) : (
					<></>
				)}
			</div>
			<div
				className="btnProjects "
				onClick={(e) => {
					e.preventDefault();
					subtractFromIndex();
					flipLeft();
				}}
			>
				Prev
			</div>
			<div
				className="btnProjects"
				onClick={(e) => {
					e.preventDefault();
					addToIndex();
					flipRight();
				}}
			>
				Next
			</div>
		</div>
	);
}