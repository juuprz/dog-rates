const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = 7070;

const db = require('../database/index.js');
const { postDoge, getTrendingDoges, getRatingDoges } = require('../database/controllers/dogs');
const { postComment } = require('../database/controllers/comments')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

// routes for dog posting/retrieving
app.post('/api/upload/', postDoge);
app.get('/api/trending/', getTrendingDoges);
app.get('/api/new/', getRatingDoges);

// routes for chats
app.post('/api/postcomment/', postComment);


server.listen(PORT, () => {
  console.log(`http server listening on port ${PORT}`);
});


io.on('connection', function (socket) {
  console.log('a user connected');
  // to add a listener for updated comment rendering
  socket.on('message', postComment);
    
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});
