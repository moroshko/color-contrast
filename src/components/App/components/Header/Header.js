import styles from './Header.less';

import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
  // static propTypes = {
  //   value: PropTypes.string.isRequired,
  //   onEditEnd: PropTypes.func.isRequired
  // };

  render() {
    //const { value } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h1 className={styles.header}>
            COLOR CONTRAST
          </h1>
          <p className={styles.subHeader}>
            Make any color combination accessible
          </p>
        </div>
      </div>
    );
  }
}
