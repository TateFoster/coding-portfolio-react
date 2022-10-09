import "./Contact.css";

export default function Contact() {
	return (
		<div className="containerContact">
			<div className="emailBox">
				<p className="selfInfo">
					Phone: (720)496-3767 <br></br>Email: tate.j.foster@gmail.com
				</p>
				<label for="nameInput">Name:</label>
				<input type="text" id="nameInput" placeholder="Your name here!"></input>
				<label for="emailInput">Email:</label>
				<input
					type="text"
					id="emailInput"
					placeholder="Your email here!"
				></input>
				<label for="messageInput">Message:</label>
				<input
					type="text"
					id="messageInput"
					placeholder="What would you like to tell me?"
				></input>
			</div>
		</div>
	);
}
