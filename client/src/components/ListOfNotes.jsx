/* other modules */
import React, {Component} from 'react';
import store from '../redux/store';
import { connect } from 'react-redux';

/* components */
import EachNote from './EachNote.jsx';

/* other files */
import { addNote } from '../redux/actions/noteActions.js';
import Styles from './Styles.css';

class ListOfNotes extends React.Component {

  constructor(props) {
    super(props);
  }
  search(key) {
    
    const { note } = this.props;
    const searchValue = note.searchValue.toLowerCase();
    const discription = note.notes[key].discription.toLowerCase();
    const tags = note.notes[key].tags.join(",").toLowerCase();
    if(note.searchValue === '')
      return true;

    if( discription.indexOf(searchValue) !== -1
     || tags.indexOf(searchValue) !== -1)
      return true;
    return false;
  }
  render() {
     const { note } = this.props;
    return (
      <div className={Styles.mainList}>
        <div className={Styles.form}>
          <form name="CreateNote" onSubmit={addNote} >
            <div className={Styles.form_left}>
              <input type="text" name="myNote" placeholder="myNote" required />
            </div>
            <div className={Styles.form_right}>
              <button type="submit" className={Styles.button}>Add</button>
            </div>
          </form>
       </div>

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




