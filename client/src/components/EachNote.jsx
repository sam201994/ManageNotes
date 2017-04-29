/* modules */
import React, {Component} from 'react';
import {Link} from 'react-router';
import store from '../redux/store';
import { connect } from 'react-redux';

/* other files */
import { updateCurrentNote, deleteNote } from '../redux/actions/noteActions.js'

const EachNote = ({ name, discription, note }) => {
  return (
    <div>
	   {name}
	    <Link to={"note/" + name}>
 		     <button onClick={updateCurrentNote.bind(null,name)}>edit</button>
      </Link>
	    <button onClick={deleteNote.bind(null, note.notes[name].id)}>del</button>
    </div>
  )
}
	
export default connect((store) => {
  return {
    note : store.note
  };
})(EachNote);
