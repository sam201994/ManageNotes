/* React and React Router */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';
/* redux */
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './redux/store';

import App from './components/App.jsx'

import EditNote from './components/EditNote.jsx'


const Root = props => (
 <Provider store={store}>

<Router history={browserHistory}>
   <Route path="/" component={App}/>
   <Route path = "note/:name" component={EditNote}></Route>
</Router>


</Provider>
);
ReactDOM.render(<Root />, document.getElementById('app'));


