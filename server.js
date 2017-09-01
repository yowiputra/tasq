require('dotenv').config();

// dependencies
const ENV = process.env.ENV || "development";
const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const knexLogger  = require('knex-logger');
const knexConfig  = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);

// require routes
const getAllUsers = require('./routes/getAllUsers');
const getUserTasks = require('./routes/getUserTasks');
const addUser = require('./routes/addUser');
const addTask = require('./routes/addTask');
// const completeTask = require('./routes/completeTask');
// const deleteTask = require('./routes/deleteTask');

const port  = process.env.SERVER_PORT || 3001;

// server setup
const app = express();
app.use(logger('dev'));
app.use(knexLogger(knex));

// setup routes
app.use('/users', getAllUsers);
app.use('/usertasks', getUserTasks);
app.use('/adduser', addUser);
app.use('/addtask', addTask);
// app.use('/completeTask', completeTask);
// app.use('/deleteTask', deleteTask);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log(`tasq server listening on port ${port}!`);
})
