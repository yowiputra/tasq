const express = require('express');
const router = express.Router();
const tasks = require('../models/task.js');

/* GET users listing. */
router.get('/:userid', function(req, res, next) {
  tasks.query({
    where: {user_id: req.params.userid}
  })
  .fetchAll()
  .then((data => {
    res.json(data.toJSON());
  }))
});

module.exports = router;
