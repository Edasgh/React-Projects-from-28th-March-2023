const express = require("express");
const { connectDB } = require("./config/db");
const app = express();
const port = 8080;

app.listen(port, async () => {
  await connectDB();
  console.log(`server listening on http://localhost:${port}`);
});
