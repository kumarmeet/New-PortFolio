import styled from "styled-components";

export const InnerCard = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	width: 22%;
	border-radius: 0.4rem;
	border-radius: ${(props) => {
		return props.borderRadius == "0" ? props.borderRadius : "0.4rem";
	}};
	background-color: ${(props) => {
		return props.backgroundColor == "none" ? props.backgroundColor : "#fcdb47";
	}};
	text-align: center;
	padding: 1rem;
	color: ${(props) => (props.color == "white" ? props.color : "")};
`;
