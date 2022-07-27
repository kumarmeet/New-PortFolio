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
				<AnchorTag href="#pro">Projects</AnchorTag>
				<AnchorTag href="#abt">About</AnchorTag>
				<AnchorTag href="#cnt">Contact</AnchorTag>
			</MainLI>
			<MainLI>
				<AnchorTag href="#">
					<i className="devicon-facebook-plain"></i>
				</AnchorTag>
				<AnchorTag href="#">
					<i className="devicon-github-original"></i>
				</AnchorTag>
				<AnchorTag href="#">
					<i className="devicon-linkedin-plain"></i>
				</AnchorTag>
			</MainLI>
		</ContainerNavigatorUL>
	);
};

export default Navigator;
