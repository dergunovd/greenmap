const express = require('express');
const crypto = require('crypto');
const Users = require('../models/users');
const router = express.Router();

router.get('/', (req, res) => {
  Users.find((err, courses) => {
    if (err) {
      console.log(err);
    }
    else {
      res.json(courses);
    }
  });
});

router.post('/', (req, res) => {
  const token = crypto.randomBytes(16).toString('hex');
  const user = new Users({...req.body, token});
  user.save()
    .then((user) => {
      res.status(201).json(user);
    })
    .catch(() => {
      res.status(400).send('Unable to save the user into database');
    });
});

router.get('/auth', (req, res) => {
  Users.find({
    email: req.params.email,
    password: req.params.password
  }, 'token', (err, users) => {
    if (err) {
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});

module.exports = router;
