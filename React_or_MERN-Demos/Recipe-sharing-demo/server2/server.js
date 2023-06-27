// npm install express mongoose cors
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/recipe_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Define recipe routes
const recipeRouter = require('./routes/recipe');
app.use('/recipes', recipeRouter);

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
