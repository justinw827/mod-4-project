import React, { Component } from 'react';
import { Card, Icon, Image, Button, Label } from 'semantic-ui-react';

import Adapter from '../Adapter';

class Video extends Component {
  constructor(props) {
    super(props)

    this.state = {
      likes: 0,
      liked: false
    }
  }

  componentDidMount() {
    Adapter.getLocalVideoLikes(this.props.video.id.videoId)
    .then(likeData => {
      this.setState({
        likes: likeData.likes
      })
    })
  }

  incrementLike = () => {
    if (!this.state.liked) {
      this.setState({
        likes: this.state.likes + 1,
        liked: true
      })
    }
  }

  render() {
    const {video, handleLike} = this.props
    const videoId = video.id.videoId;
    const videoUrl = `http://www.youtube.com/embed/${videoId}`;

    const time = video.snippet.publishedAt.split("T")[0]

    return (
        <Card>
        <iframe src={videoUrl}></iframe>
        <Card.Content>
          <Card.Header>{video.snippet.title}</Card.Header>
          <Card.Meta>
            <span className='date'>Published at: {time}</span>
          </Card.Meta>
          <Card.Description>{video.snippet.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as='div' labelPosition='right'>
           <Button onClick={e => {
             handleLike(e, video)
             this.incrementLike()
           }} icon>
             <Icon name='fire' />
             Like
           </Button>
           <Label as='a' basic pointing='left'>
            {this.state.likes}
           </Label>
         </Button>
        </Card.Content>
      </Card>
    )
  } // end render
} // end class

export default Video
