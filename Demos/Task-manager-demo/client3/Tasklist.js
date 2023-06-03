import React from 'react';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>{task.deadline}</p>
          <p>{task.category}</p>
          <button onClick={() => onDeleteTask(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
