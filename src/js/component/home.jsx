import React from "react";



//create your first component
const Home = (props) => {
	return (
		<div className="simpleCounter d-flex">
			<div className="row fondo">
				<div className="col counter"><i className="far fa-clock"></i></div>
				<div className="col counter">{props.digitFour}</div>
				<div className="col counter">{props.digitThree}</div>
				<div className="col counter">{props.digitTwo}</div>
				<div className="col counter">{props.digitOne}</div>
			</div>
		</div>

	);
};

export default Home;
