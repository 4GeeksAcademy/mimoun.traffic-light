import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectColor, setSelectColor] = useState("green");
	return (

		<div className="traffic-light ">
			<div
			onClick={() => setSelectColor("red")}
			 className={"light red" + ((selectColor === "red") ? " glow" : "")}></div>
			<div
			onClick={() => setSelectColor("yellow")} 
			className={"light yellow" + ((selectColor === "yellow") ? " glow" : "")}></div>
			<div
			onClick={() => setSelectColor("green")}
			 className={"light green" + ((selectColor === "green") ? " glow" : "")}></div>
			
		</div>
	
	);
};

export default Home;
