const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index');
// const findDogsAndUpdate = require('../database/controllers/rsvp');

const app = express();
const PORT = 7070;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

// app.post('/rsvps', findRsvpAndUpdate);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
