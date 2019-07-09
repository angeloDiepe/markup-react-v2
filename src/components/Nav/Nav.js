import React from 'react';
import Logo from "../../assets/img/logoMarkup.png";
import twitter from "../../assets/img/twitter-svg.svg";
import facebook from "../../assets/img/facebook-svg.svg";
import linked from "../../assets/img/linked-svg.svg";
import home from "../../assets/img/home48.png";
import enterprise from "../../assets/img/enterprise48.png";
import contact from "../../assets/img/contact48.png";
import newsletter from "../../assets/img/newsletter50.png";
import './Nav.css';
const Nav=()=>{
	const navIcon=()=>[0,1,2].map((i)=><span key={`span${i}`} className={(i===0)? `span${i} navOn topNav`:`span${i} navOn`}></span>)
	const displayNav=()=>{
		const navSpan=document.querySelector('#nav-icon-container').children;
		Object.keys(navSpan).map((i)=>{navSpan[i].classList.toggle('navOn');
			document.querySelector(".menu-wrapper").classList.toggle('isBlock');
			document.querySelector('.nav-container').classList.toggle("black-nav")
			if(i==="0"){
			navSpan[i].classList.toggle('span0')	
			}
			return null
	});
	}
	 const Toggle=(event)=>{
			 	event.currentTarget.classList.toggle('menu-slide')
			 }
	return (
		<div className="nav-container black-nav">
			<img src={Logo} alt="Logo"/>
			<div id="dropdown-menu">
				<div onClick={displayNav} id="nav-icon-container">{navIcon(
					)}</div>
				<div id="" className="menu-wrapper isBlock">
					<div className="menu-item menu-slide" id="home-slide" onMouseEnter={(event)=>Toggle(event)} onMouseLeave={(event)=>Toggle(event)}><img src={home} alt="home"/><a href="home">Accueil</a></div>
					<div className="menu-item menu-slide" id="enterprise-slide" onMouseEnter={(event)=>Toggle(event)} onMouseLeave={(event)=>Toggle(event)}><img src={enterprise} alt="enterprise"/><a href="enterprise">Notre Entreprise</a></div>
					<div className="menu-item menu-slide" id="contact-slide" onMouseEnter={(event)=>Toggle(event)} onMouseLeave={(event)=>Toggle(event)}><img src={contact} alt="contact"/><a href="contact">Contact</a></div>
					<div className="menu-item menu-slide" id="newsletter-slide" onMouseEnter={(event)=>Toggle(event)} onMouseLeave={(event)=>Toggle(event)}><img src={newsletter} alt="newsletter"/><a href="newsletter">Newsletter</a></div>
					<div className="social-media">
						<img src={twitter} alt="twitter"/>
						<img src={facebook} alt="facebook"/>
						<img src={linked} alt="linked"/>
					</div>
				</div>
			</div>
		</div>
		)
}
export default Nav;