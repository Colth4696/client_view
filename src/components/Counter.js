import React, { Component } from 'react'
import '../index.css';

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            requests: []
        }
    }

    render() {

        const {error, requests } = this.state;

        if (error) {
            return (
                <div>
                    Error: {error.message}
                </div>
            );
        } else {
        return (
            <div className="m-top_xx-large">
                <h1>
                    Available Tasks: 
                </h1>
                {requests.map(request => <div>{request.length}</div>)}
            </div>
        )
        }
    }
}

export default Counter