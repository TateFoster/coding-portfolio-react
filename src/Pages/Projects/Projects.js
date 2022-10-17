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
			description:
				"This is a web game to let the user play a trivia quiz based on old jeopardy questions. When the user loses, they are presented with a random cocktail recipe. The game stores the last recipe they received and their last score.",
		},
		{
			name: "Fair Fare",
			image: fairFare,
			liveSite: "https://fair-fare-app.herokuapp.com/",
			repository: "https://github.com/TateFoster/the-foo-d-s",
			altText:
				"Home page image of an application showing a menu to select food type with a picture of people enjoying food",
			description:
				"Restaurant Rating App for individual meals. Our task is to create a simple application that allows a user to provide a review of their favorite meals at restaurants that may not have received high ratings for their overall menus. This application will act as a message board for promoting great meals at restaurants that users may have overlooked because of the lower overall restaurant rating. This application will use custom API databases to provide updated user reviews.",
		},
		{
			name: "Employee Tracker",
			image: employeeTracker,
			repository: "https://github.com/TateFoster/employee-tracker",
			altText:
				"Image showing start of inline program showing prompts in the terminal",
			description:
				"This is an application that allows the user to navigate menus to see and input data into a database that keeps track of what departments there are, what roles there are, and the employees in a business. The application is able to allow the user to both input data into the database as well as remove it in addition to seeing the data available in a convenient manner. For departments the user can add or remove departments along with being able to see a summary that displays the current number of employees in a department and what their combined salary is. For roles the user is able to add or remove roles as well as see a summary of the roles within a department showing what roles that department has and how many employees are currently in each position. For employees the user is able to add, remove or update current employees along with being able to see the list of employees separated out in various manners. They can update an employee to have a new role in the database or change the current manager of an employee. The user can view the employees separated by what department they are part of, what position they have and who their manager is.",
		},
		{
			name: "Bubble DungeonZ",
			image: bubbleDungeonZ,
			liveSite: "https://sleepy-mountain-95539.herokuapp.com/",
			repository: "https://github.com/l1keafox/bubbleDungeonz",
			altText:
				"Front page of the website showing a featured game as well as high scores from the game",
			description:
				"Arcade website where you can create an account pick games to play, make friends, send messages and chat. Keeps track of score that players scored in the games they play. Customized avatar and settings.",
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
						<p className="projectDescription">{projects[index].description}</p>
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
