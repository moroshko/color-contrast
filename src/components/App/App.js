import styles from './App.less';

import React, { Component } from 'react';
import Header from 'Header/Header';
import UserInput from 'UserInput/UserInput';
import Preview from 'Preview/Preview';

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <UserInput />
        <Preview />
      </div>
    );
  }
}
