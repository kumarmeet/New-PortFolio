import React, { useRef } from "react";

import { ContactForm } from "./Form.styled";

const Form = (props) => {
	const nameRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		console.log(
			nameRef.current.value,
			emailRef.current.value,
			messageRef.current.value
		);

		nameRef.current.value = "";
		emailRef.current.value = "";
		messageRef.current.value = "";
	};

	return (
		<ContactForm onSubmit={submitHandler}>
			<section>
				<input
					ref={nameRef}
					type="text"
					id="useName"
					name="useName"
					placeholder="Name"
					required="true"
				/>
			</section>
			<section>
				<input
					ref={emailRef}
					type="email"
					id="userEmail"
					name="userEmail"
					placeholder="Email"
					required="true"
				/>
			</section>
			<textarea
				ref={messageRef}
				name="userMessage"
				id="userMessage"
				rows="8"
				cols="50"
				placeholder="Message"
			></textarea>
			<p>
				<button type="submit">Submit</button>
			</p>
		</ContactForm>
	);
};

export default Form;
