import styles from './BackgroundColor.less';

import React, { Component, PropTypes } from 'react';

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
        <input id={id} className={!isValid && styles.error}
               type="text" value={value}
               onChange={event => updateBackgroundColor(event.currentTarget.value)} />
      </div>
    );
  }
}
