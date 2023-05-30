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
      <a href="/listings/upload_photo">Upload Your Products Images Here</a>
      <br />
      <a href="/listings/photos">View All Your Products Images Here</a>
      <br />
      <a href="/listings/create">Create a Product</a>
      <br />
      <a href="/listings">Browse your listings</a>
      <br />
 
    </div>
  )
}

export default HomePage
