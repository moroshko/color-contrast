import styles from './ForegroundColor.less';

import React, { Component, PropTypes } from 'react';

export default class ForegroundColor extends Component {
  static propTypes = {
    isValid: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    updateForegroundColor: PropTypes.func.isRequired
  };

  render() {
    const { isValid, value, updateForegroundColor } = this.props;
    const id = 'foreground-color';

    return (
      <div>
        <label className={styles.label} htmlFor={id}>
          Foreground color:
        </label>
        <input id={id} className={!isValid && styles.error}
               type="text" value={value}
               onChange={event => updateForegroundColor(event.currentTarget.value)} />
      </div>
    );
  }
}
