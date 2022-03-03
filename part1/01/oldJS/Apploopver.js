const Header = (props) => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Content = (props) => {
  return(
    <div>
      {Object.keys(props).map(function(keyName, keyIndex) {
        return <Part name={props[keyName]["name"]} exercises={props[keyName]['exercises']} key={keyIndex}/>
      })}
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total {props.value}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total value={99} />
    </div>
  )
}

export default App