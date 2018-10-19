import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar'
import Login from './components/Login'
import Home from './components/Home'

class App extends Component {

  state = {
    currentUser: -1
  }

  handleLogin = (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value

    fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(response => response.json())
    .then(userData => {
      debugger
      this.setState({
        currentUser: userData.id
      })
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
        <Login handleLogin={this.handleLogin}/>
      </div>
    );
  }
}

export default App;
