import React from 'react'
import axios from 'axios'

export default class MessageForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: ''
    }
  }

  handleChange = (e) => { this.setState({body: this.body.value})}

  handleSubmit = (e) => {
    e.preventDefault()
     axios.post("/chatrooms/messages") 
     .then(response => {
      if (response.data.status === 'created') {
         this.props.requests(response.data)
        this.setState({body: ''})
        this.body.focus()
      }
      })
  }

  render() {
    return (
      <div>
        <form className="messageForm"
          onSubmit={this.handleSubmit} >
          <input type="text" name="body" value={this.state.body}
            onChange={this.handleChange}
            autoFocus="true"
            placeholder="Enter your message here"
            ref={input => this.body = input }
           />
          <input type="submit" value="Send" name="commit" />
        </form>
      </div>
    )
  }
}