import styles from './Color.less';

import React, { Component, PropTypes } from 'react';

export default class Color extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    isValid: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    updateValue: PropTypes.func.isRequired
  };

  render() {
    const { id, isValid, value, updateValue } = this.props;

    return (
      <input id={id} className={!isValid && styles.error}
             type="text" value={value}
             onChange={event => updateValue(event.currentTarget.value)} />
    );
  }
}
