import React, { Fragment } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';

const Cable = ({ chatroom, handleReceivedMessage }) => {
  return (
    <Fragment>
      <ActionCableConsumer
        key={chatroom.id}  
        channel={{ channel: 'MessagesChannel', chatroom: chatroom.id }}
        onReceived={handleReceivedMessage}
        onInitialized= {(res) => console.log(res)}
        onConnected= {(res) => console.log(res)}
        onDisconnected= {(res) => console.log(res)}
        onRejected= {(res) => console.log(res)}
      />
    </Fragment>
  );
};

export default Cable;