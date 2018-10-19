import React, { Component } from 'react';
import Adapter from '../Adapter';
import VideoList from './VideoList'

class Profile extends Component {
  state = {
    userVideos: []
  }

  formatVideos(videos){
    return videos.map(video => {
      return {id: {videoId: video.id}, snippet: {title: video.name, description: video.description}}
    })
  }

  componentDidMount(){
    const url = `http://localhost:3001/api/v1/users/1/videos`
    Adapter.getVideos(url)
    .then(userVideos => {
      this.setState({
        userVideos: this.formatVideos(userVideos)
      })
    })
  }

  render() {
    return (
      <VideoList videos={this.state.userVideos} />
    )
  }
}

export default Profile
