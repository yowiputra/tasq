require('dotenv').config();

const ENV = process.env.ENV || "development";
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const knexLogger  = require('knex-logger');
const knexConfig  = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);

const getAllUsers = require('./routes/getAllUsers');
const getUserTasks = require('./routes/getUserTasks');
const port  = process.env.SERVER_PORT || 3001;

const app = express();

app.use(logger('dev'));
app.use(knexLogger(knex));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Get routes
app.use('/users', getAllUsers);
app.use('/usertasks', getUserTasks);

// Post routes

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
