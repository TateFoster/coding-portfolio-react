import { useState } from "react";

const style = {};

export default function NavBar() {
	let [page, setPage] = useState("about");

	const pageChoice = (e) => {
		setPage(e.target.id);
	};

	return (
		<>
			<button className="" id="about" onClick={pageChoice}>
				About Me
			</button>
			<button className="" id="projects" onClick={pageChoice}>
				Projects
			</button>
			<button className="" id="contact" onClick={pageChoice}>
				Contact me
			</button>
		</>
	);
}
