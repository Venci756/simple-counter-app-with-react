import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SingleCounter.css';

class SingleCounter extends Component {
    state = {
        counter: this.props.by
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 5
        })
    }

    reset = () => {
        this.setState({
            counter: this.props.by
        })
    }

    render() {
        return (
            <div>
                <h3 className="text">Single counter with values passed from props</h3>
                <button onClick={this.increment}> +5 </button>
                <span className="counterOutput">{this.state.counter} </span>
                <button className="reset" onClick={this.reset}>Reset to 1</button>
            </div>

        )
    }
}


// SingleCounter.PropTypes = {
//     by: PropTypes.number
// }
export default SingleCounter;