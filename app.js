const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose')
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const todos = require("./routes/api/todos")
const bodyParser = require("body-parser");


app.use( bodyParser.urlencoded({ extended: false }));
app.use( bodyParser.json());
app.use("/api/users",users);
app.use("/api/todos",todos);
mongoose
    .connect( db, { useNewUrlParser: true })
    .then(() => console.log("connected to mongodb"))
    .catch(err => console.log(err))

app.get("/", (req, res) => res.send("Hello World"));    

app.listen(port, () => console.log(`Server is running on port ${port}`));