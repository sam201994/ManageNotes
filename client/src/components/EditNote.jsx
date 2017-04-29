/* modules */
import React, {Component} from 'react';
import store from '../redux/store';
import { connect } from 'react-redux';

/* other files */
import { updateDiscription, saveUpdated } from '../redux/actions/noteActions.js'

const EditNote = ({ note }) => {

  return (
    <div>
      <h3>{note.currentNote}</h3>
      <textarea 
        type="text" 
        name="disp" 
        defaultValue={note.currentDiscription} 
        onChange={updateDiscription}/>
      <button 
        className="btn" 
        onClick={saveUpdated.bind(null,note.currentDiscription, note.notes[note.currentNote].id,note.currentNote)}>
        Save
      </button>
      <div className="error-text">{note.error}</div>
    </div>
  )
}

export default connect((store) => {
  return {
    note : store.note
  };
})(EditNote);


  