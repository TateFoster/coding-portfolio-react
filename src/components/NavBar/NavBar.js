import "./NavBar.css";
import { FaHamburger } from "react-icons/fa";

const showLinks = (e) => {
	e.preventDefault();
	const link = document.getElementById("links");
	if (link.style.display === "flex") {
		link.style.display = "none";
	} else {
		link.style.display = "flex";
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
				<a className="box" href="/">
					About Me
				</a>

				<a className="box" href="/projects">
					Projects
				</a>

				<a className="box" href="/contact">
					Contact Me
				</a>

				<a className="box" href="/resume">
					Resume
				</a>
			</div>
		</div>
	);
}
