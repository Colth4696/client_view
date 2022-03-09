import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './components/registrations/Login'
import Signup from './components/registrations/Signup'
import Houses from './576140.jpg'
import Footer from './Footer'

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
    axios.get('http://localhost:3003/logged_in')
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
      <div className="App" style={{ backgroundImage: `url(${Houses})` }}>

        <BrowserRouter>
          <Routes>
            <Route
              exact path='/'
              render={props => (
                <Home {...props} handleLogout={this.handleLogout} user={this.state.user} loggedInStatus={this.state.isLoggedIn} />
              )}
            />
            </Routes>
            <Routes>
            <Route
              exact path='/login'
              render={props => (
                <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />
              )}
            />
            </Routes>
            <Routes>
            <Route
              exact path='/signup'
              render={props => (
                <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />
              )}
            />
          </Routes>
        </BrowserRouter>
        <div className="Bottom">
          <Footer />
        </div>
      </div>

    );
  }
}
export default App;
