import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"

const Add = () => {
  const [book,setBook]=useState({
    title:"",
    description:"",
    price:null,
    cover:""

  })
const navigate=useNavigate()
  const handleChange=(e)=>{
setBook((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
const handleSubmit=async(e)=>{
e.preventDefault()
try {
  await axios.post("http://localhost:8080/books",book)
navigate("/")
} catch (error) {
  console.log(error)
}
}
  return (
    <>
     <h1>Add a New Book</h1>
     <form className='form' id="addBook" onSubmit={handleSubmit}>
      <input type="text" name="title" id="title" placeholder='Enter title of the book' onChange={handleChange} />
      <textarea name="description" id="description" placeholder='Enter description of the book' onChange={handleChange} ></textarea>
      <input type="number" name="price" id="price" placeholder='Enter the price of the book'  onChange={handleChange} />
      <input type="text" name="cover" id="cover" placeholder='Add a book cover'  onChange={handleChange} />
      <button type="submit">Add</button>
      </form> 
    </>
  )
}

export default Add
