import { useState, useEffect } from 'react'
import bookService from './services/book'

const App = () => {

    const [persons, setPersons] = useState([
        { name: 'test1', number: '112' },
        { name: 'test2', number: '991' }
    ])

    const [showAll, setShowAll] = useState(true)

    const numbersToShow = showAll
        ? persons
        : persons.filter(person => person.name.includes(filter) === true)

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

    useEffect(() => {

        bookService.getAll()
            .then(response => {
                setPersons(response)
            })

    }, [])

    const submitName = (event) => {
        event.preventDefault()
        if (persons.filter(e => e.name === newName).length > 0) {
            //alert(`${newName} is already added to phone book`)
            let result = window.confirm(newName + " is already added to phone book, replace the old number with a new one")
            if (result) {
                const nameObj = {
                    name: newName,
                    number: newNumber
                }

                bookService
                    .update(persons.findIndex(dude => dude.name === newName) + 1, nameObj)
                    .then(result => {
                        setPersons(persons.map(person =>  person.name !== newName ? person : result))
                    })
            }
        } else {
            const nameObj = {
                name: newName,
                number: newNumber
            }
            bookService
                .create(nameObj)
                .then(resp => {
                    setPersons(persons.concat(resp))
                })
            //setPersons(persons.concat(nameObj))
        }
        setNewName('')
        setNewNumber('')
    }

    const delNumber = (personIn) => {
        let result = window.confirm('Delete ' + personIn.name + '?')

        if (result) {
            bookService
                .deleteNum(personIn.id)
                .then(resp => {
                    setPersons(persons.filter(person => person.id !== personIn.id))
                })
        }
    }

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
            {numbersToShow.map((person, i) =>
                <div key={i}>
                    {person.name} - {person.number} <button onClick={() => delNumber(person)}>delete</button>
                </div>)}
        </div>
    )
}

export default App