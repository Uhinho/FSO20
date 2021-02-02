import React from 'react'

const PersonList = ({persons, filter, onDelete}) => {


     return ( 
        <div>
            <h2>Numbers</h2>
            <ul>
                {persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
                .map(fp => <li key={fp.id}>{fp.name} {fp.number}<button onClick={() => onDelete(fp.id)}>Delete</button></li>)}
            </ul>
        </div>
    )
} 


export default PersonList
