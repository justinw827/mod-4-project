import React, { Component } from 'react';
import Adapter from '../Adapter';
import VideoList from './VideoList'
import { connect } from 'react-redux';

class Profile extends Component {

  render() {
    return (
      <VideoList videos={this.props.userVideos} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.userId,
    userVideos: state.userVideos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserVideos(userVideos){
      const action = {
        type: 'UPDATE_USER_VIDEOS',
        userVideos: userVideos
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
