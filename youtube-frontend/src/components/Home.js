import React, { Component, Fragment } from 'react';
import CategoryList from './CategoryList';
import VideoList from './VideoList';
import Search from './Search';
import Adapter from '../Adapter';
import { connect } from 'react-redux';

const API_KEY = "AIzaSyAqrNT30zUZprDAT5YoDqI89Rw4VI8ZBnA";

const getUrl = (term, maxResults) => `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${term}&maxResults=${maxResults}&part=snippet&order=viewCount`

class Home extends Component {

  handleSearch = event => {
    let term = event.target.value
    const url = getUrl(term, 9)
    Adapter.getVideos(url)
    .then(video => {
      this.props.updateHomeVideos(video.items)
    })
  }

  componentDidMount(){
    const url = getUrl("", 9)
    Adapter.getVideos(url)
    .then(video => {
      this.props.updateHomeVideos(video.items)
    })
  }

  handleCategory = (event) => {
    let term = event.target.innerText
    const url = getUrl(term, 9)
    Adapter.getVideos(url)
    .then(video => {
      this.props.updateHomeVideos(video.items)
    })
  }

  render(){
    return (
      <Fragment>
        <br />
        <Search handleSearch={this.handleSearch} />
        <CategoryList handleCategory={this.handleCategory} />
        <VideoList videos={this.props.homeVideos}/>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.userId,
    homeVideos: state.homeVideos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateHomeVideos(homeVideos){
      const action = {
        type: 'UPDATE_HOME_VIDEOS',
        homeVideos: homeVideos
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
