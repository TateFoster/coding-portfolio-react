import "./Footer.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Footer() {
	return (
		<div className="containerFooter">
			<h3>Find Me At:</h3>
			<a
				href="https://github.com/TateFoster"
				target="_blank"
				className="linkFooter"
				rel="noreferrer"
			>
				<AiFillGithub className="iconFooter" />
			</a>
			<a
				href="https://www.linkedin.com/in/tate-foster-774620246/"
				target="_blank"
				className="linkFooter"
				rel="noreferrer"
			>
				<AiFillLinkedin className="iconFooter" />
			</a>
		</div>
	);
}
