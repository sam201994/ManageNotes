/* other modules */
import React, {Component} from 'react';
import store from '../redux/store';
import { connect } from 'react-redux';

/* components */
import EachNote from './EachNote.jsx';

class ListOfNotes extends React.Component {

  constructor(props) {
    super(props);
  }
  search(key) {
    
    const { note } = this.props;
    if(note.searchValue === '')
      return true;

    if( note.notes[key].discription.indexOf(note.searchValue) !== -1
     || note.notes[key].tags.join(",").indexOf(note.searchValue) !== -1)
      return true;
    return false;
  }
  render() {
     const { note } = this.props;
    return (
      <div>
         <div>
          {Object.keys(note.notes).map((key, index) => {
            if(this.search(key)){
              return (
                <EachNote 
                key={index} 
                name={key} 
                discription={note.notes[key].discription}/>
              );   
            }   
          })}
        </div>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    note : store.note
  };
})(ListOfNotes);




