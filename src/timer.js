import React from "react";

class Timer extends React.Component {
  constructor() {
    super();

    // function choose(choices) {
    //   var index = Math.floor(Math.random() * choices.length;
    //   return(choices[index]);
    // }

    let randomSeconds = Math.random() * 60;
    let randomMinutes = Math.random() * 60;
    let randomHours = Math.random() * 23;
    let secondsInDay = Math.random() * 86400;

    // let randomArray = [randomSeconds, randomMinutes, randomHours];

    this.state = { time: {}, seconds: secondsInDay };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div>
        <button className="start-button" onClick={this.startTimer}>
          Start
        </button>
        <div className="times">
          <div className="numbers">
            0 <span className="words">Years</span>
          </div>
          <div className="numbers">
            0 <span className="words">Days</span>
          </div>
          <div className="numbers">
            {this.state.time.h} <span className="words">Hours</span>
          </div>
          <div className="numbers">
            {this.state.time.m} <span className="words">Minutes</span>
          </div>
          <div className="numbers">
            {this.state.time.s} <span className="words">Seconds</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
