import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App txt="1" customText="Hello World" />, document.getElementById('root'));
registerServiceWorker();
