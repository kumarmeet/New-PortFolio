import React from "react";
import { ContainerNavigatorUL, MainLI, AnchorTag } from "./Navigator.styled";

const Navigator = (props) => {
	return (
		<ContainerNavigatorUL>
			<MainLI>
				<AnchorTag href="#">Logo</AnchorTag>
			</MainLI>
			<MainLI>
				<AnchorTag href="#">Home</AnchorTag>
				<AnchorTag href="#">Projects</AnchorTag>
				<AnchorTag href="#">About</AnchorTag>
				<AnchorTag href="#">Contact</AnchorTag>
			</MainLI>
			<MainLI>
				<AnchorTag href="#">L</AnchorTag>
				<AnchorTag href="#">G</AnchorTag>
				<AnchorTag href="#">F</AnchorTag>
			</MainLI>
		</ContainerNavigatorUL>
	);
};

export default Navigator;
