const express = require('express');
const router = express.Router();
const tasks = require('../models/task.js');

router.get('/', function(req, res, next) {
  tasks.fetchAll().then((data => {
    res.json(data.toJSON());
  }))
});

module.exports = router;
