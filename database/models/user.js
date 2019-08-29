// not in use
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  userId: String,
  userName: String,
});
const User = mongoose.model('User', userSchema);
module.exports = User;