import React, { Component } from 'react';

const Video = ({video}) => {
  const imgUrl = video.snippet.thumbnails.high.url;
  console.log(video);
  const videoId = video.id.videoId;
  const videoUrl = `http://www.youtube.com/embed/${videoId}`;

  return (
    <li>
      <div>
        <img src={imgUrl} />
      </div>
      <div>
        <iframe src={videoUrl}></iframe>
      </div>
      <div>
        <h4>{video.snippet.title}</h4>
      </div>

    </li>
  )
}

export default Video
