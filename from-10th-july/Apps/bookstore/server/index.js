import express from "express";
import mysql from "mysql";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

//setting up middleware
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PW,
  database: "bookstore",
});

app.get("/", (req, res) => {
  res.send("<h1>Welcome to bookstore server</h1>");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books,", (req, res) => {
    const q="INSERT INTO books SET (`title`, `author`,`price`,`description`, `tags`) VALUES (?)"
    const values = [
      req.body.title,
      req.body.author,
      req.body.price,
      req.body.description,
      req.body.tag
    ];
    db.query(q,[...values],(err,data)=>{
      if (err) return res.json(err);
  
      return res.json(data);
    })
});


app.delete("/books/:id",(req,res)=>{
    const bookId=req.params.id;
    const q="DELETE FROM books WHERE book_id=?"
    db.query(q,[bookId],(err,data)=>{
        if (err) return res.json(err);
        return res.json("Book has been deleted successfully!");
    })
})



app.put("/books/:id",(req,res)=>{
    const bookId=req.params.id
    const q="UPDATE books SET `title`=?, `author`=?,`price`=?,`description`=? `tags`=? WHERE id=?"
    const values = [
      req.body.title,
      req.body.author,
      req.body.price,
      req.body.description,
      req.body.tag
    ];
    db.query(q,[...values,bookId],(err,data)=>{
      if (err) return res.json(err);
  
      return res.json("Book has been updated successfully!");
    })
  })






app.listen(port, () => {
  console.log(`Bookstore server listening at port no. ${port}`);
});
