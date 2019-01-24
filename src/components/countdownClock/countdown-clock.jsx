import React, { Component, Fragment } from 'react';

class CountdownClock extends Component {

  componentWillMount() {
    console.log("Hello will mount");
    console.log(this.props.eventStartDate);

    this.updateClock();
  }

  componentDidMount() {
    this.tickInterval = setInterval(() => this.updateClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tickInterval);
  }

  updateClock() {
    let t = Date.parse(this.props.eventStartDate) - Date.parse(new Date()); // microseconds until event
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor((t / (1000 * 60 * 60 * 24)));

    this.setState({currentDate: Date.parse(new Date('February 3, 2019 10:00:01')), seconds: seconds, minutes: minutes, hours: hours, days: days});
  }

  render() {

    // console.log(this.state.currentDate);
    // console.log(Date.parse(this.props.hackingEndDate));
    // console.log(Date.parse('February 12, 2019 10:00:01'));

    if (Date.parse(this.props.hackingEndDate) <= this.state.currentDate) { // if HBP event has passed, render message saying event has passed
      return (
        <Fragment>
          <br/>
          <br/>
          <b>This year's event has concluded. Stay tuned for winners!</b>
        </Fragment>
      );
    }

    else if (Date.parse(this.props.eventStartDate) <= this.state.currentDate) { // if HBP event start date has passed, render time left to hack
      return (
        <Fragment>
          <br/>
          <br/>
          <b>Time left to hack:</b>

          <div id="clock">
            <div className="days">{this.state && this.state.days ? this.state.days : '00'}</div>
            <div className="hours">{this.state && this.state.hours ? this.state.hours : '00'}</div>
            <div className="minutes">{this.state && this.state.minutes ? this.state.minutes : '00'}</div>
            <div className="seconds">{this.state && this.state.seconds ? this.state.seconds : '00'}</div>
          </div>
        </Fragment>
      );
    }

    else { // else render the countdown until HBP start
      return (
        <Fragment>
          <br/>
          <br/>
          <b>Time until HackBeanpot 2019:</b>

          <div id="clock">
            <div className="days">{this.state && this.state.days ? this.state.days : '00'}</div>
            <div className="hours">{this.state && this.state.hours ? this.state.hours : '00'}</div>
            <div className="minutes">{this.state && this.state.minutes ? this.state.minutes : '00'}</div>
            <div className="seconds">{this.state && this.state.seconds ? this.state.seconds : '00'}</div>
          </div>
        </Fragment>
      );
    }
  }
}

CountdownClock.defaultProps = {
  eventStartDate: new Date('February 8, 2019 00:00:01'), // Date of HackBeanpot 2019
  hackingEndDate: new Date('February 10, 2019 00:00:01') // Date that hacking concludes
};

export default CountdownClock;
