/* modules */
import React from 'react';
import store from '../redux/store';
import { connect } from 'react-redux';

/* other files */
import { addNote, searchNote } from '../redux/actions/noteActions.js';
import Styles from './Styles.css';

const TopBar = ({ note }) => (

    <div>
      <div className={Styles.NavBar}>
        <div className={Styles.NavBar_left}>
          <h1>MyNotes</h1>
        </div>
        
        <div className={Styles.NavBar_right}>
          <input type="text" name="searchNote" placeholder="search" onChange={searchNote}/> 
        </div>
      </div>
      <div className={Styles.line}/>
    </div>

);

export default connect((store) => {
  return {
    note: store.note
  };
})(TopBar);
