import React, {Component} from 'react'
import ChatBox from './Chatbox'

class Chat extends Component{
    constructor(){
        super()
        this.state={
            showMessage: false,
        }

        this.boundShowMessage = this.showMessage.bind(this)
        this.boundHideMessage = this.boundHideMessage.bind(this)
    }

        showMessage() {
            this.setState({ showMessage: true })
        }
        
        hideMessage() {
            this.setState({ showMessage: false })
        }

        render() {

            return(
                <div>
                    <ChatBox request={this.props.request} volunteer={this.props.volunteer} chatroom={this.props.chatroom}/>
                    {this.state.showMessage}
                </div>
            )
        }
    }
export default Chat 