import React, { Component } from 'react';
import { Card, Icon, Image, Button, Label } from 'semantic-ui-react';

const Video = ({video, handleLike}) => {
  const videoId = video.id.videoId;
  const videoUrl = `http://www.youtube.com/embed/${videoId}`;

  return (
      <Card>
      <iframe src={videoUrl}></iframe>
      <Card.Content>
        <Card.Header>{video.snippet.title}</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as='div' labelPosition='right'>
         <Button onClick={e => handleLike(e, video)} icon>
           <Icon name='fire' />
           Like
         </Button>
         <Label as='a' basic pointing='left'>
           2,048
         </Label>
       </Button>
      </Card.Content>
    </Card>
  )
}

export default Video

// <li>
//   <div>
//     <img src={imgUrl} />
//   </div>
//   <div>
//     <iframe src={videoUrl}></iframe>
//   </div>
//   <div>
//     <h4>{video.snippet.title}</h4>
//   </div>
//
// </li>
