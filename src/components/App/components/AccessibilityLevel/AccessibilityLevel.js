import styles from './AccessibilityLevel.less';

import React, { Component, PropTypes } from 'react';

export default class AccessibilityLevel extends Component {
  static propTypes = {
    accessibilityLevel: PropTypes.string.isRequired,
    updateAccessibilityLevel: PropTypes.func.isRequired
  };

  render() {
    const { accessibilityLevel, updateAccessibilityLevel } = this.props;

    return (
      <div className={styles.container}>
        <label className={styles.label}>
          Accessibility level:
        </label>
        <button className={styles.button + ' ' + (accessibilityLevel === 'AA' ? styles.active : '')} type="button"
                onClick={() => updateAccessibilityLevel('AA')}>AA</button>
        <button className={styles.button + ' ' + (accessibilityLevel === 'AAA' ? styles.active : '')} type="button"
                onClick={() => updateAccessibilityLevel('AAA')}>AAA</button>
      </div>
    );
  }
}
