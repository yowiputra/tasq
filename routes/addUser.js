const express = require('express');
const router = express.Router();
const users = require('../models/user.js');

router.post('/', function(req, res, next) {
  const {name} = req.body;
  users.forge({name: name})
  .save()
  .then(() => {
    users.query({
      where: {name: name}
    })
    .fetch()
    .then(data => {
      res.json(data.toJSON());
    });
  });
});

module.exports = router;
