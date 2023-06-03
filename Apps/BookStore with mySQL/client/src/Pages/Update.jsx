import React, { useState } from 'react'
import {useLocation, useNavigate} from "react-router-dom"
import axios from "axios"
const Update = () => {
  const [book,setBook]=useState({
    title:"",
    description:"",
    price:null,
    cover:""

  })
const navigate=useNavigate()
const location=useLocation()
const bookId=location.pathname.split("/")[2]
  const handleChange=(e)=>{
setBook((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
const handleSubmit=async(e)=>{
e.preventDefault()
try {
  await axios.put(`http://localhost:8080/books/${bookId}`,book)
navigate("/")
} catch (error) {
  console.log(error)
}
}
  return (
    <>
    <h1>Update the Book</h1>
    <form className='form' id="addBook" onSubmit={handleSubmit}>
     <input type="text" name="title" id="title" placeholder='Update title' onChange={handleChange} />
     <textarea name="description" id="description" placeholder='Update description' onChange={handleChange} ></textarea>
     <input type="number" name="price" id="price" placeholder='Update the price of the book'  onChange={handleChange} />
     <input type="text" name="cover" id="cover" placeholder='Update the book cover'  onChange={handleChange} />
     <button type="submit">Update</button>
     </form> 
   </>
  )
}

export default Update
