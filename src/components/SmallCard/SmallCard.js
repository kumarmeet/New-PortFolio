import React from "react";

import { InnerCard } from "./SmallCard.styled";

const SmallCard = (props) => {
	return (
		<InnerCard
			style={{ width: props.width }}
			backgroundColor={props.backgroundColor}
			borderRadius={props.borderRadius}
			textAling={props.textAling}
			color={props.color}
		>
			{props.children}
		</InnerCard>
	);
};

export default SmallCard;
