import express from "express";
import mysql from "mysql";
import cors from "cors"
const app = express();
const port = 8080;
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PW,
  database: "test",
});

app.get("/", (req, res) => {
  res.send("<h1>Welcome to backend </h1>");
});
//If there is any auth problem
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password using your password;

//setting up middleware
app.use(express.json())
app.use(cors())


app.get("/books", (req, res) => {
  const q = "SELECT * FROM books;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`,`description`,`cover`,`price`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.description,
    req.body.cover,
    req.body.price
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);

    return res.json(data);
  });
});

app.delete("/books/:id",(req,res)=>{
  const bookId=req.params.id
  const q="DELETE FROM books WHERE id=?"
  db.query(q,[bookId],(err,data)=>{
    if (err) return res.json(err);

    return res.json("Book has been deleted successfully!");
  })
})
app.put("/books/:id",(req,res)=>{
  const bookId=req.params.id
  const q="UPDATE books SET `title`=?, `description`=?,`cover`=?,`price`=? WHERE id=?"
  const values = [
    req.body.title,
    req.body.description,
    req.body.cover,
    req.body.price
  ];
  db.query(q,[...values,bookId],(err,data)=>{
    if (err) return res.json(err);

    return res.json("Book has been updated successfully!");
  })
})

app.listen(port, () => {
  console.log(`Server running on port : ${port}`);
});
