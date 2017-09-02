const express = require('express');
const router = express.Router();
const tasks = require('../models/task.js');

router.post('/:userid', function(req, res, next) {
  const {task} = req.body;
  tasks.forge({
    task: task,
    user_id: req.params.userid
  })
  .save()
  .then(() => {
    tasks.query({
      where: {task: task}
    })
    .fetch()
    .then(data => {
      res.json(data.toJSON());
    })
  })
});

module.exports = router;
