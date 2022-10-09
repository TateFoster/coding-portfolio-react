import "./Resume.css";
import { MdOutlineFileDownload } from "react-icons/md";
import resume from "./coding-resume.pdf";

export default function Resume() {
	return (
		<div className="containerResume">
			<a className="downloadBox" href={resume} download="Tate Foster Resume">
				Download Resume <MdOutlineFileDownload />
			</a>
		</div>
	);
}
