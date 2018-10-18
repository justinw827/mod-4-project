import React, { Component, Fragment } from 'react';
import { Search } from 'semantic-ui-react'

import CategoryList from './CategoryList'
import VideoList from './VideoList'

const Home = () => {
  return (
    <Fragment>
      <Search showNoResults={false}/>
      <CategoryList />
      <VideoList videos={[{name: "test"}]}/>
    </Fragment>
  )
}

export default Home
