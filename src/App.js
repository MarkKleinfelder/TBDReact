import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
window.jQuery = window.$ = $;

//var STEPS=8;

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
      isBeat: false,
      // buttons:Array(STEPS).addClass('beat'),
    }
  }

  handleClick(i){
    console.log('handleClick hit' + JSON.stringify(this.state))
    this.setState({
      isBeat:!this.state.isBeat,
    })

    
  }

  renderBeatButton(i){
    return(
      <BeatButton 
        onClick={()=> this.handleClick(i)}
      />
    );
  }

  render() {
    console.log('app.js is running!');   
    return ( 
      <div className='container'> 
        <div className='item machineGrid'>
          {this.renderBeatButton(0)}
        </div>  
      </div>
    );
  }
}


export default Board;
