import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';
import credentials from './credentials';

firebase.initializeApp(credentials);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
