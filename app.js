const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost/newsDB");
const connection = mongoose.connection;
connection.on('connected', () => console.log('Connect to DataBase...'));

app.use('/', require("./routes/routes"));

app.listen(5000, () => console.log('Server has been started on port 5000...'));