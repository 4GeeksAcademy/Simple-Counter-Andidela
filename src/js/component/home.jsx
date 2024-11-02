import React from "react";
import Card from './card'
import SecondsCounter from "./secondscounter";


//include images into your bundle

//create your first component
const Home = () => {
	return (
		<>
			<SecondsCounter />
			<Card />
		</>

	);
};

export default Home;
