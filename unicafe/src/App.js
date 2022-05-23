import React, { useState } from 'react'

const Good = props => <div>{props.good}</div>
const Neutral = props => <div>{props.neutral}</div>
const Bad = props => <div>{props.bad}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)



const App = () => {


  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const setToGood= newGood=> {setGood(newGood) }
  const setToNeutral = newNeutral => {setNeutral(newNeutral) }
  const setToBad = newBad => {setBad(newBad)}


  return (
    
    <div>
  
<h1>give feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text="Good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setToBad(bad+ 1)} text="Bad" />
    <h1>statistics</h1>
      
      
     <p>good <Good good={good} /></p> 
     <p>neutral <Neutral neutral={neutral} /></p> 
     <p>bad <Bad bad={bad} /></p> 
 
    
    </div>
  )
}
export default App
