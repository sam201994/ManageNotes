import React, {Component} from 'react';

/* Redux */
import store from '../redux/store';
import { connect } from 'react-redux';


const EachNote = ({ name, discription, note }) => {

  return (
    <div>
	   {name + " " +discription}
    </div>
  )
}

export default connect((store) => {
  return {
    note : store.note
  };
})(EachNote);

// {JSON.stringify(friends.friendsList)}
