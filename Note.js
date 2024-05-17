import React from 'react';

function Note({ note, deleteNote }) {
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={() => deleteNote(note._id)}>Delete</button>
    </div>
  );
}

export default Note;
