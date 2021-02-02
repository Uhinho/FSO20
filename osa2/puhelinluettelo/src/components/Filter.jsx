import React from 'react'

const Filter = ({handleFilterInput, newFilter}) => {
    return (
        <div>
            <p>Filter shown with <input onChange={handleFilterInput} value={newFilter}></input></p>
        </div>
    )

}


export default Filter