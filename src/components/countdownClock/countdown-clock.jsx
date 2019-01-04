import React, { Component, Fragment } from 'react';

class CountdownClock extends Component {

  componentWillMount() {
    console.log("Hello will mount");
    console.log(this.props.endtime);

    this.updateClock();
  }

  componentDidMount() {
    this.tickInterval = setInterval(() => this.updateClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tickInterval);
  }

  updateClock() {
    let t = Date.parse(this.props.endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor((t / (1000 * 60 * 60 * 24)));

    this.setState({seconds: seconds, minutes: minutes, hours: hours, days: days});
  }

  render() {
    return (
      <Fragment>
        <div id="clock">
          <div className="days">{ this.state && this.state.days ? this.state.days : '00' }</div>
          <div className="hours">{ this.state && this.state.hours ? this.state.hours : '00' }</div>
          <div className="minutes">{ this.state && this.state.minutes ? this.state.minutes : '00' }</div>
          <div className="seconds">{ this.state && this.state.seconds ? this.state.seconds : '00' }</div>
        </div>
      </Fragment>
    );
  }
}

CountdownClock.defaultProps = {
  endtime: new Date('February 8, 2019 00:00:01') // Date of HackBeanpot 2019
};

export default CountdownClock;
