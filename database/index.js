const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dogrates', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', (e) => {
  console.log('mongoose connection error', e);
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

module.exports = db;