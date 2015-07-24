import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import thunk from 'redux-thunk';
import { Provider, Connector } from 'react-redux';
import * as actions from 'flux/actions';
import reducer from 'flux/reducer';
import App from 'App/App';

class ColorContrast extends Component {
  constructor() {
    super();

    this.store = createStore(reducer);
  }

  select(state) {
    return { state };
  }

  render() {
    return (
      <Provider store={this.store}>
        {() =>
          <Connector select={this.select}>
            {({ state, dispatch }) => {
              return (
                <App state={state} {...bindActionCreators(actions, dispatch)} />
              );
            }}
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
