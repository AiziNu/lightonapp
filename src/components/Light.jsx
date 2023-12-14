import React from 'react';


class Light extends React.Component{
  constructor(){
    super();
    this.state ={
      isTheLightOn:true
    }
  }
  render(){
    const lightOn = 'https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png';
    const lightOff = 'https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png';

    return (<div>
      <h1>This is my app</h1>
      <button onClick={()=>{this.setState({isTheLightOn:!this.state.isTheLightOn})}}>Turn On/Off the Light</button>
      {this.state.isTheLightOn ? <img src={lightOn} alt='' />: <img src={lightOff} alt='' />}
    </div>)
  }
}

export default Light