const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  name: { type: String, required: true, index: { unique: true } },
  discription: { type: String, required: false },
  tags: { type: Array, required: false , 'default': []},
  created_at: Date
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;