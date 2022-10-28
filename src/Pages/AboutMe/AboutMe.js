import "./AboutMe.css";
import {
	DiNodejsSmall,
	DiJavascript1,
	DiBootstrap,
	DiReact,
	DiMysql,
	DiMongodb,
	DiCss3,
	DiHtml5,
} from "react-icons/di";
import { SiHandlebarsdotjs, SiExpress } from "react-icons/si";
import pig from "./programming-pig.jpg";

const showLinks = (e) => {
	e.preventDefault();
	const link = document.getElementById("linksNav");
	if (link.style.display === "flex") {
		link.style.display = "none";
	} else {
		link.style.display = "flex";
	}
};

export default function AboutMe() {
	return (
		<div className="containerAbout">
			<div className="profile">
				<h2>Hi there!</h2>
				<img
					className="profileImg"
					src={pig}
					alt="Guinea Pig at keyboard"
					onClick={showLinks}
				></img>
				<p>
					I'm a single dad now pursuing my dreams of being a full stack web
					developer with a passion for creating fun and easy to use
					applications! I have long had an interest in computers, first mostly
					as just an avid consumer of games and seeing the amazing advances in
					our lifetimes of AI learning.
				</p>
				<p>
					I finally allowed myself the opportunity to learn coding in a formal
					environment and found that I absolutely adored coding in all it's
					forms. I now seek to keep learning and improving my coding skills so
					that I can be the best computer wizard possible.
				</p>
			</div>
			<h3>Technologies:</h3>
			<div className="allIcons">
				<div className="iconBox">
					<DiJavascript1 className="icons" />
					JavaScript
				</div>
				<div className="iconBox">
					<DiHtml5 className="icons" />
					HTML5
				</div>
				<div className="iconBox">
					<DiCss3 className="icons" />
					CSS3
				</div>
				<div className="iconBox">
					<DiNodejsSmall className="icons" />
					NodeJS
				</div>
				<div className="iconBox">
					<SiExpress className="icons" />
					Express.js
				</div>
				<div className="iconBox">
					<SiHandlebarsdotjs className="icons" />
					Handlebars
				</div>
				<div className="iconBox">
					<DiReact className="icons" />
					React
				</div>
				<div className="iconBox">
					<DiBootstrap className="icons" />
					Bootstrap
				</div>
				<div className="iconBox">
					<DiMysql className="icons" />
					MySQL
				</div>
				<div className="iconBox">
					<DiMongodb className="icons" />
					MongoDB
				</div>
			</div>
		</div>
	);
}
