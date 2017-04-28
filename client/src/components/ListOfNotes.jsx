import React, {Component} from 'react';

/* Redux */
import store from '../redux/store';
import { connect } from 'react-redux';

import EachNote from './EachNote.jsx';

const ListOfNotes = ({ note }) => {

  return (
    <div>

       <div>
	      {
          Object.keys(note.notes).map((key, index) => {
                return (
                  <EachNote 
                  key={index} 
                  name={key} 
                  discription={note.notes[key].discription}/>
                );
              
            })
        }
    	</div>
    </div>
  )
}

export default connect((store) => {
  return {
    note : store.note
  };
})(ListOfNotes);

// {JSON.stringify(friends.friendsList)}