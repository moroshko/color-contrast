import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from 'App/App';

class ColorContrast extends Component {
  render() {
    return (
      <App />
    );
  }
}

ReactDOM.render(
  <ColorContrast />,
  document.getElementById('color-contrast')
);
