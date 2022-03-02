import React, { Component } from 'react'
import Cable from './Cable'
// import axios from 'axios'

class ChatBox extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      content: "",
      //username: this.props.user && this.props.user.email
    }
  }

  componentDidMount = () => {
    Cable.subscriptions.create({
      channel: this.props.chatroom.name,
     volunteer_id: this.props.volunteer.id,
    }, {
      connected: (response) => console.log(response),
      disconnected: () => console.log('disconnected'),
      received: data => console.log(data),
    })
  };
  // componentWillUnmount = () => {
  //   consumer.disconnect()
  // };

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit= (event) => {
    event.preventDefault()
    // const { content, username } = this.state
    // let message = {
    //   body: content,
    //   chatroom_id: this.props.chatroom.id,
    //   volunteer_id: this.props.volunteer.id
    // }

//     axios.post("/messages", { message },
//       { withCredentials: true }
//     )
//     .then(response => {
//       if (response.data.status === 'created') {
//       console.log(response.data)           
//   }
// })        
//   .catch(error => {
//       console.log("request error", error);
//   });
  event.preventDefault();
};

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input
        type="text"
        name="content"
        placeholder="message"
        value={this.state.content}
        onChange={this.handleChange}
        required />
        
        <br />

        <button type="submit">Send</button>
      </form>
      </div>
    )
  }
}

export default ChatBox