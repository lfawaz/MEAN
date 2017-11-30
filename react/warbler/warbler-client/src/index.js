import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import Signup from './signup';
import Login from './login'

ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();
