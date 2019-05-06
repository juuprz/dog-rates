const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const postDoge = require('../database/controllers/dogs');

const app = express();
const PORT = 7070;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/api/upload/', postDoge);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
