/* modules */
import React, {Component} from 'react';
import {Link} from 'react-router';
import store from '../redux/store';
import { connect } from 'react-redux';

/* other files */
import { updateCurrentNote, deleteNote } from '../redux/actions/noteActions.js'
import Styles from './Styles.css';

const EachNote = ({ name, discription, note }) => {
  return (

    <div className={Styles.note}>
      <div className={Styles.note_left}>
        {name}
      </div>
      <div className={Styles.note_right}>
        <Link to={"note/" + name}>
    		     <button onClick={updateCurrentNote.bind(null,name)} className={Styles.button}>Edit</button>
        </Link>
        <button onClick={deleteNote.bind(null, note.notes[name].id)} className={Styles.button}>Delete</button>
      </div>
    </div>
  )
}
	
export default connect((store) => {
  return {
    note : store.note
  };
})(EachNote);
