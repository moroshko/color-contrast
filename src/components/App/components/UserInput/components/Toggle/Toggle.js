import styles from './Toggle.less';

import React, { Component, PropTypes } from 'react';

export default class Toggle extends Component {
  static propTypes = {
    values: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  render() {
    const { values, currentValue, onChange } = this.props;

    return (
      <div className={styles.container}>
        {
          currentValue === values[0] &&
          <div onClick={() => onChange(values[1])}>
            {values[0]}
          </div>
        }
        {
          currentValue === values[1] &&
          <div onClick={() => onChange(values[0])}>
            {values[1]}
          </div>
        }
      </div>
    );
  }
}
