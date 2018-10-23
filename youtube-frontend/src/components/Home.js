import React, { Component, Fragment } from 'react';
import CategoryList from './CategoryList';
import VideoList from './VideoList';
import Search from './Search';
import Adapter from '../Adapter';
import { connect } from 'react-redux';
import PageButton from './PageButton';

const API_KEY = "AIzaSyAqrNT30zUZprDAT5YoDqI89Rw4VI8ZBnA";

const getUrl = (term, maxResults) => `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${term}&maxResults=${maxResults}&type=video&part=snippet&order=viewCount`

class Home extends Component {

  handleSearch = event => {
    let term = event.target.value
    const url = getUrl(term, 45)
    Adapter.getVideos(url)
    .then(video => {
      this.props.updateAllVideos(video.items)
    })
  }

  componentDidMount(){
    const url = getUrl("", 45)
    Adapter.getVideos(url)
    .then(video => {
      this.props.updateAllVideos(video.items)
    })
  }

  handleCategory = (event) => {
    let term = event.target.innerText
    const url = getUrl(term, 45)
    Adapter.getVideos(url)
    .then(video => {
      this.props.updateAllVideos(video.items)
    })
  }

  render(){
    return (
      <Fragment>
        <br />
        <Search handleSearch={this.handleSearch} />
        <CategoryList handleCategory={this.handleCategory} />
        <VideoList videos={this.props.allVideos.slice(this.props.index, this.props.index+9)}/>
        <PageButton />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    index: state.index,
    userId: state.userId,
    homeVideos: state.homeVideos,
    allVideos: state.allVideos
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
    },
    updateAllVideos(allVideos){
      const action = {
        type: 'UPDATE_ALL_VIDEOS',
        allVideos: allVideos
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
