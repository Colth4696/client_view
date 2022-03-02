import React from 'react';
import NewMessageForm from './NewMessageForm';

const MessagesArea = ({
  chatroom: { id, name, messages }, user_id
}) => {
  
  return (
    <div className="messagesArea">
      <h2>{name}</h2>
      <ul>{orderedMessages(messages)}</ul>
      <NewMessageForm chatroom_id={id} user_id={user_id} />
    </div>
  );
};

export default MessagesArea;


const orderedMessages = messages => {
  console.log('messages', messages);
  return messages.map(message => {
    return <li key={message.id}>{message.body}</li>;
  });
};