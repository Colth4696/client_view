import axios from 'axios';
import React, {Component} from 'react'

class VolunteerButton extends Component {
    constructor(){
        super()
         this.state = {
          volunteers: 0
    };
    }

    addVolunteer = () => 
    {
        let newCount = this.state.volunteers + 1;
        this.setState({
            volunteers: newCount
        });
    };

    handleSubmit = (event) => {
    event.preventDefault()
    const {user_id, request_id} = this.state
    let user_request = {
      user_id: user_id,
      request_id: request_id
    }
        axios.post("/user_requests", {user_request}, {withCredentials: true})
        .then(response => {
            if (response.data.status === 'created') {
            this.props.user_requests(response.data)
            this.redirect('/')            
        }
    })        
        .catch(error => {
            console.log("request error", error);
        });
        event.preventDefault();
    };
    
    
    render(){
        return <button onClick={this.addVolunteer && this.handleSubmit}>Volunteer: {this.state.user_reqeust}</button>
    }
}

export default VolunteerButton;