import React from 'react';
import Aux from "../../containers/hoc/Aux.js";
import "./Presentation.css";

const Presentation=(props)=>{
	return(
	<Aux>
	<div id="presentation">
		<div className="cover-heading">{props.cover}</div>
		{props.handleCommander(props)}
	</div>
	</Aux>)
}
	export default Presentation;
	/*<button id="commander1"  className="commander" onClick={()=>props.handleModal(true)}>Commander</button>
		<button id="commander2" className="commander" onClick={()=>props.handleModal(true)}>Commander</button>
		<button id="commander3" className="commander" onClick={()=>props.handleModal(true)}>Commander</button>
		<button id="commander4" className="commander" onClick={()=>props.handleModal(true)}>Commander</button>*/
		