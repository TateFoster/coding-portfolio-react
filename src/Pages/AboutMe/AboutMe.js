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

export default function AboutMe() {
	return (
		<div className="container">
			<img className="profile" src={pig} alt="Guinea Pig at keyboard"></img>
			<p>Hi there!</p>
			<p>
				I'm a full stack web developer with a passion for creating fun and easy
				to use applications!
			</p>
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
