import express from "express";
import mysql from "mysql";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = process.env.PORT

app.use(express.json());
app.use(cors());
