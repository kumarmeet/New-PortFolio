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
				<AnchorTag href="#">
					<i class="devicon-facebook-plain"></i>
				</AnchorTag>
				<AnchorTag href="#">
					<i class="devicon-github-original"></i>
				</AnchorTag>
				<AnchorTag href="#">
					<i class="devicon-linkedin-plain"></i>
				</AnchorTag>
			</MainLI>
		</ContainerNavigatorUL>
	);
};

export default Navigator;
