import React, { Component } from 'react'
import axios from 'axios'

class MessageList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
    };
    
    componentDidMount() {
        axios.get('/messages')
            .then(res => {
                const message = res.data;
                this.setState({ message });
            })
    }


    render() {
        return (
            <div className='message_list'>
                <ul>
                    {this.state.messages.map(message =>
                        <li>{message.message}</li>)}
                </ul>
            </div>
        )
    }
}


export default MessageList