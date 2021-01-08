import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import AppFunct from './AppFunct';
import registerServiceWorker from './registerServiceWorker';


// This where we render the "App" component that will in turn render all of the other components.
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
