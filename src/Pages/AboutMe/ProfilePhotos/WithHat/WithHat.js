import hat from "./tate-headshot-hat.jpg";

export default function WithHat({ profileImageChange, showLinks }) {
	return (
		<img
			onMouseEnter={profileImageChange}
			className="profileImg"
			src={hat}
			alt="Tate Foster with hat on in nature background"
			onClick={showLinks}
		></img>
	);
}
