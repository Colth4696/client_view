import React from "react";
import MyMarker from "./MyMarker"
import axios from "axios";

class RequestMarkers extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      requests: [],
  }
};

componentDidMount() {
 axios.get("/requests")
  .then(response => {
    console.log(response.data)
    this.setState({ requests: response.data.requests});
  })
  }

  render() {
    return (
      <div>
        {this.state.requests && this.state.requests.map(request => {
          return (<MyMarker position={{ lat:+request.latitude, lng:+request.longitude }}
            title={request.title} 
            description={request.description}
            request={request}
            key={request.id} 
            request_id={request.id}
            user={this.props.user}/>)
        })
        }
      </div>
    )
  }
}

export default RequestMarkers;


// requests.find_by(owner_id: session_params[:userid])
// rewrite callbacks to use async await for axios 
// setState feature
