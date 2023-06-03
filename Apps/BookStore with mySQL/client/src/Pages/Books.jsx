import React, { Fragment, useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Books = () => {
    const [books , setBooks] =useState([])

    useEffect(()=>{
    const fetchAllBooks=async()=>{
    try {
        const res=await axios.get("http://localhost:8080/books")
       setBooks(res.data)
    } catch (error) {
        console.log(error)
    }
    }
    fetchAllBooks()
    },[])

    const handleDelete=async(id)=>{
try {
  await axios.delete(`http://localhost:8080/books/${id}`)
  window.location.reload();
} catch (error) {
  console.log(error)
}
    }

  return (
    <div>
      <h1>Books page</h1>
      <div className="books">
        {books.map(book=>(
            <Fragment key={book.id}>
            <div className="book">
                {book.cover && <img src={book.cover} alt="" />}
                <h2>{book.title}</h2>
                <p>{book.description}</p>
                <p>Price : ${book.price}</p>
                <button className='delete' onClick={()=>handleDelete(book.id)}>Delete</button>
                <button className='update'><Link to={`/update/${book.id}`}>Update</Link></button>

            </div>
            </Fragment>
        ))}
       
      </div>
      <button>
            <Link to="/add">
                Add new book
            </Link>
        </button>
    </div>
  )
}

export default Books
