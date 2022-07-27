import styled from "styled-components";

export const ContactForm = styled.form`
	text-align: left;

	input {
		padding: 1rem;
		font-size: 1rem;
		border-width: 0px;
		border-color: #cccccc;
		background-color: #fcdf60fd;
		color: #000000;
		margin-bottom: 4px;
		width: 60%;

		:focus {
			outline: none;
		}
	}

	textarea {
		padding: 1rem;
		resize: vertical;
		font-family: inherit !important;
		font-size: 1rem;
		background-color: #fcdf60fd;

		:focus {
			outline: none;
		}
	}

	button {
		font-family: inherit;
		font-weight: 600;
		color: #545657;
		font-size: 1.4rem;
		background: #fcdb47;
		padding: 10px 20px 10px 20px;
		border: solid #fcdb47 2px;
		text-decoration: none;
		cursor: pointer;

		:hover {
			background: #c0a83bfd;
			border: solid #c0a83bfd 2px;
			text-decoration: none;
		}
	}
`;
