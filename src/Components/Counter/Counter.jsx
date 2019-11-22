import React, { Component } from 'react';
import './Counter.css';


class Counter extends Component {
    state = {
        counter: 0
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    incrementByFive = () => {
        this.setState({
            counter: this.state.counter + 5
        })
    }

    decrementByFive = () => {
        this.setState({
            counter: this.state.counter - 5
        })
    }

    incrementByTen = () => {
        this.setState({
            counter: this.state.counter + 10
        })
    }

    decrementByTen = () => {
        this.setState({
            counter: this.state.counter - 10
        })
    }
    clearIncrement = () => {
        this.setState({
            counter: this.state.counter = 0
        })
    }

    render() {
        return (
            <div className="counter" >
                <h2 className="text">Simple counter app  using state only</h2>
                <h2 className="text">Click on buttons to increment, decrement or reset counter</h2>
                <button onClick={this.increment}>+1</button>
                <button onClick={this.decrement}>-1</button>
                <br></br>
                <button onClick={this.incrementByFive}>+5</button>
                <button onClick={this.decrementByFive}>-5</button>
                <br></br>
                <button onClick={this.incrementByTen}>+10</button>
                <button onClick={this.decrementByTen}>-10</button>
                <br></br>
                <span className="count">{this.state.counter}</span>
                <br></br>
                <button className="clearCounter" onClick={this.clearIncrement}>Reset</button>
            </div>
        )
    }
}

export default Counter;