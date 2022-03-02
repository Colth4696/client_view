import React from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';
import { API_ROOT } from './constants/index';
import MessagesArea from './MessagesArea';
import axios from 'axios';


class ChatroomList extends React.Component {
  state = {
    chatrooms: [],
    activeChatroom: this.props.chatroom
  };

  componentDidMount = () => {
    const { activeChatroom } = this.state;
    axios.get(`${API_ROOT}/chatrooms`)
      .then(res => {
        const chatroomList = res.data;
        const currentRoom = chatroomList.find(room => {
          return room.name === activeChatroom.name && room.request_id === activeChatroom.request_id && room.volunteer_id === activeChatroom.volunteer_id
        })
        this.setState({ activeChatroom: currentRoom })
      })
  };

  handleClick = name => {
    this.setState({ activeChatroom: name });
  };

  handleReceivedChatroom = response => {
    console.log('handleReceivedChatroom', response);
    const { chatroom } = response;
    this.setState({
      chatrooms: [...this.state.chatrooms, chatroom]
    });
  };

  handleReceivedMessage = response => {
    console.log('response message', response);
    const { message } = response;
    const { activeChatroom } = this.state;
    activeChatroom.messages = [...activeChatroom.messages, message];
    this.setState({ activeChatroom });
  };

  render = () => {
    const { activeChatroom } = this.state;
    console.log('activeChatroom', activeChatroom);
    return (
      <div className="chatroomsList">
        {activeChatroom ? (
           <ActionCableConsumer
            key={activeChatroom.id}
            channel={{ channel: 'MessagesChannel', chatroom: activeChatroom.id }}
            onReceived={(res) => {console.log(res); this.handleReceivedMessage(res)}}
          />
        ) : null}
        {activeChatroom ? (
          <MessagesArea
            chatroom={activeChatroom}
            user_id={this.props.user_id}
          />
        ) : null}
      </div>
    );
  };
}

export default ChatroomList;
