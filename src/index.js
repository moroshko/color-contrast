import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, Connector } from 'react-redux';
import appReducer from 'flux/reducers/app';
import App from 'App/App';

class ColorContrast extends Component {
  constructor() {
    super();

    this.store = createStore(appReducer);
  }

  select(state) {
    return { state };
  }

  render() {
    return (
      <Provider store={this.store}>
        {() =>
          <Connector select={this.select}>
            {
              ({ state, dispatch }) => <App state={state} dispatch={dispatch} />
            }
          </Connector>
        }
      </Provider>
    );
  }
}

ReactDOM.render(
  <ColorContrast />,
  document.getElementById('color-contrast')
);
