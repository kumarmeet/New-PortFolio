import styled from "styled-components";

export const Main = styled.main`
	height: 95vh;
	margin: 0rem 2rem;
	border-radius: 0.4rem;
	color: #37393a;
	display: ${(props) => props.displayGrid};
	grid-template-columns: ${(props) => props.girdTempCol};
	grid-gap: ${(props) => props.gridGap};
`;
