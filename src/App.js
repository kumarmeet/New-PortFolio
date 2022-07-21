import React from "react";
import Card from "./components/Card";
import Navigator from "./components/Navigator";
import Main from "./components/Main";

const App = () => {
	return (
		<>
			<Card>
				<Navigator />
				<Main />
			</Card>

			{/* <Card>
				<Main />
			</Card> */}
		</>
	);
};

export default App;

// width: 40%;
//     text-align: center;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     margin: 0 auto;
