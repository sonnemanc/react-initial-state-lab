// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends React.Component {
  constructor(props) {
      super();
      this.state = {
        secondsLeft: props.initialCount
      }
  }

  timeOut = () => {
      if (this.state.secondsLeft === 0) 
        {return `Boom!`} else {return this.state.secondsLeft + ` seconds left before I go boom!`}
  }

  render() {
      return <div>{this.timeOut()}</div>
  }
}

export default Bomb