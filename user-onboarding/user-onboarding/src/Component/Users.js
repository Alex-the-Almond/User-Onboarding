import React from 'react'

export default function User ({details}) {
    if(!details){
        return <h3>Fetching User Details, please wait...</h3>
    }
    return (
        <div className='User container'>
            <h2>Username: {details.username}</h2>
            <p>Email: {details.email}</p>
        </div>
    )
}