import React, { Component } from 'react';
import Adapter from '../Adapter';
import VideoList from './VideoList'

class Profile extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    userVideos: this.props.videos
  }

  formatVideos(videos) {
    return videos.map(video => {
      return {id: {videoId: video.id}, snippet: {title: video.name, description: video.description, publishedAt: "todayT"}}
    })
  }

  getVideos() {
    const url = `http://localhost:3001/api/v1/users/${this.props.userId}/videos`
    Adapter.getVideos(url)
    .then(userVideos => {
      this.setState({
        userVideos: this.formatVideos(userVideos)
      })
    })
  }

  componentDidMount() {
    debugger
  }

  render() {
    console.log("props in profile", this.props);
    return (
      <VideoList videos={this.state.userVideos} />
    )
  }
}

export default Profile
