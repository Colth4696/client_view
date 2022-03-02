
import React from "react"
import { Marker, InfoWindow } from "react-google-maps"
import RedIcon from "./red-user-icon.png"
import GreenIcon from "./green-home-icon.png"
import axios from "axios"
import ModalChat from "./ChatModal"


const MyMarker = (props) => {
 const [flag, setFlag] = React.useState(false);
 const [chat, setChat] = React.useState(false);
 const [volunteer, setVolunteer] = React.useState(false);

   const toggle_open = () => {
    setFlag(!flag)
  }
 
  const  getIcon = () => {
    if (props.request.category === "Material" ) { return RedIcon }
    else { return GreenIcon }
  }

  const makeVolunteer = () => {
    const volunteer = {
      request_id: props.request.id,
      user_id: props.user.id
    }
      console.log(props.user)
      console.log(volunteer)
      axios.post("/volunteers", {volunteer})
        .then(response => {
          console.log(response.data)
          if (response.data.status === "created") {
            setChat(true)
            setVolunteer(response.data.volunteer)
          } 
        })
        .catch(error => {
          console.error(`error:${error}`)
        })
  }

    const MarkStyle = {
      height: "30px",
      width: "30px"
    }

    return (
      <div>
        <Marker
          style={MarkStyle}
          position={props.position}
          onClick={toggle_open}
          icon={getIcon()}>
            
          {flag && <InfoWindow onCloseClick={toggle_open} user={props.user}>

            <div>
              <h4>Task ID:{props.request.id}</h4>
              <h4>Requester ID:{props.request.user_id}</h4>
              <h1>{props.request.title}</h1>
              <h3>{props.request.description}</h3>
              {!chat ? <button onClick={makeVolunteer}>Volunteer</button>: ''}
             </div>
          </InfoWindow>}
        </Marker>
        {chat && <ModalChat request={props.request} volunteer={volunteer}/>}
      </div>
    )
    }
    


export default MyMarker