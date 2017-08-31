const express = require('express');
const router = express.Router();
const users = require('../models/user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  users.fetchAll().then((data => {
    res.json(data.toJSON());
  }))
});

module.exports = router;
