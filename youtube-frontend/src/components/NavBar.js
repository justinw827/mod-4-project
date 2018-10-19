import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <Fragment>
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/login" exact>Login/Sign Up</NavLink>
      <br />
      <NavLink to="/profile" exact>Profile</NavLink>


    </Fragment>
  )
}

export default NavBar
