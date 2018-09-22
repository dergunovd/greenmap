const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Events = new Schema({
  title: {
    type: String,
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  log: {
    type: Number,
    required: true
  },
  type: {
    type: Number,
    required: true
  },
  author: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Users',
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  }
},{
  collection: 'events'
});

module.exports = mongoose.model('Events', Events);
// {
//   "id": "1",
//   "title": "Обустроить детскую площадку",
//   "lat": 51.614263,
//   "log": 45.986176,
//   "type": 2,
//   "author": 1
// },