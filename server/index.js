'use strict'
const express = require('express');
const app = express();
const port = process.env.PORT || 8001;
const db = require('./db/config.js');

const bodyParser = require('body-parser');
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function() {
  console.log('listening on port ' + port);
});


const noteCtrl = require('./db/note/noteController.js');
//routes
app.post('/createNote', noteCtrl.create)


// app.post('/users/create', userCtrl.create);

