// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('content')
);

if (module.hot) {
  __webpack_public_path__ = "http://localhost:3001/static/js/";
  module.hot.accept()
}