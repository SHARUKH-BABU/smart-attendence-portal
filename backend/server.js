import express from "express";
import mongoose from "mongoose";
import axios from "axios";
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("Hello World....!");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
