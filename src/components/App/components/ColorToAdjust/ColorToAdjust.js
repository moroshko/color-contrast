import styles from './ColorToAdjust.less';

import React, { Component, PropTypes } from 'react';

export default class ColorToAdjust extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  render() {
    const { value, onChange } = this.props;
    const id = 'color-to-adjust';

    return (
      <div>
        <label className={styles.label} htmlFor={id}>
          Color to adjust:
        </label>
        #<input id={id} type="text" value={value}
                onChange={event => onChange(event.currentTarget.value)} />
      </div>
    );
  }
}
