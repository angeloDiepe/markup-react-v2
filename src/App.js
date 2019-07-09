import React,{Component}from 'react';
import Nav from "./components/Nav/Nav.js";
import Slider from "./components/Slider/Slider.js";
import Services from "./components/Services/Services.js";
import Presentation from "./components/Presentation/Presentation.js";
import Modal from "./components/Modal/Modal.js";
import Form from "./components/Form/Form.js";
import './App.css';

class App extends Component{

  state={
  	commander:1,
  	cover:"Developpement Web",
    setModal:0,
    setForm:null
  }
  setCommander=(set)=>{
  this.setState({commander:set})}
  handleCommander=(props)=>{
    if (this.state.commander===1) {
      return <button id="commander1"  className="commander"  onClick={()=>props.handleModal(1)} >Commander</button>
      } else 
    if (this.state.commander===2) {
      return <button id="commander2"  className="commander" onClick={()=>props.handleModal(2)} >Commander</button>
    } else 
    if (this.state.commander===3) {
          return <button id="commander3"  className="commander" onClick={()=>props.handleModal(3)} >Commander</button>    }
   	   else 
    if (this.state.commander===4) {
       return <button id="commander4"  className="commander" onClick={()=>props.handleModal(4)} >Commander</button>    }
  }
  handleCover=(cov)=>{
  	this.setState({cover:cov})}
  handleModal=(set)=>{
      this.setState({setModal:set})
    }
  handleForm=(valForm)=>{
      this.setState({setForm:valForm})
    }
  render(){
  return (
    <div className="App">
      <div className="pag">
      <div className="times"></div>
      </div>
      <Nav/>
      <div id="welcome">BIENVENUE A <span id="markup">MARKUP</span> LE MONDE DU DIGITAL</div>
      <Slider setCommander={this.setCommander} handleCover={this.handleCover}/>
      <Presentation  handleCommander={this.handleCommander} cover={this.state.cover} handleModal={this.handleModal}/>
      <Services/>
      {(this.state.setModal===0)? null:
      <Modal setModal={this.state.setModal} handleModal={this.handleModal} handleForm={this.handleForm}/>
    }
     {(this.state.setForm===null)? null:
      <Form setForm={this.state.setForm} handleForm={this.handleForm}/>
    }
      <footer id="main-footer">
      <div id="webmail">groupeMarkup@gmail.com</div>
      <div>&copy;Markup 2019</div>
      <div className="slogan">Devenez Leader du Marcher</div>
      </footer>
    </div>
  );
}
}

export default App;
