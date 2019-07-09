import React from 'react';
import './Services.css'

const Services=()=>{
	return(
		<div id="services-container">
			<div id="services-heading" onClick={()=>{document.querySelector('.services-wrapper').classList.toggle('services-wrapper-none')}}>Nos Services</div>
			<ul className="services-wrapper services-wrapper-none">
				 <li className="service-item" >Markup<span id="service1">Consulting</span></li>
		              <li className="service-item" >Markup<span id="service2">Design</span></li>
		              <li className="service-item" >Web<span id="service3">Markup</span></li>
		              <li className="service-item" >Markup<span id="service4">Academy</span></li>
		              <li className="service-item" >Markup<span id="service5">Store</span></li>
			</ul>
		</div>
	)
}
	export default Services;