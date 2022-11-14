import headshot from "./tate-headshot.jpg";

export default function NoHat({ profileImageChange, showLinks }) {
	return (
		<img
			onMouseLeave={profileImageChange}
			className="profileImg"
			src={headshot}
			alt="Tate Foster in nature background"
			onClick={showLinks}
		></img>
	);
}
