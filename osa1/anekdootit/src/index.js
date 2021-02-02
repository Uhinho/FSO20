import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(10+1).join('0').split('').map(parseFloat))
  const [most, setMost] = useState(0)

  const addVote = () => {
    const copy = [...points]

    copy[selected] += 1
    checkMost(copy)
    setPoints(copy)
  }

  const checkMost = (list) => {
    let mostpoints = most
    

    for(var i = 0; i < list.length; i++) {
      if (list[i] > list[mostpoints]) {
        mostpoints = i
      }
    }
    setMost(mostpoints)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>Has {points[selected]} votes.</p>
      <button onClick={() => setSelected(getRandomInt(props.anecdotes.length))}>Next Anecdote</button>
      <button onClick={() => addVote(selected)}>Vote</button>
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[most]}</p>
      <p>Has {points[most]} votes.</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)