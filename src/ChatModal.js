import axios from 'axios'
import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import ChatroomsList from './ChatroomsList'

const ModalChat = (props) => {
  const [currentChatroom, setCurrentChatroom] = React.useState();
  const [open, setOpen] = React.useState(false);
 
  const initializeChat = () => {
    const chatroom  = {
      name: props.request.title,
      request_id: props.request.id,
      volunteer_id: props.volunteer.id,
    }
      axios.post("/chatrooms", {chatroom})
      .then (response => {
        if (response.status === 200) {
          const chatroom = JSON.parse(response.request.requestData).chatroom;
          if (!chatroom.messages) chatroom.messages = [];
          setCurrentChatroom(chatroom);
          setOpen(true);
        }
      })
  }

  return (
    <>
 
      <Button onClick={initializeChat}>
        <Icon name='desktop' />
        Start Chat
      </Button>
        {open && <div style={{backgroundColor: "pink"}}><ChatroomsList user_id={props.volunteer && props.volunteer.user_id} chatroom={currentChatroom}/></div>}
    </>
  )
}

export default ModalChat