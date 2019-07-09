import React,{Component} from 'react';
import Web from "../../assets/img/web.jpg";
import Marketing from "../../assets/img/marketing.jpg";
import Design from "../../assets/img/design.jpg";
import Formation from "../../assets/img/formation.jpg";
import Image from "./Image.js";
import './Slider.css';

class Slider extends Component{
	componentDidMount(){
	let z=0;
	let a=false;
	const sliderContent=document.querySelector('.slider-content');
	const handleSlider=()=>{
	if (z===-300) {
		a=true;
	}
	else if (z===0) {
		a=false
	}
	if (a) {
	z+=100;
	}else{
	z+=-100;
}
	if (z===0) {
			this.props.setCommander(1);
			this.props.handleCover("Developpement Web")
		}else
		if (z===-100) {
			this.props.setCommander(2);
			this.props.handleCover("Marketing Digital")
		}
		else
		if (z===-200) {
			this.props.setCommander(3);
			this.props.handleCover("Conception et Impression")
		}else{
			this.props.setCommander(4);
			this.props.handleCover("Formation")
		}
	sliderContent.style.transition="all 1.35s linear";
	sliderContent.style.transform=`translateY(${z+"%"})`;
}

setInterval(handleSlider,5000)
}
	render(){
	return(
	<div id="slider-container">
		<div id="background-dark"></div>
			<div className="slider">
			<Image>
		     	<div className="slider-content">
				     	<img src={Web} alt="web"/>
				        <img src={Marketing} alt="marketing"/>
				        <img src={Design} alt="design"/>
				        <img src={Formation} alt="formation"/>
		      	</div>
		    </Image>  	
	    	</div>
	</div>
	)
  }
}

export default Slider;