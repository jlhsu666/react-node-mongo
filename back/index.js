const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); //cross origin resources sharing

dotenv.config();

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME,
} = process.env;

// mongodb://user:passwd@127.0.0.1:27017/knutest
const MONGO_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`

mongoose
.connect(MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true})
.then( () => {console.log("MongonDB is connected")} )
.catch( (err) => {console.log(err)} );

app.use(express.json());
app.use(cors());

app.use("/user", require("./routers/user.js"));

app.listen(5000, () => {console.log("Server is running on port 5000")});