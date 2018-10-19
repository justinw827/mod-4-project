import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react'

const Category = (props) => {

  return (
      <Button onClick={props.handleCategory} content={props.name} />
  )
}

export default Category
