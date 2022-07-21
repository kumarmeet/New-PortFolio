import React from "react";

import { Main } from "./Card.styled";

const Card = (props) => {
	return <Main>{props.children}</Main>;
};

export default Card;
