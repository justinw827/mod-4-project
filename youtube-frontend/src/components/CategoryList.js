import React, { Component, Fragment } from 'react';
import { Card } from 'semantic-ui-react'

import Category from './Category'
import VideoList from './VideoList'

const CategoryList = (props) => {
  const categoryNames = ["Sports", "Music", "Movies", "Funny", "News", "Gaming", "Flatiron"]

  const renderCategories = () => {
    return categoryNames.map(category => {
      return <Category handleCategory={props.handleCategory} name={category} />
    })
  }
  return (
    <Fragment>
      {renderCategories()}
    </Fragment>
  )
}

export default CategoryList
