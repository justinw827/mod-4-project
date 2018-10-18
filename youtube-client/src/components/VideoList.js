import React, { Component, Fragment } from 'react';

import Video from './Video'

const VideoList = ({videos}) => {

  const renderVideos = () => {
    return videos.map(video => {
      return <Video name={video.name}/>
    })
  }

  return (
    <Fragment>
      {renderVideos()}
    </Fragment>
  )
}

export default VideoList
