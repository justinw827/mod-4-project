import React, { Component, Fragment } from 'react';
// import { Search } from 'semantic-ui-react'

import CategoryList from './CategoryList';
import VideoList from './VideoList';
import Search from './Search';
import Adapter from '../Adapter';

const API_KEY = "AIzaSyAqrNT30zUZprDAT5YoDqI89Rw4VI8ZBnA";

const getUrl = (term, maxResults) => `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${term}&maxResults=${maxResults}&part=snippet&order=viewCount`

class Home extends Component {

  state = {
    videos: []
  }

  handleSearch = event => {
    let term = event.target.value
    const url = getUrl(term, 9)
    Adapter.getVideos(url)
    .then(video => {
      this.setState({
        videos: video.items
      })
    })
  }

  componentDidMount(){
    const url = getUrl("", 9)
    Adapter.getVideos(url)
    .then(video => {
      this.setState({
        videos: video.items
      })
    })
  }

  handleCategory = (event) => {
    let term = event.target.innerText
    const url = getUrl(term, 9)
    Adapter.getVideos(url)
    .then(video => {
      this.setState({
        videos: video.items
      })
    })
  }

  handleLike = (event, video) => {
    fetch("http://localhost:3001/api/v1/videos/like", {
      method: "POST",
      headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        video: {
          name: video.snippet.title,
          description: video.snippet.description,
          video_id: video.id.videoId
        },
        like: {
          user_id: 1
        }
      })
    })
  }

  render(){
    return (
      <Fragment>
        <br />
        <Search handleSearch={this.handleSearch} />
        <CategoryList handleCategory={this.handleCategory} />
        <VideoList videos={this.state.videos} handleLike={this.handleLike}/>
      </Fragment>
    )
  }
}

export default Home
