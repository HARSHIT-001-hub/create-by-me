import React from 'react'
import IRCTC from '../assets/irctc.jpg'
import './Usercard.css'

const UserCard  = () => {
  return (
    <div className='user-container'>
      <p className='title'>IRCTC</p>
      <img className='img' src={IRCTC}></img>
      <p className='title'>To Book Ticket Online</p>
    </div>
  )
}

export default UserCard 
