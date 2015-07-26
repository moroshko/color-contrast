import styles from './ForegroundColor.less';

import React, { Component, PropTypes } from 'react';
import Color from 'Color/Color';

export default class ForegroundColor extends Component {
  static propTypes = {
    isValid: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    updateValue: PropTypes.func.isRequired
  };

  render() {
    const { isValid, value, updateValue } = this.props;
    const id = 'foreground-color';

    return (
      <div>
        <label className={styles.label} htmlFor={id}>
          Foreground color:
        </label>
        <Color id={id} isValid={isValid}
               value={value} updateValue={updateValue} />
      </div>
    );
  }
}
