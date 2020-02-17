import express from "express";
import cors from "cors";
import mongoose from 'mongoose';
import bodyParse from 'body-parser';
import apiRoute from './src/api-routes/api-route.js';

const app = express();
app.use(cors());

app.use(bodyParse.urlencoded({
    extend: true
}));

app.use(bodyParse.json());

mongoose.connect('mongodb: localhost/flick', {useNewUrlParser: true});

let db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

let port = process.env.PORT || 8080;

app.get("/", (req, res) => res.send("Hi with Express"));
app.use('/', apiRoute);

app.listen(port, function() {
  console.log("the started the server", +port);
});
