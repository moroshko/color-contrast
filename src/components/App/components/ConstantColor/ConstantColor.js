import styles from './ConstantColor.less';

import React, { Component, PropTypes } from 'react';

export default class ConstantColor extends Component {
  static propTypes = {
    isValid: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  render() {
    const { isValid, value, onChange } = this.props;
    const id = 'constant-color';

    return (
      <div>
        <label className={styles.label} htmlFor={id}>
          Constant color:
        </label>
        #<input id={id} className={!isValid && styles.error}
                type="text" value={value}
                onChange={event => onChange(event.currentTarget.value)} />
      </div>
    );
  }
}
