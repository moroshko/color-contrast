import styles from './ConstantColor.less';

import React, { Component, PropTypes } from 'react';

export default class ConstantColor extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  render() {
    const { value, onChange } = this.props;
    const id = 'constant-color';

    return (
      <div>
        <label className={styles.label} htmlFor={id}>
          Constant color:
        </label>
        #<input id={id} type="text" value={value}
                onChange={event => onChange(event.currentTarget.value)} />
      </div>
    );
  }
}
