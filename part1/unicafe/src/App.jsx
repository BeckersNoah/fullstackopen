import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral ,bad}) => {
  if (good === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text = 'good' value = {good}/>
        <StatisticLine text = 'neutral' value = {neutral}/>
        <StatisticLine text = 'bad' value = {bad}/>
        <StatisticLine text = 'all' value = {good + neutral + bad}/>
        <StatisticLine text = 'average' value = {Math.round(((good - bad)/(good + neutral + bad))*10)/10}/>
        <StatisticLine text = 'positive' value = {parseFloat((good/(good + neutral + bad))*100).toFixed(2)+'%'}/>
      </tbody>
    </table>
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