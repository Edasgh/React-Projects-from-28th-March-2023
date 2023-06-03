import React, { useState} from "react";
import { databases } from "../appwrite/appwriteConfig";
import { v4 as uuidv4 } from "uuid";

const TodoForm = () => {
  const [todo, setTodo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const promise = databases.createDocument(
      "64663f99f140b3707491",
      "64663fc269592731e80b",
      uuidv4(),
      {
        todo,
      }
    );
    promise.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );

    e.target.reset();
    window.location.reload();
  };
  return (
    <>
      <form id="todoForm" method="post" onSubmit={handleSubmit}>
        {/* <label htmlFor="title">Add a Title</label>
      <input type="text" name="title" id="title" /> */}

        <label htmlFor="desc">Add a Description</label>
        <input
          type="text"
          name="desc"
          id="desc"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />

        {/* <label htmlFor="catg">Add a Category</label>
      <input type="text" name="catg" id="catg" /> */}

        <button type="submit">Add todo</button>
      </form>
    </>
  );
};

export default TodoForm;
