const express = require('express');
const app = express();


const homeRouter = require('./src/routes/home');


app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));

app.use('/', homeRouter);


module.exports = app;
