/* React and React Router */
import React from 'react';
import ReactDOM from 'react-dom';

/* redux */
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './redux/store';

import App from './components/App.jsx'


const Root = props => (
 <Provider store={store}>
    <App />
</Provider>
);
ReactDOM.render(<Root />, document.getElementById('app'));




