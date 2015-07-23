import styles from './App.less';

import React, { Component } from 'react';
import Login from 'Login/Login';

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Login />
      </div>
    );
  }
}
