const mongoose = require('mongoose');

//create schema for users

//using the schema to create a model , we are going to use this model to write query
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, 'Name is too short'],
    maxlength: [30, 'Name is too long'],
    trime: true,
  },
  email: { type: String, unique: true, required: true },
  password: { type: String},
  isActive: { type: Boolean, default: true },
  role : {
    type : String ,
    enum : ['admin','customers'],
    default : 'admin'
  },
  lastlogin: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model('user', userSchema);
console.log(User);

module.exports = User;