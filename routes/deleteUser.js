const express = require('express');
const router = express.Router();
const users = require('../models/user.js');

router.post('/', function(req, res, next) {
  const {id} = req.body;
  users.where({id: id})
  .destroy()
  .then(() => {
    users.fetchAll()
    .then(data => {
      res.json(data.toJSON());
    });
  });
});

module.exports = router;
