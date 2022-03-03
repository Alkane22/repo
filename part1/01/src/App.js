const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  
  const Header = (props) => {
    return (
      <div>
        <p>{props.course}</p>
      </div>
    )
  }
  

  const Part = (props) => {
    return(
      <p>{props.part} {props.exercises}</p>
    )
  }


  function Content(parts) {
    return (
      <div>
        <Part part={parts.parts[0].name} exercises={parts.parts[0].name} />
        <Part part={parts['parts'][1]['name']} exercises={parts['parts'][1]['exercises']} />
        <Part part={parts['parts'][2]['name']} exercises={parts['parts'][2]['exercises']} />
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        <p>Total {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
      </div>
    )
  }


  return (
    <div>
      <Header course={course['name']} />
      <Content parts={course['parts']} />
      <Total parts={course['parts']}/>
    </div>
  )
}

export default App