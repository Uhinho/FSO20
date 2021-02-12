import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import dataService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ notificationMsg, setNotificationMsg ] = useState(null)
  const [ notificationColor, setNotificationColor ] = useState(null)

  useEffect(() => {
    dataService
      .getAll()
      .then(res => {
        setPersons(res)
      })
  }, [])

  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  const handleNumInput = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterInput = (event) => {
    setNewFilter(event.target.value)
  }

  const showNotificationMsg = (message, color) => {
    setNotificationColor(color)
    setNotificationMsg(message)
    setTimeout(() => { setNotificationMsg(null)}, 2000)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    let exists = false
    persons.map(p => {
      if (p.name == newName) {
        if (window.confirm(`${newName} is already added to the phonebook, want to update the number?`)) {
          updatePerson(personObject)
        }
        exists = true
      }
    })

    if (!exists) {
      
      dataService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          showNotificationMsg(`${newName} added to the phonebook`, "green")
        })
        .catch(error => {
          console.log(error.response.text)
          showNotificationMsg(error.response.data.error, "red")
        })
        
    }
    setNewName('')
    setNewNumber('')
  }

  const updatePerson = personObject => {
    dataService
      .update(persons.filter(p => p.name === personObject.name).map(fp => fp.id), personObject)
      .then(res => {
        const copy = [...persons]
        copy.filter(p => p.name == personObject.name).map(fp => fp.number = personObject.number)

        setPersons(copy)
        showNotificationMsg(`Number updated for ${newName}`, "green")
      })
      .catch(err => {
        showNotificationMsg(err.response.data, "red")
      })
      
  }

  const deletePerson = (id) => {
    const name = persons.filter(p => p.id == id).map(fp => fp.name)
    
    if( window.confirm(`Are you sure you want to delete ${persons.filter(p => p.id == id).map(fp => fp.name)} ?`)){
      dataService
        .del(id)
        .then(res => {
          const updatedList = persons.filter(p => p.id !== id)
          setPersons(updatedList)
        })

        showNotificationMsg(`${name} deleted from the phonebook`, "green")
    }
      

  }

  return (
    <div>
      <Notification message={notificationMsg} color={notificationColor}/>
      <h2>Phonebook</h2>
      <Filter handleFilterInput={handleFilterInput} newFilter={newFilter}/>
      <h2>Add new number</h2>
      <PersonForm
        onSubmit={addPerson}
        nameInputHandler={handleNameInput}
        numInputHandler={handleNumInput}
        newName={newName}
        newNumber={newNumber}
      />
      <PersonList persons={persons} filter={newFilter} onDelete={deletePerson}/>
    </div>
  )

}

export default App