import React, {Component} from 'react';
import {Link} from 'react-router';
/* Redux */
import store from '../redux/store';
import { connect } from 'react-redux';
import { updateCurrentNote } from '../redux/actions/noteActions.js'

const EachNote = ({ name, discription, note }) => {

  return (
    <div>
	   {name}
	     <Link to={"note/" + name}>
 		     <button onClick={updateCurrentNote.bind(null,name)}>edit</button>
         </Link>
	   <button>del</button>
    </div>
  )
}
	
export default connect((store) => {
  return {
    note : store.note
  };
})(EachNote);

// {JSON.stringify(friends.friendsList)}
 // <Link to="friends">
 //          <button>friends</button>
 //        </Link>