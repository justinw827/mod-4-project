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
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    }

    fetch(endpoint, fetchData)
    .then(response => response.json())
    .then(userData => {
      this.setState({
        currentUser: userData.id
      })
    })
  }

  render() {
    return (
      <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/login" render={() => <Login handleLogin={this.handleLogin}/> } />
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
      </div>
    );
  }
}

export default App;
