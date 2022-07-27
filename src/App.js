import React from "react";
import styled from "styled-components";
import Card from "./components/Card";
import Navigator from "./components/Navigator";
import Main from "./components/Main";
import SmallCard from "./components/SmallCard/SmallCard";

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
			>
				<SmallCard backgroundColor="none" borderRadius="0" color="white">
					<p>
						<img
							src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"
							alt="Girl in a jacket"
							width="100"
							height="100"
						/>
					</p>
					<h4>Meet Kumar Vishwakarma</h4>
					<section>
						<AboutCard>
							<li>
								<a href="#">
									<i class="devicon-facebook-plain"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="devicon-github-original"></i>
								</a>
							</li>
							<li>
								<a href="#">
									<i class="devicon-linkedin-plain"></i>
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
		</>
	);
};

// display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     grid-gap: 0.8rem;
//     padding: 2rem;

export default App;
