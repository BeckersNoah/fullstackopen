import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral ,bad}) => {
  if (good === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {(good - bad)/(good + neutral + bad)}</p>
      <p>positive {good/(good + neutral + bad)} %</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    return (
      setGood(good + 1)
    )
  }

  const increaseNeutral = () => {
    return (
      setNeutral(neutral + 1)
    )
  }

  const increaseBad = () => {
    return (
      setBad(bad + 1)
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="neutral" />
      <Button onClick={increaseBad} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App