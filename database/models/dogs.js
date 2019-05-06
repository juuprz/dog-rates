const mongoose = require('mongoose');

const dogeSchema = mongoose.Schema({
  url: String,
  popularity_score: Number,
});
const Doge = mongoose.model('Doge', dogeSchema);
module.exports = Doge;