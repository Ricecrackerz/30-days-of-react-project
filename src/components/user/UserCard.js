import React from 'react'
import ReactDOM from 'react-dom'
import dogImage from '../../assets/images/dog.jpg'

// User Card Component
const UserCard = () => (
    <div className='user-card'>
      <img src={dogImage} alt='dog image' />
      <h2>Vincent H</h2>
    </div>
  )

export default UserCard