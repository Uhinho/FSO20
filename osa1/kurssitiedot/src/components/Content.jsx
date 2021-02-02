import React from 'react'

import Part from './Part'
import Total from './Total'

const Content = ({list}) => {

    return (
      <div>
        {list.map(part => 
  
          <Part key={part.id} name={part.name} exercises={part.exercises}/>
  
          )}
        <Total list={list}/>
      </div>
    )
  }

export default Content