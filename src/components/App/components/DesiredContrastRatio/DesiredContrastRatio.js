import styles from './DesiredContrastRatio.less';

import React, { Component, PropTypes } from 'react';

export default class DesiredContrastRatio extends Component {
  static propTypes = {
    isValid: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    updateDesiredContrastRatio: PropTypes.func.isRequired
  };

  render() {
    const { isValid, value, updateDesiredContrastRatio } = this.props;
    const id = 'contrast-ratio';

    return (
      <div className={styles.container}>
        <label className={styles.label} htmlFor={id}>
          Desired contrast ratio:
        </label>
        <div className={styles.field}>
          <input id={id} className={!isValid && styles.error}
                 type="text" value={value}
                 onChange={event => updateDesiredContrastRatio(event.currentTarget.value)} />
          <div className={styles.helpText}>between 1 and 21</div>
        </div>
      </div>
    );
  }
}
