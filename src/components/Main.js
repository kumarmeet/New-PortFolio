import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
	width: 40%;
	text-align: center;
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;

	@media screen and (max-width: 780px) {
		h1 {
			font-size: 4rem !important;
		}

		h3 {
			font-size: 1.4rem !important;
		}

		p {
			font-size: 1rem !important;
		}
	}
`;

const Main = () => {
	return (
		<MainContainer>
			<h1 style={{ fontSize: "8rem", color: "#fcdb47" }}>MEET</h1>
			<h3 style={{ fontSize: "3rem", color: "white", marginBottom: "0.8rem" }}>
				Node.js Developer
			</h3>
			<p style={{ textAlign: "justify", color: "#E9E9E7" }}>
				Since styled-components allows you to use arbitrary input as
				interpolations, you must be careful to sanitize that input. Using user
				input as styles can lead to any CSS being evaluated in the user's
				browser that an attacker can place in your Mainlication.
			</p>
		</MainContainer>
	);
};

export default Main;
