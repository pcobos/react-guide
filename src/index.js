import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import registerServiceWorker from './registerServiceWorker';


// This where we render the "App" component that will in turn render all of the other components.
ReactDOM.render(<App2 />, document.getElementById('root'));
registerServiceWorker();
