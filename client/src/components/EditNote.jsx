import React, {Component} from 'react';

/* Redux */
import store from '../redux/store';
import { connect } from 'react-redux';


const EditNote = ({ note }) => {

  return (
    <div>
      <h3>{note.currentNote}</h3>
      <textarea>{note.currentDiscription}</textarea>
      <button>save</button>
    </div>
  )
}

export default connect((store) => {
  return {
    note : store.note
  };
})(EditNote);

// {JSON.stringify(friends.friendsList)}
