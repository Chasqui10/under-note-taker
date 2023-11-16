// ./routes/index.js acts like the connection bridge between server.js and the route path note.js
const express = require('express');

const noteRouter = require('./notes');

const app = express();

app.use('/notes', noteRouter);

module.exports = app;