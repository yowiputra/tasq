require('dotenv').config();

// dependencies
const ENV = process.env.ENV || "development";
const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const logger = require('morgan');
const knexLogger  = require('knex-logger');
const knexConfig  = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);

// require the routes
const getAllUsers = require('./routes/getAllUsers');
const getAllTasks = require('./routes/getAllTasks');
const getUserTasks = require('./routes/getUserTasks');
const addUser = require('./routes/addUser');
const addTask = require('./routes/addTask');
const completeTask = require('./routes/completeTask');
const deleteTask = require('./routes/deleteTask');
const deleteUser = require('./routes/deleteUser');

const port  = process.env.SERVER_PORT || 3001;

// server setup
const app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(knexLogger(knex));
app.set('view engine', 'ejs');

// setup the routes
app.use('/users', getAllUsers);
app.use('/tasks', getAllTasks);
app.use('/usertasks', getUserTasks);
app.use('/adduser', addUser);
app.use('/addtask', addTask);
app.use('/completetask', completeTask);
app.use('/deletetask', deleteTask);
app.use('/deleteuser', deleteUser);

app.listen(port, () => {
  console.log(`tasq server listening on port ${port}!`);
});
