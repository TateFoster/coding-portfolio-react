import "./NavBar.css";
import { FaHamburger } from "react-icons/fa";

const showLinks = (e) => {
	e.preventDefault();
	const link = document.getElementById("linksNav");
	if (link.style.display === "flex") {
		link.style.display = "none";
	} else {
		link.style.display = "flex";
	}
};

export default function NavBar() {
	return (
		<div className="containerNav">
			<h1>Tate Foster</h1>
			<div className="iconNav" onClick={showLinks}>
				<FaHamburger />
			</div>
			<div className="linksNav" id="linksNav">
				<a className="btnNav" href="/">
					About Me
				</a>

				<a className="btnNav" href="/projects">
					Projects
				</a>

				<a className="btnNav" href="/contact">
					Contact Me
				</a>

				<a className="btnNav" href="/resume">
					Resume
				</a>
			</div>
		</div>
	);
}
