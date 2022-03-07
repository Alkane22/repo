const Courses = ({courses}) => {
    return(
      <>
      {courses.map(course => 
      <div key={course.id}>
        <h1>{course.name}</h1>
        <ul>
          {course.parts.map(part => 
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>)}
        </ul>
        <b>total of {course.parts.reduce((sum, {exercises}) => sum + exercises, 0)} exercises</b>
      </div>)}
      </>
    )
  }

  export default Courses