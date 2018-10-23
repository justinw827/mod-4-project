// import React, { Component, Fragment } from 'react';
// import { NavLink } from 'react-router-dom';
//
//
// const NavBar = () => {
//   return (
//     <Fragment>
//       <NavLink to="/">Home</NavLink>
//       <br />
//       <NavLink to="/login" exact>Login/Sign Up</NavLink>
//       <br />
//       <NavLink to="/profile" exact>Profile</NavLink>
//     </Fragment>
//   )
// }
//
// export default NavBar

import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <NavLink exact to="/"><Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /></NavLink>
          <NavLink exact to="/profile"><Menu.Item
            name='profile'
            active={activeItem === 'profile'}
            onClick={this.handleItemClick}
          /></NavLink>
        <NavLink exact to="/login"><Menu.Item
            name='login/signup'
            active={activeItem === 'login/signup'}
            onClick={this.handleItemClick}
          /></NavLink>
        </Menu>
      </Segment>
    )
  }
}
