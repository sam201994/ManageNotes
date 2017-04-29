/* modules */
import React from 'react';
import store from '../redux/store';
import { connect } from 'react-redux';

/* other files */
import { addNote } from '../redux/actions/noteActions.js';

const TopBar = ({ note }) => (

    <div>
      <div>MyNotes</div>
      <form name="CreateNote" onSubmit={addNote}>
        <div>
          <input type="text" name="myNote" placeholder="myNote" required />
        </div>
        <button type="submit" className="btn">Add</button>
        <div className="error-text">{note.error}</div>
      </form>
    </div>

);

export default connect((store) => {
  return {
    note: store.note
  };
})(TopBar);