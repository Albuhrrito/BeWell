const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  favoriteDonutFlavor: {
    type: String,
    required: false,
  },
  // add other fields as necessary
});

module.exports = mongoose.model('User', UserSchema);
