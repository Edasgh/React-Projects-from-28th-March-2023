const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { chats } = require("./data/data");

const app = express();
dotenv.config();

app.use(cors());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the chat-app server</h1>`);
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});
app.get("/api/chats/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

app.listen(port, () => {
  console.log(`Server listening at port no. : ${port}`);
});
