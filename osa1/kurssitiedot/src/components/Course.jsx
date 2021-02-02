import React from 'react'

import Content from './Content'


const Course = ({course}) => {
    return (
      <div>
        <h2>{course.name}</h2>
        <Content list={course.parts}/>
      </div>
    )
  }

export default Course