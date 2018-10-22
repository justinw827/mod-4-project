import React, { Component, Fragment } from 'react';

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
    </Fragment>
  )
}

export default Login
