import styles from './DesiredContrastRatio.less';

import React, { Component, PropTypes } from 'react';

export default class DesiredContrastRatio extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  render() {
    const { value, onChange } = this.props;
    const id = 'contrast-ratio';

    return (
      <div>
        <label className={styles.label} htmlFor={id}>
          Desired contrast ratio:
        </label>
        <input id={id} type="text" value={value}
               onChange={event => onChange(event.currentTarget.value)} />
      </div>
    );
  }
}
