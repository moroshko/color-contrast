import styles from './ColorToAdjust.less';

import React, { Component, PropTypes } from 'react';

export default class ColorToAdjust extends Component {
  static propTypes = {
    isValid: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  render() {
    const { isValid, value, onChange } = this.props;
    const id = 'color-to-adjust';

    return (
      <div>
        <label className={styles.label} htmlFor={id}>
          Color to adjust:
        </label>
        #<input id={id} className={!isValid && styles.error}
                type="text" value={value}
                onChange={event => onChange(event.currentTarget.value)} />
      </div>
    );
  }
}
