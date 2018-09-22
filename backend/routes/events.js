const express = require('express');
const Users = require('../models/users');
const Events = require('../models/events');
const router = express.Router();

router.get('/', (req, res) => {
  Events.find((err, courses) => {
    if (err) {
      console.log(err);
    }
    else {
      res.json(courses);
    }
  });
});

router.post('/', async (req, res) => {
  const author = await Users.findOne({token: req.body.token}, '_id').exec();
  console.log(author);
  const event = new Events({...req.body, author: author._id});
  console.log(event);
  event.save()
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).send('Unable to save the event into database');
    });
});

module.exports = router;
