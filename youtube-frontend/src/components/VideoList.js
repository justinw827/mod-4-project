import React, { Component, Fragment } from 'react';
import { Card } from 'semantic-ui-react'

import Video from './Video'

const VideoList = ({videos}) => {

  return (
    <Fragment>
      {videos.map(video => <Video key={video.etag} video={video}/>)}
    </Fragment>
  )
}

export default VideoList
