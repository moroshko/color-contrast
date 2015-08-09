import styles from './Preview.less';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { accessibleContrast } from 'utils/accessibility/accessibility';
import { findClosestAccessibleColor, contrast } from 'utils/color/color';

function mapStateToProps(state) {
  return {
    foregroundColor: state.foregroundColor,
    fontSize: state.fontSize,
    isFontBold: state.isFontBold,
    backgroundColor: state.backgroundColor,
    accessibilityLevel: state.accessibilityLevel
  };
}

class Preview extends Component {
  static propTypes = {
    foregroundColor: PropTypes.object.isRequired,
    fontSize: PropTypes.object.isRequired,
    isFontBold: PropTypes.bool.isRequired,
    backgroundColor: PropTypes.object.isRequired,
    accessibilityLevel: PropTypes.string.isRequired,
  };

  contrast(color1, color2) {
    return Math.round(1000 * contrast(color1, color2)) / 1000;
  }

  render() {
    const { foregroundColor, fontSize, isFontBold,
            backgroundColor, accessibilityLevel } = this.props;
    const contrastRatio = accessibleContrast(accessibilityLevel, fontSize, isFontBold);
    const originalStyle = {
      color: foregroundColor.value,
      backgroundColor: backgroundColor.value
    };
    const newBackgroundStyle = {
      color: foregroundColor.value,
      backgroundColor: findClosestAccessibleColor(backgroundColor.value, foregroundColor.value, contrastRatio)
    };
    const newForegroundStyle = {
      color: findClosestAccessibleColor(foregroundColor.value, backgroundColor.value, contrastRatio),
      backgroundColor: backgroundColor.value
    };

    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.newBackground + ' ' + styles.preview}
               style={newBackgroundStyle}>
            <h2 className={styles.previewHeader}>new background</h2>
            <p>{newBackgroundStyle.backgroundColor} background</p>
            <p>contrast: {this.contrast(newBackgroundStyle.color, newBackgroundStyle.backgroundColor)}</p>
          </div>
          <div className={styles.preview}
               style={originalStyle}>
            <h2 className={styles.previewHeader}>original</h2>
            <p>{foregroundColor.value} text</p>
            <p>{backgroundColor.value} background</p>
            <p>contrast: {this.contrast(originalStyle.color, originalStyle.backgroundColor)}</p>
          </div>
          <div className={styles.newTextColor + ' ' + styles.preview}
               style={newForegroundStyle}>
            <h2 className={styles.previewHeader}>new text color</h2>
            <p>{newForegroundStyle.color} text</p>
            <p>contrast: {this.contrast(newForegroundStyle.color, newForegroundStyle.backgroundColor)}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Preview);
