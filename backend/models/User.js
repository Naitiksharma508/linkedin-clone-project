const mongoose = require('mongoose');
// This is the blueprint for a User
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },




  
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    default: 'New User',
  },
}, {
  timestamps: true 
});

module.exports = mongoose.model('User', UserSchema);