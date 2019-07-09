import React from 'react';
import './Form.css';
import Img from './logoMarkup.png';
function Form(props) {
      const offExit=()=>{
    window.addEventListener('click',(e)=>{if (e.target===document.querySelector('.Form')){
       return props.handleForm(null)}
        })
    }
    const requestSend=()=>{
      alert("Envoyer avec Success!! Merci")
    }
  return (
    <div className="Form">
      <form onSubmit={requestSend}>
       <header><img src={Img} alt="Logo" /><span id="close-form" onClick={()=>{props.handleForm(null)}}>&times;</span></header>
       <div id="container">
        <div id="name">
          <div id="firstName">
            <input type="text" name="FirstName" id="FirstName" required/>
            <label hmtlfor="FirstName">Nom :</label>
          </div>
          <div id="lastName">
            <input type="text" name="LastName" id="LastName" required/>
            <label hmtlfor="LastName">Prenom :</label>
          </div>
        </div>
        <div id="phone">
          <label hmtlfor="Phone">Numero :</label>
          <input type="number" name="Phone" min="0" id="Phone" placeholder="237*********" required/>
        </div>
        <div id="email">
          <label hmtlfor="Email">Email :</label>
          <input type="email" name="Email" id="Email" placeholder="angelodiepe@yahoo.com" required/>
        </div>
        <div>
          <input type="submit" name="Submit" value="Envoyer" id="Submit"/>
        </div>
       </div>
      </form>
      {offExit()}
    </div>
  );
}

export default Form;
