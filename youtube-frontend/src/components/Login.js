import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Login = (props) => {

  if(props.userId > 0){
    return <Redirect to="/profile" />
  }

  return (
    <Fragment>
      <h1>Login</h1>
      <form onSubmit={props.handleLogin}>
       <label>
         Username:
         <input type="text" name="username" />
       </label>
       <label>
        Password:
        <input type="password" name="password" />
       </label>
       <input type="submit" value="Submit" />
      </form>

      <h1>Signup</h1>
      <form onSubmit={props.handleSignup}>
       <label>
         Username:
         <input type="text" name="username" />
       </label>
       <label>
        Password:
        <input type="password" name="password" />
       </label>
       <input type="submit" value="Submit" />
      </form>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    userId: state.userId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin(event){
      event.preventDefault()
        const username = event.target.username.value
        const password = event.target.password.value

        function formatVideos(videos) {
          return videos.map(video => {
            return {id: {videoId: video.video_id}, snippet: {title: video.name, description: video.description, publishedAt: "todayT"}}
          })
        }

      return fetch("http://localhost:3001/api/v1/user/login", {
          method: 'POST',
          headers: {
            "Accept": 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user: {
                username: username,
                password: password
            }}
          )
        })
        .then(response => response.json())
        .then(userData => {
          if (userData.user.username) {
            const action1 = {
              type: 'CHANGE_CURRENT_USER',
              user_id: userData.user.id
            }
            const action2 = {
              type: "UPDATE_USER_VIDEOS",
              userVideos: formatVideos(userData.videos)
            }
            dispatch(action1);
            dispatch(action2);
          } else {
            alert("Incorrect Username or Password")
          }
        })
        .then(event.target.reset())
    },
    handleSignup(event) {
      event.preventDefault()
      const username = event.target.username.value
      const password = event.target.password.value

      fetch("http://localhost:3001/api/v1/user/signup", {
        method: 'POST',
        headers: {
          "Accept": 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
              username: username,
              password: password
          }}
        )
      })
      .then(response => response.json())
      .then(userData => {
        if (userData.username) {
          const action1 = {
            type: 'CHANGE_CURRENT_USER',
            user_id: userData.id
          }
          const action2 = {
            type: 'UPDATE_USER_VIDEOS',
            userVideos: []
          }
          dispatch(action1);
          dispatch(action2);
        } else {
          alert("Username already taken")
        }
      })
      .then(event.target.reset())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
