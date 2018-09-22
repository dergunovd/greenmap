const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  role: {
    type: Number,
    required: true,
    default: 1
  }
},{
  collection: 'users'
});

module.exports = mongoose.model('Users', Users);
