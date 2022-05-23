import React from 'react'

const App = () => {
  // const-definitions

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const name= part1
  const all = exercises1


  const Header = (props) => {
    return (
      <div>
        <p>
          Name of the course :{props.course}
        </p>
      </div>
    )
  }

  const Content = (props) => {
    return (
      <div>
        <p>
          
          <p>
        Part1: {part1} {exercises1}
      </p>
      <p>
       Part2: {part2} {exercises2}
      </p>
      <p>
       Part3: {part3} {exercises3}
      </p>
        </p>
      </div>
    )
  }
  const Total = (props) => {
    return (
      <div>
        <p>
          Total is {props.all}
          <p>Number of exercises :{exercises1 + exercises2 + exercises3}</p>
        </p>

      </div>
    )
  }
  return (
    <div>
      <Header course={course} />
      <Content  name ={name}/>
      <Total all={all} />
    </div>
  )
}




export default App