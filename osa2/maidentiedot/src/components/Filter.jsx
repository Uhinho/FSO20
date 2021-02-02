import React from 'react'

const Filter = ({onChange, value}) => {

    return (
        <div>
            <p>Find Countries</p>
            <input onChange={onChange} value={value}></input>
        </div>

    )
}

export default Filter