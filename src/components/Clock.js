import React, { Component } from "react";
import "./Clock.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: 0,
      secondsDegrees: 0,
      minutesDegrees: 0,
      hoursDegrees: 0
    };
  }

  /* Sets the degrees for the clock hands */
  update = () => {
    const now = new Date();
    const milliseconds = now.getMilliseconds();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    this.setState({
      secondsDegrees: 360 / 60 * seconds + 0.006 * milliseconds + 90,
      minutesDegrees: 360 / 60 * minutes + 0.1 * seconds + 90,
      hoursDegrees: 360 / 12 * hours + 0.5 * minutes + 90
    });
  };

  componentDidMount() {
    const id = setInterval(this.update, 300);
    this.setState({
      intervalId: id
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    // Update the degrees in css
    const secondStyle = {
      transform: `rotate(${this.state.secondsDegrees}deg)`
    };

    const minuteStyle = {
      transform: `rotate(${this.state.minutesDegrees}deg)`
    };

    const hourStyle = {
      transform: `rotate(${this.state.hoursDegrees}deg)`
    };

    return (
      <div className="analog-clock">
        <div className="hand hour-hand" style={hourStyle} />
        <div className="hand minute-hand" style={minuteStyle} />
        <div className="hand second-hand" style={secondStyle} />
      </div>
    );
  }
}

export default Clock;
