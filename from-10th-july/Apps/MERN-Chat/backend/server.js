const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const colors = require("colors");
const { chats } = require("./data/data");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");

const app = express();
dotenv.config();
connectDB();

app.use(cors());
app.use(express.json()); // to accept json data

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the chat-app server</h1>`);
});

app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Server listening at port no. : ${port}`.yellow.bold);
});
