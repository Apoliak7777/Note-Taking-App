const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

router.get('/', (req, res) => {
  Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/', (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    content: req.body.content
  });

  newNote.save()
    .then(() => res.json(newNote))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/:id', (req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then(() => res.json('Note deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
