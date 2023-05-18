const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/task_manager', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Create a task schema
const taskSchema = new mongoose.Schema({
  title: String,
  deadline: Date,
  category: String,
});

const Task = mongoose.model('Task', taskSchema);

// Get all tasks
app.get('/tasks', (req, res) => {
  Task.find((err, tasks) => {
    if (err) {
      console.log(err);
    } else {
      res.json(tasks);
    }
  });
});

// Create a task
app.post('/tasks', (req, res) => {
  const task = new Task(req.body);
  task.save()
    .then(task => {
      res.status(200).json({ 'task': 'Task added successfully' });
    })
    .catch(err => {
      res.status(400).send('Adding new task failed');
    });
});

// Update a task
app.put('/tasks/:id', (req, res) => {
  Task.findById(req.params.id, (err, task) => {
    if (!task) {
      res.status(404).send('Task not found');
    } else {
      task.title = req.body.title;
      task.deadline = req.body.deadline;
      task.category = req.body.category;

      task.save()
        .then(task => {
          res.json('Task updated');
        })
        .catch(err => {
          res.status(400).send('Update not possible');
        });
    }
  });
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
  Task.findByIdAndRemove(req.params.id, (err, task) => {
    if (!task) {
      res.status(404).send('Task not found');
    } else {
      res.json('Task deleted');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
