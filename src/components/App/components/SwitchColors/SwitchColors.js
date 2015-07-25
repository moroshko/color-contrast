import styles from './SwitchColors.less';

import React, { Component, PropTypes } from 'react';

export default class SwitchColors extends Component {
  static propTypes = {
    switchColors: PropTypes.func.isRequired
  };

  render() {
    const { switchColors } = this.props;

    return (
      <div className={styles.container}>
        <button className={styles.button} onClick={switchColors}>
          ⇅
        </button>
      </div>
    );
  }
}
