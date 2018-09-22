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
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
},{
  collection: 'users'
});

module.exports = mongoose.model('Users', Users);
