import "./NavBar.css";
import { FaHamburger } from "react-icons/fa";

const showLinks = (e) => {
	e.preventDefault();
	const link = document.getElementById("links");
	if (link.style.display === "block") {
		link.style.display = "none";
	} else {
		link.style.display = "block";
	}
};

export default function NavBar() {
	return (
		<div className="container">
			<h1>Tate Foster</h1>
			<a href="" className="icon" onClick={showLinks}>
				<FaHamburger />
			</a>
			<div className="links" id="links">
				<div className="box">
					<a href="/">About Me</a>
				</div>
				<div className="box">
					<a href="/projects">Projects</a>
				</div>
				<div className="box">
					<a href="/contact">Contact Me</a>
				</div>
				<div className="box">
					<a href="/resume">Resume</a>
				</div>
			</div>
		</div>
	);
}
