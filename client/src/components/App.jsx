/* modules */
import React from 'react';
import ReactDOM from 'react-dom';

/* components */
import ListOfNotes from './ListOfNotes.jsx'
import TopBar from './TopBar.jsx'

/* other files */
import { getNotes } from '../redux/actions/noteActions.js';
import Styles from './Styles.css'; 

export default class App extends React.Component {

  constructor(props) {
    super(props);
    getNotes();
  }
  ComponentWillMount() {
     getNotes(); 
  }
  render() {
    return (
      <div className={Styles.outer}>
      <div className={Styles.inner}>
        <TopBar />
        <ListOfNotes />
      </div>
      </div>
    );
  }
}
