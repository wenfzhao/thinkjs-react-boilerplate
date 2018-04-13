// main.js
import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { hot } from 'react-hot-loader';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <RaisedButton label="Click Me!!!!!!!!!!" />
  </MuiThemeProvider>
);

export default hot(module)(App);