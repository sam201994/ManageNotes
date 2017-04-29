/* modules */
import React, {Component} from 'react';
import store from '../redux/store';
import { connect } from 'react-redux';

/* other files */
import { updateDiscription, saveUpdated, updateCurrentTag, addTags } from '../redux/actions/noteActions.js'

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
      <div>
        <input onChange={updateCurrentTag} type="text" name="tag" placeholder="tag" required/>
         <button 
          className="btn" 
          onClick={addTags.bind(null,note.currentTag,  note.notes[note.currentNote].id)}>
          Add Tags
        </button>
        <div>{(note.currentNote) ? JSON.stringify(note.notes[note.currentNote].tags) : ""}</div>
      </div>
    </div>
  )
}

export default connect((store) => {
  return {
    note : store.note
  };
})(EditNote);

//  <div>{(note.currentNote) ? JSON.stringify(note.notes[note.currentNote].tags) : ""}</div>
  