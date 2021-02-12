import React from 'react'

const Notification = ({message,color}) => {

    if (message === null) {
        return null
    }

    return (
        <div className='notificationMsg' style={{color: color}}>
            <p>{message}</p>
        </div>
    )
}

export default Notification