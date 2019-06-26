import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { connect } from 'react-redux';
connect()(App);
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
