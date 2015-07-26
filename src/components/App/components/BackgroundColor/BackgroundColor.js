import styles from './BackgroundColor.less';

import React, { Component, PropTypes } from 'react';
import Color from 'Color/Color';

export default class BackgroundColor extends Component {
  static propTypes = {
    isValid: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    updateBackgroundColor: PropTypes.func.isRequired
  };

  render() {
    const { isValid, value, updateBackgroundColor } = this.props;
    const id = 'background-color';

    return (
      <div>
        <label className={styles.label} htmlFor={id}>
          Background color:
        </label>
        <Color id={id} isValid={isValid} value={value}
               updateValue={updateBackgroundColor} />
      </div>
    );
  }
}
