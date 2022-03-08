import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response)
        setPersons(response.data)
      })
  }

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' }
  ])

  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const [newNumber, setNewNumber] = useState('')

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const [filter, setFilter] = useState('')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    if (event.target.value.length > 0) {
      setShowAll(false)
    } else {
      setShowAll(true)
    }
  }

  const [showAll, setShowAll] = useState(true)

  const numbersToShow = showAll
    ? persons
    : persons.filter(person => person.name.includes(filter) === true)

  const submitName = (event) => {
    event.preventDefault()
    if (persons.filter(e => e.name === newName).length > 0) {
      alert(`${newName} is already added to phone book`)
    } else {
      const nameObj = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(nameObj))
    }
    setNewName('')
    setNewNumber('')
  }

  useEffect(hook, [])

  return (
    <div>
      <h2>Phone book</h2>
      <div>
        filter shown with a <input value={filter} onChange={handleFilterChange} />
      </div>
      <h3>add a new</h3>
      <form onSubmit={submitName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {numbersToShow.map((person, i) => <div key={i}>{person.name} - {person.number}</div>)}
    </div>
  )

}

export default App