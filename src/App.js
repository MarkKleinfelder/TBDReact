import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
window.jQuery = window.$ = $;
//var buttonArray=[];
var STEPS=8;

// var sounds = [
//   'hihatAnalog.wav',
//   'openhatTight.wav',
//   'kickFloppy.wav',
//   'kickHeavy.wav',
//   'snareAnalog.wav',
//   'snareBlock.wav'
// ];



function BeatButton(props){
  return (
    <button className='beat' onClick={props.onClick}>      
    </button>
  );
}




class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      buttonArray:Array(STEPS).fill(false),
      isBeat: false,
    }
  }

  handleClick(i){
    const buttonArray = this.state.buttonArray.slice();
    buttonArray[i]=!buttonArray[i];
    // if(buttonArray[i]===false){
    //   buttonArray[i]=true;
    // }else{
    //   buttonArray[i]=false;
    // }
    this.setState({
      buttonArray:buttonArray,
      isBeat:buttonArray[i],
      beatClass:buttonArray[i] ? 'beat on' : 'beat',
    })
    console.log('handleClick hit ' + buttonArray)
    console.log("buttonArray value " + buttonArray[i])
    //console.log('beatClass ' + this.state.beatClass)
  }

  renderBeatButton(i){
    return(
      <BeatButton 
        className={this.state.beatClass}
        onClick={()=> this.handleClick(i)}
        key={i}
      />
    );
  }

  renderAllButtons(){
    this.buttonArray=[];
    for(var i = 0; i<STEPS; i++){
      let newButton = this.renderBeatButton(i);
      this.buttonArray.push(newButton);
    }
    return;
  }

  render() {
    console.log('app.js is running!');
    this.renderAllButtons();   
    return ( 
      <div className='container'> 
        <div className='item machineGrid'>
          {this.buttonArray}
        </div>  
      </div>
    );
  }
}


export default Board;
