// main.js
import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <RaisedButton label="Click Me!!!!!!!!!!" />
  </MuiThemeProvider>
);

export default App;