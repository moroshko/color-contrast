import styles from './Preview.less';

import React, { Component, PropTypes } from 'react';
import colorUtils from 'utils/color';
import accessibilityUtils from 'utils/accessibility';

export default class Preview extends Component {
  static propTypes = {
    accessibilityLevel: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    foregroundColor: PropTypes.string.isRequired,
    fontSize: PropTypes.string.isRequired,
    isFontBold: PropTypes.bool.isRequired
  };

  render() {
    const { accessibilityLevel, backgroundColor, foregroundColor,
            fontSize, isFontBold } = this.props;
    const contrast = colorUtils.contrast(backgroundColor, foregroundColor);
    const accessibleContrast =
      accessibilityUtils.accessibleContrast(accessibilityLevel, fontSize, isFontBold);
    const isAccessible = (contrast >= accessibleContrast);
    const style = {
      color: foregroundColor,
      backgroundColor,
      fontSize: fontSize + 'px',
      fontWeight: isFontBold ? 'bold' : 'normal'
    };

    return (
      <div className={styles.container}>
        <div className={styles.currentContrast}>
          Current contrast: {contrast}
        </div>
        <div className={styles.isAccessible}>
          {do {
            if (isAccessible) {
              <span className={styles.accessible}>Accessible</span>
            } else {
              <span className={styles.notAccessible}>Not accessible</span>
            }
          }}
        </div>
        <div className={styles.text} style={style}>
          To specify how the state tree is transformed by the actions,
          you write pure reducers.
        </div>
      </div>
    );
  }
}
