var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var posts = require('./routes/posts');
var friends = require('./routes/friends');

app.use('/posts', posts);
app.use('/friends', friends);

app.listen(3001);
module.exports = app;
