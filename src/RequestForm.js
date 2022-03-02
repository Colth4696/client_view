import React, { Component } from "react"
import axios from "axios"


class RequestForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            latitude: "",
            longitude: "",
            category: ""
        };
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
          [name]: value
        })
      };
    
    handleSubmit = (event) => {
        event.preventDefault()
        const {title, description, latitude, longitude, category} = this.state
        let request = {
          title: title,
          description: description,
          latitude: latitude,
          longitude: longitude,
          category: category
        }

            axios.post("/requests", {request},
            { withCredentials: true }
            )
            .then(response => {
                if (response.data.status === 'created') {
                this.props.requests(response.data)
                this.redirect()            
            }
        })        
            .catch(error => {
                console.log("request error", error);
            });
            event.preventDefault();
        };
        redirect = () => {
            this.props.history.push('/')
        }

    render() {
        return (
            <div className="Task">
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    required
                    />

                    <br/>

                    <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    required
                    />

                    <br/>

                    <input
                    type="decimal"
                    name="latitude"
                    placeholder="Latitude"
                    value={this.state.latitude}
                    onChange={this.handleChange}
                    required
                    />

                    <br/>

                    <input
                    type="decimal"
                    name="longitude"
                    placeholder="Longitude"
                    value={this.state.longitude}
                    onChange={this.handleChange}
                    required
                    />

                    <br/>

                    <div>

                        <input
                        type ="text"
                        name ="category"
                        placeholder="Material"
                        value = {this.state.category}
                        onChange = {this.handleChange} />
                 
                    </div>

                    <br/>

                    <button type="submit">Submit</button>

                </form>
            </div>
        );
    }
}

export default RequestForm