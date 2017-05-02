/* modules */
import React, {Component} from 'react';
import store from '../redux/store';
import { connect } from 'react-redux';

/* other files */
import { updateDiscription, saveUpdated, updateCurrentTag, addTags } from '../redux/actions/noteActions.js'
import Styles from './Styles.css';

/* componenets */
import Tag from './Tag.jsx'

const EditNote = ({ note }) => {

  return (
    <div className={Styles.outer}>

      <div className={Styles.NavBar}>
        <div className={Styles.NavBar_left}>
          <h3 className={Styles.inner}>{note.currentNote}</h3>
        </div>
      </div>

      
      <div className={Styles.textArea}>
          <div className={Styles.textArea_box1}>
            <textarea rows="25" cols="63"
              type="text" 
              name="disp" 
              defaultValue={note.currentDiscription} 
              onChange={updateDiscription}/>
          </div>
          <div className={Styles.textArea_box2}>
            <button 
              className={Styles.button} 
              onClick={saveUpdated.bind(null,note.currentDiscription, note.notes[note.currentNote].id,note.currentNote)}>
              Save
            </button>
          </div>
      </div>

      <div className={Styles.tag}>
        <div className={Styles.tag_left}>
          <input onChange={updateCurrentTag} type="text" name="tag" placeholder="tag" required/>
        </div>
        <div className={Styles.tag_right}>
          <button 
            className={Styles.button}
            onClick={addTags.bind(null,note.currentTag,  note.notes[note.currentNote].id)}>
            Add Tags
          </button>
        </div>
      </div>

      <div className={Styles.tag_footer}>
        {note.notes[note.currentNote].tags.map((item) => {
          return (
            <Tag
              name={item} 
            />
          );   
        })}
      </div>
    </div>
  )
}

export default connect((store) => {
  return {
    note : store.note
  };
})(EditNote);

  