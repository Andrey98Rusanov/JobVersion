import React, { Component } from "react";
import "./Timer.css";

export default class Timer extends Component {

  state = {
    minutes: this.props.toDoData[this.props.id -1].timer[1],
    seconds: this.props.toDoData[this.props.id -1].timer[2],
    hours: this.props.toDoData[this.props.id -1].timer[0],
    pause: false,
  };


  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { hours, minutes, seconds, pause } = this.state;
      if (pause !== true) {
        this.props.timeToTask([hours, minutes, seconds])
        this.setState(({ seconds }) => ({
          seconds: seconds + 1,
        }));
      }
      if (seconds === 59) {
        this.setState(({ minutes }) => ({
          minutes: minutes + 1,
          seconds: 0,
        }));
      }
      if (minutes === 59 && seconds === 59) {
        this.setState(({ hours }) => ({
          hours: hours + 1,
          minutes: 0,
          seconds: 0,
        }));
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  onStopClick() {
    this.setState(({ pause }) => ({
      pause: !pause,
    }));
    console.log(this.props)
    console.log(this.props.toDoData[this.props.id -1].timer[0])
  }

  onRestartClick() {
    this.setState({
      minutes: 0,
      seconds: 0,
    });
  }

  timeOff() {
    const { hours, minutes } = this.state;
    let arr = this.props.time.split(":");
    let res = Number(arr[0]) * 60 + Number(arr[1]);
    if (res === hours * 60 + minutes && this.state.pause === false) {
      this.setState(({
        pause: true,
      }));
    }
    return res;
  }

  render() {
    const { hours, minutes, seconds, pause } = this.state;
    const startClass = pause ? "bi bi-skip-start" : "bi bi-stop-fill";
    const timeLimit =
      hours * 60 + minutes === this.timeOff() ? (
        "time off"
      ) : (
        <span>
          {hours < 10 ? `0${hours}` : hours}:
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
      );
    return (
      <div className="Timer">
        {timeLimit}
        {timeLimit === "time off" ? null : (
          <button className={startClass} onClick={() => this.onStopClick()} />
        )}
        <button
          className="bi bi-arrow-repeat"
          onClick={() => this.onRestartClick()}
        />
      </div>
    );
  }
}
