const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  mobile:{
    typr: Number,
    required: true
  },
  image: {
    type: String,
    default: 'default.jpg'
  }
});

const Admin = mongoose.model('Admin', adminSchema);
const User = mongoose.model('User', userSchema);

module.exports = { Admin, User };