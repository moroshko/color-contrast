import styles from './AccessibilityIndicator.less';

import React, { Component, PropTypes } from 'react';

export default class AccessibilityIndicator extends Component {
  static propTypes = {
    isAccessible: PropTypes.bool.isRequired
  };

  render() {
    const { isAccessible } = this.props;

    return (
      <div className={styles.container}>
        {do {
          if (isAccessible) {
            <span className={styles.accessible}>Accessible</span>
          } else {
            <span className={styles.notAccessible}>Not accessible</span>
          }
        }}
      </div>
    );
  }
}
