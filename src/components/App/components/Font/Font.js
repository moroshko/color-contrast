import styles from './Font.less';

import React, { Component, PropTypes } from 'react';

export default class Font extends Component {
  static propTypes = {
    isValid: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    isBold: PropTypes.bool.isRequired,
    updateFontSize: PropTypes.func.isRequired,
    toggleIsFontBold: PropTypes.func.isRequired
  };

  render() {
    const { isValid, value, isBold, updateFontSize, toggleIsFontBold } = this.props;
    const fontSizeId = 'font-size';
    const isFontBoldId = 'is-font-bold';

    return (
      <div className={styles.container}>
        <label className={styles.label} htmlFor={fontSizeId}>
          Font size:
        </label>
        <div className={styles.fontSizeContainer}>
          <input id={fontSizeId} className={!isValid && styles.error}
                 type="text" value={value}
                 onChange={event => updateFontSize(event.currentTarget.value)} />
          <div className={styles.helpText}>between 8 and 50</div>
        </div>
        <div className={styles.isFontBoldContainer}>
          <input id={isFontBoldId} className={styles.checkbox}
                 type="checkbox" value={isBold}
                 onChange={toggleIsFontBold} />
          <label htmlFor={isFontBoldId}>
            bold
          </label>
        </div>
      </div>
    );
  }
}
