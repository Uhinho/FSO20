import React from 'react'

const PersonForm = ({onSubmit, nameInputHandler, numInputHandler, newName, newNumber}) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>Name: <input onChange={nameInputHandler} value={newName} /></div>
                <div>Number: <input onChange={numInputHandler} value={newNumber}/></div>
                <div><button type="submit">add</button></div>
            </form>
        </div>
    )
}

export default PersonForm