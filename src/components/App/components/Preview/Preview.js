import styles from './Preview.less';

import React, { Component, PropTypes } from 'react';
import { accessibleContrast } from 'utils/accessibility/accessibility';
import { findClosestAccessibleColor } from 'utils/color/color';

export default class Preview extends Component {
  static propTypes = {
    foregroundColor: PropTypes.object.isRequired,
    fontSize: PropTypes.object.isRequired,
    isFontBold: PropTypes.bool.isRequired,
    backgroundColor: PropTypes.object.isRequired,
    accessibilityLevel: PropTypes.string.isRequired,
  };

  render() {
    const { foregroundColor, fontSize, isFontBold,
            backgroundColor, accessibilityLevel } = this.props;
    const contrast = accessibleContrast(accessibilityLevel, fontSize, isFontBold);
    const originalStyle = {
      color: foregroundColor.value,
      backgroundColor: backgroundColor.value
    };
    const newBackgroundStyle = {
      color: foregroundColor.value,
      backgroundColor: backgroundColor.value
    };
    const newForegroundStyle = {
      color: foregroundColor.value,
      backgroundColor: backgroundColor.value
    };

    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.newBackground + ' ' + styles.preview}
               style={newBackgroundStyle}>
            <h2 className={styles.previewHeader}>new background</h2>
            <p>{backgroundColor.value} background</p>
          </div>
          <div className={styles.preview}
               style={originalStyle}>
            <h2 className={styles.previewHeader}>original</h2>
            <p>{foregroundColor.value} text</p>
            <p>{backgroundColor.value} background</p>
          </div>
          <div className={styles.newTextColor + ' ' + styles.preview}
               style={newForegroundStyle}>
            <h2 className={styles.previewHeader}>new text color</h2>
            <p>{foregroundColor.value} text</p>
          </div>
        </div>
      </div>
    );
  }
}
