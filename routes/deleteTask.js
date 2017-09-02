const express = require('express');
const router = express.Router();
const tasks = require('../models/task.js');

router.post('/', function(req, res, next) {
  const {id, userid} = req.body;
  tasks.where({id: id})
  .destroy()
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
