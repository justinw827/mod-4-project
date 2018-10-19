import React, { Component, Fragment } from 'react';
// import { Search } from 'semantic-ui-react'
import YTSearch from 'youtube-api-search';

import CategoryList from './CategoryList';
import VideoList from './VideoList';
import Search from './Search';

const API_KEY = "AIzaSyAqrNT30zUZprDAT5YoDqI89Rw4VI8ZBnA";

class Home extends Component {

  state = {
    videos: []
  }

  handleSearch = event => {
    let term = event.target.value
    YTSearch({key: API_KEY, term: term}, videos => this.setState({videos}))
  }

  render(){
    return (
      <Fragment>
        <br />
        <Search handleSearch={this.handleSearch} />
        <CategoryList />
        <VideoList videos={this.state.videos}/>
      </Fragment>
    )
  }
}

export default Home
