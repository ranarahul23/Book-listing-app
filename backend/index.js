import express from "express";
import { PORT, mongodburl } from "../backend/config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from '../backend/routes/bookRoutes.js'
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());


// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         methods:['GET','POST','PUT','DELETE'],
//         allowedHeaders:['Content-Type'],
//     })
// );

app.get("/", (req, res) => {
    console.log(req);
    return res.status(200).send("Welcome to MERN stack");
});

app.use('/books',booksRoute);


mongoose.connect(mongodburl)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`Server is listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
