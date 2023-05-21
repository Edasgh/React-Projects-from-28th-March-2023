import React from 'react'

const HomePage = () => {
  return (
    <div>
      <h1>This is home page</h1>
      <a href="/profile">Profile</a>
      <br />
      <a href="/signup">Register</a>
      <br />
      <a href="/login">Login</a>
      <br />
      <a href="/listings/create">Create a Product</a>
    </div>
  )
}

export default HomePage
