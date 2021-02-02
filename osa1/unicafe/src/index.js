import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <>
      <tr>
        <th>
          {text}
        </th>
        <td>
          {value}
        </td>
      </tr>  
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {

  let total = good + neutral + bad
  let avg = (good * 1 + bad * -1) / total

  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good}/>
          <StatisticLine text="Neutral" value={neutral}/>
          <StatisticLine text="Bad" value={bad}/>
          <StatisticLine text="Total" value={total}/>
          <StatisticLine text="Average" value={avg}/>
          <StatisticLine text="Positive %" value={good / total * 100}/>
        </tbody>
      </table>
      
      
      
      
      
      
    </div>

  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>
      <h2>Give Feedback</h2>
      <Button onClick={() => setGood(good+1)} text="Good"/>
      <Button onClick={() => setNeutral(neutral+1)} text="Neutral"/>
      <Button onClick={() => setBad(bad+1)} text="Bad"/>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)