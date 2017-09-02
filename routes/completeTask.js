const express = require('express');
const router = express.Router();
const tasks = require('../models/task.js');

router.post('/', function(req, res, next) {
  const {bool, id, userid} = req.body;
  tasks.where({id: id})
  .save({done: bool}, {patch: true})
  .then(() => {
    tasks.query({
      where: {user_id: userid}
    })
    .fetchAll()
    .then(data => {
      res.json(data.toJSON());
    })
  })
});

module.exports = router;
