'use strict'
const express = require('express');
const app = express();
const port = process.env.PORT || 8001;
const db = require('./db/config.js');
const noteCtrl = require('./db/note/noteController.js');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function() {
  console.log('listening on port ' + port);
});

//routes
app.post('/createNote', noteCtrl.create)
app.get('/getNotes', noteCtrl.getNotes)
app.put('/updateNote', noteCtrl.updateNote)
app.delete('./deleteNote', noteCtrl.deleteNote)