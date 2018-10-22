import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch} from 'react-router-dom';

import NavBar from './components/NavBar'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'

class App extends Component {

  state = {
    currentUser: -1
  }

  handleLogin = (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value

    const endpoint = "http://localhost:3001/api/v1/user/login"
    const fetchData = {
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
            username: username,
            password: password
        }}
      )
    }

    const target = event.target

    fetch(endpoint, fetchData)
    .then(response => response.json())
    .then(userData => {
      if (userData.username == "") {
        alert("Incorrect Username or Password")
      } else {
        this.setState({
          currentUser: userData.id
        })
      }
    })
  }

  handleSignup = (event) => {
    event.preventDefault()

    const username = event.target.username.value
    const password = event.target.password.value

    const endpoint = "http://localhost:3001/api/v1/user/signup"

    const fetchData = {
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
            username: username,
            password: password
        }}
      )
    }

    fetch(endpoint, fetchData)
    .then(response => response.json())
    .then(userData => {
      if (userData.username == "") {
        alert("Username already taken")
      } else {
        this.setState({
          currentUser: userData.id
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/login" render={() => <Login handleLogin={this.handleLogin} handleSignup={this.handleSignup}/> } />
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
      </div>
    );
  }
}

export default App;
