import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Redirect} from 'react-router-dom';
import NavBar from './components/NavBar'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'
import Adapter from './Adapter';
import { connect } from 'react-redux';

class App extends Component {

  state = {
    videos: []
  }

  formatVideos(videos) {
    return videos.map(video => {
      return {id: {videoId: video.id}, snippet: {title: video.name, description: video.description, publishedAt: "todayT"}}
    })
  }

  fetchUsersVideos() {
    const url = `http://localhost:3001/api/v1/users/${this.state.currentUser}/videos`
    fetch(`http://localhost:3001/api/v1/users/${this.state.currentUser}/videos`)
    .then(r => r.json())
    .then(userVideos => {
      this.setState({
        videos: this.formatVideos(userVideos)
      })
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" render={() => <Profile />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.userId
  }
}

export default connect(mapStateToProps)(App);
