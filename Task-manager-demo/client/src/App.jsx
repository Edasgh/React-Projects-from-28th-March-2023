import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios.get('http://localhost:5000/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const addTask = () => {
    const newTask = {
      title: title,
      deadline: deadline,
      category: category,
    };

    axios.post('http://localhost:5000/tasks', newTask)
      .then(res => {
        console.log(res.data);
        fetchTasks();
      });

    setTitle('');
    setDeadline(new Date());
    setCategory('');
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`)
      .then(res => {
        console.log(res.data);
        fetchTasks();
      });
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <form onSubmit={addTask}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Deadline: </label>
          <DatePicker
            selected={deadline}
            onChange={(date) => setDeadline(date)}
          />
        </div>
        <div>
          <label>Category: </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Add Task</button>
        </div>
      </form>
      <h3>Tasks</h3>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Deadline</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.deadline.substring(0, 10)}</td>
              <td>{task.category}</td>
              <td>
                <button onClick={() => deleteTask(task._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
