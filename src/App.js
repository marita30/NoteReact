import React, { Component } from 'react';
import { css } from 'glamor';

import Form from './components/Form';
import Notes from './components/Notes/Notes.js'




class  App extends Components {
  // Definiendo el estado actual
  state = { notes: [], filter: 'none' }

}

createNote = async note  => {
  const notes = [note, ...this.state.notes]
  const newNotes = this.state.notes
  this.setState({ notes })
}

updateNote = async note  => {
  const uptadedNote = {
    ...note,
    status: note.status === 'new' ? 'completed' : "new"
  }
  const index = this.state.notes.findIndex(i => i.id == note.id)
  const notes = [...this.state.notes]
  notes[index] = updateNote
  this.setState({ notes })
}

deleteNote = async note => {
  const input = { id: note.id }
  const
}





export default App;
