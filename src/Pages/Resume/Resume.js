import "./Resume.css";
import { MdOutlineFileDownload } from "react-icons/md";
import resume from "./tate-resume.pdf";
import resumeImg from "./tate-resume-1.png";

export default function Resume() {
	return (
		<div className="containerResume">
			<a className="downloadBox" href={resume} download="Tate Foster Resume">
				Download Resume <MdOutlineFileDownload />
			</a>
			<img
				className="resumeImg"
				src={resumeImg}
				alt="Tate Foster's resume"
			></img>
		</div>
	);
}
