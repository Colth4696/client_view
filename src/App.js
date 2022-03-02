import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Login from './components/Login'
import Signup from './components/Signup'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {},
     }
  }

componentDidMount() {
  this.loginStatus();
}

loginStatus = () => {
    axios.get('/logged_in')
    .then(response => {
      console.log(response);
      if (response.data.logged_in) {
        this.handleLogin(response.data)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.error('api errors:', error))
  }
handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }
render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route 
              exact path='/Home' 
              render={props => (
              <Home {...props} handleLogout={this.handleLogout} user={this.state.user} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/Login' 
              render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/Signup' 
              render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
