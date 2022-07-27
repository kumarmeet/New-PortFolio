import React from "react";
import styled from "styled-components";
import Card from "./components/Card";
import Navigator from "./components/Navigator";
import Main from "./components/Main";
import SmallCard from "./components/SmallCard/SmallCard";
import Form from "./components/Form/Form";

import { AnchorTag } from "./components/Navigator.styled";

const AboutCard = styled.ul`
	display: flex;
	justify-content: space-evenly;
	list-style: none;

	a {
		color: white;
		font-size: 1.4rem;
		text-decoration: none;
		transition: all 500ms;

		:hover {
			color: #d1d100;
		}
	}
`;

const App = () => {
	return (
		<>
			<Card>
				<Navigator />
				<Main />
			</Card>

			<Card
				display="flex"
				padding="4rem"
				backgroundColor="#545657"
				height="80vh"
				justifyContent="space-evenly"
			>
				<SmallCard>
					<i className="devicon-nodejs-plain" style={{ fontSize: "7rem" }}></i>
					<p>Nodejs, Expressjs, RestFul APIs, ORM, ODM, MySQL, MongoDB, NPM</p>
				</SmallCard>
				<SmallCard>
					<i
						className="devicon-react-original"
						style={{ fontSize: "7rem" }}
					></i>
					<p>
						Since styled-components allows you to use arbitrary input as
						interpolations, you must be
					</p>
				</SmallCard>
				<SmallCard>
					<i
						className="devicon-javascript-plain"
						style={{ fontSize: "7rem" }}
					></i>
					<p>
						Since styled-components allows you to use arbitrary input as
						interpolations, you must be
					</p>
				</SmallCard>
				<SmallCard>
					<i className="devicon-graphql-plain" style={{ fontSize: "7rem" }}></i>
					<p>
						Since styled-components allows you to use arbitrary input as
						interpolations, you must be
					</p>
				</SmallCard>
			</Card>

			<Card
				padding="3.4rem"
				displayGrid="grid"
				gridTempCol="repeat(4, 1fr)"
				gridGap="0.8rem"
				id="pro"
			>
				<SmallCard width="100%">
					<h4>Student Tracker APIs</h4>
					<p>
						Since styled-components allows you to use arbitrary input as
						interpolations, you must be Since styled-components allows you to
						use arbitrary input as interpolations
					</p>
				</SmallCard>
				<SmallCard width="100%">
					<h4>Student Tracker APIs</h4>
					<p>
						Since styled-components allows you to use arbitrary input as
						interpolations, you must be Since styled-components allows you to
						use arbitrary input as interpolations
					</p>
				</SmallCard>
				<SmallCard width="100%">
					<h4>Student Tracker APIs</h4>
					<p>
						Since styled-components allows you to use arbitrary input as
						interpolations, you must be Since styled-components allows you to
						use arbitrary input as interpolations
					</p>
				</SmallCard>
				<SmallCard width="100%">
					<h4>Student Tracker APIs</h4>
					<p>
						Since styled-components allows you to use arbitrary input as
						interpolations, you must be Since styled-components allows you to
						use arbitrary input as interpolations
					</p>
				</SmallCard>
				<SmallCard width="100%">
					<h4>Student Tracker APIs</h4>
					<p>
						Since styled-components allows you to use arbitrary input as
						interpolations, you must be Since styled-components allows you to
						use arbitrary input as interpolations
					</p>
				</SmallCard>
				<SmallCard width="100%">
					<h4>Student Tracker APIs</h4>
					<p>
						Since styled-components allows you to use arbitrary input as
						interpolations, you must be Since styled-components allows you to
						use arbitrary input as interpolations
					</p>
				</SmallCard>
				<SmallCard width="100%">
					<h4>Student Tracker APIs</h4>
					<p>
						Since styled-components allows you to use arbitrary input as
						interpolations, you must be Since styled-components allows you to
						use arbitrary input as interpolations
					</p>
				</SmallCard>
				<SmallCard width="100%">
					<h4>Student Tracker APIs</h4>
					<p>
						Since styled-components allows you to use arbitrary input as
						interpolations, you must be Since styled-components allows you to
						use arbitrary input as interpolations
					</p>
				</SmallCard>
			</Card>

			<Card
				display="flex"
				padding="4rem"
				backgroundColor="#545657"
				height="80vh"
				justifyContent="space-evenly"
				id="abt"
			>
				<SmallCard backgroundColor="none" borderRadius="0" color="white">
					<p>
						<img
							src="https://avatars.githubusercontent.com/u/36449204?v=4"
							alt="Girl in a jacket"
							width="200"
							height="200"
							style={{ borderRadius: "50%" }}
						/>
					</p>
					<h4>Meet Kumar Vishwakarma</h4>
					<section>
						<AboutCard>
							<li>
								<a href="#">
									<i className="devicon-facebook-plain"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="devicon-github-original"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="devicon-linkedin-plain"></i>
								</a>
							</li>
						</AboutCard>
					</section>
				</SmallCard>
				<SmallCard
					backgroundColor="none"
					borderRadius="0"
					color="white"
					width="54%"
				>
					<h2>About</h2>
					<p style={{ textAlign: "justify" }}>
						Since styled-components allows you to use arbitrary input as
						interpolations, you must be Since styled-components allows you to
						use arbitrary input as interpolations. Since styled-components
						allows you to use arbitrary input as interpolations, you must be
						Since styled-components allows you to use arbitrary input as
						interpolations
						<br />
						<br />
						Since styled-components allows you to use arbitrary input as
						interpolations, you must be Since styled-components allows you to
						use arbitrary input as interpolations. Since styled-components
						allows you to use arbitrary input as interpolations, you must be
						Since styled-components allows you to use arbitrary input as
						interpolations
					</p>
				</SmallCard>
			</Card>

			<Card
				display="flex"
				padding="1rem"
				justifyContent="space-evenly"
				id="cnt"
			>
				<SmallCard
					backgroundColor="none"
					borderRadius="0"
					color="white"
					width="44%"
				>
					<p style={{ textAlign: "justify" }}>
						Since styled-components allows you to use arbitrary input as
						interpolations, you must be Since styled-components allows you to
						use arbitrary input as interpolations. Since styled-components
						allows you to use arbitrary input as interpolations, you must be
						Since styled-components allows you to use arbitrary input as
						interpolations
						<br />
						<br />
						Since styled-components allows you to use arbitrary input as
						interpolations, you must be Since styled-components allows you to
						use arbitrary input as interpolations. Since styled-components
						allows you to use arbitrary input as interpolations, you must be
						Since styled-components allows you to use arbitrary input as
						interpolations
					</p>
				</SmallCard>
				<SmallCard
					backgroundColor="none"
					borderRadius="0"
					color="white"
					width="46%"
				>
					<Form />
				</SmallCard>
			</Card>
		</>
	);
};

export default App;
