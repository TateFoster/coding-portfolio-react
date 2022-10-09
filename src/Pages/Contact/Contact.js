import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import "./Contact.css";

export default function Contact() {
	let [name, setName] = useState("");
	let [email, setEmail] = useState("");
	let [message, setMessage] = useState("");

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"YOUR_SERVICE_ID",
				"YOUR_TEMPLATE_ID",
				form.current,
				"YOUR_PUBLIC_KEY"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="containerContact">
			<div className="emailBox">
				<p className="selfInfo">
					Phone: (720)496-3767 <br></br>Email: tate.j.foster@gmail.com
				</p>
				<form ref={form} onSubmit={sendEmail} className="emailForm">
					<label for="nameInput" className="labelContact">
						Name:
					</label>
					<input
						type="text"
						name="user_name"
						id="nameInput"
						placeholder="Your name here!"
					/>
					<label for="emailInput" className="labelContact">
						Email:
					</label>
					<input
						type="email"
						name="user_email"
						id="emailInput"
						placeholder="Your email here!"
					/>
					<label for="messageInput" className="labelContact">
						Message:
					</label>
					<textarea
						name="message"
						id="messageInput"
						placeholder="What would you like to tell me?"
					/>
					<input className="contactBtn" type="submit" value="Send" />
				</form>
			</div>
		</div>
	);
}
