// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('content')
);

if (module.hot) {
  module.hot.accept('./App', () => {
      render(<App />, document.getElementById('content'))
  })
}