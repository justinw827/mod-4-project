import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect} from 'react-router-dom';

import NavBar from './components/NavBar'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'
import Adapter from './Adapter';
// import {Redirect, Route} from 'react-router'

class App extends Component {

  state = {
    currentUser: -1,
    videos: []
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
      if (userData.username === "") {
        alert("Incorrect Username or Password")
      } else {
        // Set current user in state to return user id
        this.setState({
          currentUser: userData.id
        }, () => {

          this.fetchUsersVideos()
          //window.location.href = 'http://localhost:3000/profile'
          // <Redirect to='/profile'/>
          //browserHistory.push('/profile')
          // push('/profile', '/profile')

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
      if (userData.username === "") {
        alert("Username already taken")
      } else {
        this.setState({
          currentUser: userData.id
        })
        this.fetchUsersVideos()
      }
    })
  }

  formatVideos(videos) {
    return videos.map(video => {
      return {id: {videoId: video.id}, snippet: {title: video.name, description: video.description, publishedAt: "todayT"}}
    })
  }

  fetchUsersVideos() {
    const url = `http://localhost:3001/api/v1/users/${this.state.currentUser}/videos`
    // debugger
    fetch(`http://localhost:3001/api/v1/users/${this.state.currentUser}/videos`)
    .then(r => r.json())
    .then(userVideos => {
      this.setState({
        videos: this.formatVideos(userVideos)
      })
    })
  }

  render() {
    // if (this.state.currentUser > 0) {
    //   console.log("rerendering");
    //   return <Redirect to='/profile'/>
    // }

    return (
      <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/login" render={() => <Login handleLogin={this.handleLogin} handleSignup={this.handleSignup}/> } />
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={() => <Profile userId={this.state.currentUser} videos={this.state.videos}/>} />
          </Switch>
      </div>
    );
  }
}

export default App;
