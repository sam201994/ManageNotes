/* React */
import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './TopBar.jsx'

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <TopBar />
      </div>
    );
  }
}
