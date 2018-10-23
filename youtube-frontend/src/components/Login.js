import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

const Login = (props) => {

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
      <br/>
      <button onClick={props.handleLogout}>Log out</button>
    </Fragment>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin(event){
        event.preventDefault()
        const username = event.target.username.value
        const password = event.target.password.value

        function formatVideos(videos) {
          return videos.map(video => {
            return {id: {videoId: video.id}, snippet: {title: video.name, description: video.description, publishedAt: "todayT"}}
          })
        }

        fetch("http://localhost:3001/api/v1/user/login", {
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
          console.log("initial videos", userData);
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
              // this.fetchUsersVideos()
              // window.location.href = 'http://localhost:3000/profile'
              // <Redirect to='/profile'/>
              //browserHistory.push('/profile')
              // push('/profile', '/profile')
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
          // this.fetchUsersVideos()
        }
      })
      .then(event.target.reset())
    },
    handleLogout(event){
      const action1 = {
        type: 'CHANGE_CURRENT_USER',
        user_id: -1
      }
      const action2 = {
        type: 'UPDATE_USER_VIDEOS',
        userVideos: []
      }
      dispatch(action1);
      dispatch(action2);
    }
  }
}

export default connect(null, mapDispatchToProps)(Login);
