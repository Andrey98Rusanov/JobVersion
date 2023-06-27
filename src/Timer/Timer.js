
import React, { Component } from 'react'
import "./Timer.css"

export default class Timer extends Component {
    state = {
        minutes: 0,
        seconds: 0,
        pause: false
    }

    componentDidMount() {
            this.myInterval = setInterval(() => {
                const { seconds, pause } = this.state
                if (pause !== true) {
                    this.setState(({ seconds }) => ({
                        seconds: seconds + 1
                    }))
                }
                if (seconds === 59) {
                    this.setState(({ minutes }) => ({
                        minutes: minutes + 1,
                        seconds: 0
                    }))
                } 
            }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
    
    onStopClick(){
        this.setState(({ pause }) => ({
            pause: pause ? false : true
        }))
    }

    onRestartClick(){
        this.setState({
            minutes: 0,
            seconds: 0
        })
    }
    

    render() {
        const { minutes, seconds, pause } = this.state
        const startClass = pause ? "bi bi-skip-start" : "bi bi-stop-fill"
        console.log(this.props.time)
        return (
            <div className='Timer'>
                <span>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
                <button className = {startClass} onClick={() => this.onStopClick()} />
                <button className='bi bi-arrow-repeat' onClick={() => this.onRestartClick()}/>
            </div>
        )
    }
}