import styled from "styled-components";

export const ContainerNavigatorUL = styled.ul`
	display: flex;
	justify-content: space-evenly;
	list-style: none;
	padding: 2rem;
`;

export const MainLI = styled.li`
	display: flex;
	justify-content: space-evenly;
	list-style: none;
	width: 34%;
`;

export const AnchorTag = styled.a`
	color: white;
	font-size: 1.4rem;
	text-decoration: none;
	transition: all 500ms;

	:hover {
		color: #fcdb47;
	}
`;
