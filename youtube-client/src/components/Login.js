import React, { Component } from 'react';

const Login = (props) => {
  return (
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
  )
}

export default Login
