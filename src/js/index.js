//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";



let sec = 0;
setInterval (() => {
    const one = Math.floor((sec/1)%10);
    const two = Math.floor((sec/10)%10);
    const three = Math.floor((sec/100)%10);
    const four = Math.floor((sec/1000)%10)
    sec +=1;
    ReactDOM.createRoot(document.getElementById('app')).render(<Home digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/>);
},1000)

//render your react application

