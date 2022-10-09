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
				"service_vurdfr8",
				"template_5t28jhk",
				form.current,
				"wLhC0JnGc5IBZlq4h"
			)
			.then(
				(result) => {
					console.log(result.text);
					setMessage("");
					setEmail("");
					setName("");
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const textChange = (e) => {
		if (e.target.id === "nameInput") {
			setName(e.target.value);
		} else if (e.target.id === "emailInput") {
			setEmail(e.target.value);
		} else {
			setMessage(e.target.value);
		}
	};

	return (
		<div className="containerContact">
			<div className="emailBox">
				<p className="selfInfo">
					Phone: (720)496-3767 <br></br>Email: tate.j.foster@gmail.com
				</p>
				<form ref={form} onSubmit={sendEmail} className="emailForm">
					<div name="to_name" id="toName">
						Tate Foster
					</div>
					<label for="nameInput" className="labelContact">
						Name:
					</label>
					<input
						value={name}
						type="text"
						name="from_name"
						id="nameInput"
						placeholder="Your name here!"
						onChange={textChange}
					/>
					<label for="emailInput" className="labelContact">
						Email:
					</label>
					<input
						value={email}
						type="email"
						name="reply_to"
						id="emailInput"
						placeholder="Your email here!"
						onChange={textChange}
					/>
					<label for="messageInput" className="labelContact">
						Message:
					</label>
					<textarea
						value={message}
						name="message"
						id="messageInput"
						placeholder="What would you like to tell me?"
						onChange={textChange}
					/>
					<input className="contactBtn" type="submit" value="Send" />
				</form>
			</div>
		</div>
	);
}
