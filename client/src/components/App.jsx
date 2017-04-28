/* React */
import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './TopBar.jsx'

import ListOfNotes from './ListOfNotes.jsx'
import { getNotes } from '../redux/actions/noteActions.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }
  ComponentWillMount() {
    getNotes();
  }
  render() {
    return (
      <div>
        <TopBar />
        <ListOfNotes />
      </div>
    );
  }
}
