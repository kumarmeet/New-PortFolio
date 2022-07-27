import React from "react";

import { Main } from "./Card.styled";

const Card = (props) => {
	return (
		<Main
			style={{
				backgroundColor: props.backgroundColor,
				padding: props.padding,
				display: props.display,
				height: props.height,
				justifyContent: props.justifyContent,
			}}
			displayGrid={props.displayGrid}
			girdTempCol={props.gridTempCol}
			gridGap={props.gridGap}
			id={props.id}
		>
			{props.children}
		</Main>
	);
};

export default Card;
