import styles from './Login.less'

import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
          <label htmlFor="username">Username:</label>
          <input id="username" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" />
        </div>
        <div>
          <button>Login</button>
        </div>
      </div>
    );
  }
}
