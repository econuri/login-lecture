const express = require('express');
const app = express();

const homeRouter = require('./routes/home');


app.set("views", "./views");
app.set("view engine", "ejs");


app.use('/', homeRouter);


module.exports = app;
