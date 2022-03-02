import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Header from './Header'
import Dashboard from './components/Dashboard'

class Home extends Component {
  
 handleClick = () => {
    axios.delete('/logout', {withCredentials: true})
    .then(response => {
      this.props.handleLogout()
      this.props.history.push('/')
    })
    .catch(error => console.log(error))
  }
  render(){
return (
    <div>
   <div>
       <Header/>
       <br></br>
       { 
        this.props.loggedInStatus ? 
        <Link to='/logout' onClick={this.handleClick}>Log Out</Link> : 
        null
      }
   </div>
   
    <div>
      <Link to='/login'>Log In</Link>
    <br></br>
    <Link to='/signup'>Sign Up</Link>
    {
    this.props.loggedInStatus ?      
    <Dashboard user={this.props.user}/>: 
    null
    }
    </div>
    </div>
  );
}
};
export default Home;
