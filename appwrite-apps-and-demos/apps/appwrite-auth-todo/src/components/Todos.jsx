import React, { useState, useEffect } from "react";
import { databases } from "../appwrite/appwriteConfig";
import "dotenv/config";


const Todos = () => {
  const [todos,setTodos] = useState();
  const [loader,setLoader] = useState(false);

  useEffect(()=>{
   setLoader(true);
   const getTodos=databases.listDocuments( process.env.DB_ID,
   process.env.COLL_ID)

   getTodos.then(
    function(response){
      setTodos(response.documents)
    },
    function(error){
      console.log(error)
    }
   )
   setLoader(false)
  },[])

 const deleteTodo=(id)=>{
  const promise = databases.deleteDocument(process.env.DB_ID,
   process.env.COLL_ID,id)
  promise.then(
    function(response){
      console.log(response)
    },
    function(error){
      console.log(error)
    }
   )
   window.location.reload();
 }


  return (
    <div>
      <h1 className="text-5xl text-red-700 font-semibold text-center">Todo Lists</h1>
      {loader ?(
        <>
        <p className="text-5xl font-bold text-blue-700">...Loading</p>
        </>
      ) : (
    
       
       todos &&
        
 <div className="bg-red-300 text-black p-24 font-serif text-2xl rounded-md border-spacing-2">
    {todos.map(element => {
      return(
        <div key={element.$id} className="bg-red-700 text-white p-2 font-serif text-xl rounded-md border-spacing-2">
        <p>{element.todo}</p>

        <button className="bg-green-200 text-blue-950" onClick={()=>{deleteTodo(element.$id)}}>Delete</button>
        </div>
      )
    })}
    
      </div>
   

         
     
      )}
   
    </div>
  )
}

export default Todos
