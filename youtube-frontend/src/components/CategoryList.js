import React, { Component, Fragment } from 'react';
import { Card } from 'semantic-ui-react'

import Category from './Category'
import VideoList from './VideoList'

const CategoryList = () => {
  const categoryNames = ["Sports", "Music", "Movies"]

  const renderCategories = () => {
    return categoryNames.map(category => {
      return <Category name={category} />
    })
  }
  return (
    <Fragment>
      {renderCategories()}
    </Fragment>
  )
}

export default CategoryList
