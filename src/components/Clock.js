import React, { Component } from 'react'

export default class Clock extends Component {

    state = {
        date: new Date(),
        
    }

    componentDidMount() {
        setInterval(() => this.setState({ date: new Date() }),
          1000)
    }

    checkTime = (value) => {
        if (value < 10) {
            return `0${value}`
        }  
        return value
    }

    render() {
        return (
        <div id="clock-container">
        <span id="hours">{ this.checkTime(this.state.date.getHours()) }</span>
         :
        <span id="minutes">{ this.checkTime(this.state.date.getMinutes()) }</span>
         :
        <span id="seconds">{ this.checkTime(this.state.date.getSeconds()) }</span>
        </div>
        )
    }


}