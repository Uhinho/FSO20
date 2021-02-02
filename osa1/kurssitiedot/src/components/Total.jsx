import React from 'react'

const Total = ({list}) => {
    console.log(list)
    const amt = list.reduce((a,b) => { return a + b.exercises },0)
  
    return (
      <div>
        <p><strong>Total of {amt} exercises</strong></p>
      </div>
  
    )
  }


export default Total