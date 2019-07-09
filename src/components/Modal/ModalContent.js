import React from 'react';
import './ModalContent.css';
import Aux from "../../containers/hoc/Aux.js";

const ModalContent = (props) =>{
	    const offExit=()=>{
    window.addEventListener('click',(e)=>{if (e.target===document.getElementById('modal')){
       return props.handleModal(0)}
        })
    }
	return(
		<div id="modal-content">
			{(props.setModal===1)?
			<Aux>

				<header><span className="plan-web-header" >Web<span id="service3">Markup</span></span><span id="close" onClick={()=>{props.handleModal(0)}}>&times;</span></header>
				<section>
					<ul>
						<li>02 plateforme (Facebook – Instagram Linkedin – Tweeter Youtube - Autres)</li>
						<li>Audit digital</li>
						<li>Stratégie digitale</li>
						<li>Inbound marketing Stratégie de contenu</li>
						<li>Veille créative Analyse des produits des concurrents et autres</li>
						<li>Montages visuels Montage graphique professionnel( 08 / mensuel)</li>
						<li>Nombre de publication.Publications dans les différentes pages(12 publications)</li>
						<li>Portée organique interactions(100 000 personnes atteintes)</li>
					</ul>	
					<button onClick={()=>props.handleForm("web")}className="amount" id="web-amount">100 000 XAF</button>
				</section>
			</Aux>:
			(props.setModal===2)?
			<Aux>
				<header><span className="plan-web-header" >Markup<span id="service1">Consulting</span></span><span id="close" onClick={()=>{props.handleModal(0)}}>&times;</span></header>
				<section>
					<ul>
						<li>Inbound Marketing(analyse du customer obsession et du système de value Innovation Program, impertinent culture)</li>
						<li>Veille créative  et concurrentielle  (<b>avec en support un benchmarketing</b>)</li>
						<li>Conseil , élaboration et implémentation de la stratégie digitale</li>
						<li>Greffage aux influenceurs et aux autres partenaires Markup</li>
						<li>Création des visuels de qualité(<b>Bonne</b>)</li>
						<li>Publication dans les réseaux sociaux (Facebook, linkedin et Youtube) de manière progressive(<b>60</b>)</li>
						<li>Animations (<b>partages, commentaires et likes</b>)</li>
						<li>Personnes cibles touchées <b>(visibilité)(60000)</b></li>
						<li>Nombre potentiel de clients <b>(chiffre approximatif en fonction de la stratégie et des options choisies)(05)</b></li>
						<li>Nombre d’abonnés <b>(valable pour facebook car le reste discutable)(300)</b></li>
					</ul>	
					<button onClick={()=>props.handleForm("consulting")}className="amount" id="consulting-amount">200 000 XAF</button>
				</section>
			</Aux>:
			(props.setModal===3)?
			<Aux>
				<header><span className="plan-web-header" >Markup<span id="service2">Design</span></span><span id="close" onClick={()=>{props.handleModal(0)}}>&times;</span></header>
				<section>
					<ul>
						<b>Nothing Yet</b>
					</ul>	
					<button onClick={()=>props.handleForm("design")}className="amount" id="design-amount">Coming Soon</button>
				</section>
			</Aux>:
			(props.setModal===4)?
			<Aux>
				<header><span className="plan-web-header" >Markup<span id="service4">Acadamy</span></span><span id="close" onClick={()=>{props.handleModal(0)}}>&times;</span></header>
				<section>
					<ul>
						<b>Nothing Yet</b>
					</ul>	
					<button onClick={()=>props.handleForm("academy")}className="amount" id="academy-amount">Coming Soon</button>
				</section>
			</Aux>:null}
			{offExit()}
		</div>	
	)
} 

export default ModalContent;
