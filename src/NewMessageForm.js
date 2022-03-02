import axios from 'axios';
import React from 'react';
import { API_ROOT } from './constants/index';

class NewMessageForm extends React.Component {
  state = {
    body: '',
    chatroom_id: this.props.chatroom_id,
    user_id: this.props.user_id
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ chatroom_id: nextProps.chatroom_id });
  };

  handleChange = e => {
    this.setState({ body: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { body, chatroom_id, user_id } = this.state;
    console.log(user_id);
    const message = {
      body: body,
      chatroom_id: chatroom_id,
      user_id: user_id
    }
    axios.post(`${API_ROOT}/messages`, {message}).then(result => console.log(result))//.config && result.config.data && JSON.parse(result.config.data).message))
    .catch(error => console.error(`Error: ${error}`));
    this.setState({ body: '' });
  };

  render = () => {
    return (
      <div className="newMessageForm">
        <form onSubmit={this.handleSubmit}>
          <label>New Message:</label>
          <br />
          <input
            type="text"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  };
}

export default NewMessageForm;