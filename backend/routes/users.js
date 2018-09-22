const express = require('express');
const Users = require('../models/users');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('helloworld');
});

router.post('/', (req, res, next) => {
  const user = new Users(req.body);
  user.save()
    .then((user) => {
      console.log(user);
      res.status(201).json({'user': 'User added successfully'});
    })
    .catch((err) => {
      res.status(400).send("Unable to save the user into database");
    });
});

module.exports = router;
