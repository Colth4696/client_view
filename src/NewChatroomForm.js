import axios from 'axios';
import React from 'react';
import { API_ROOT, HEADERS } from './constants/index';

class NewChatroomForm extends React.Component {
  state = {
    name: ''
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault()
    axios.get(`${API_ROOT}/chatrooms`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(this.state)
    });
    this.setState({ name: '' });
  };

  render = () => {
    return (
      <div className="newChatroomForm">
        <form onSubmit={this.handleSubmit}>
          <label>New Chatroom:</label>
          <br />
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  };
}

export default NewChatroomForm;