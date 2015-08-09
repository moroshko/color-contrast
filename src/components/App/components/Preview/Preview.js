import styles from './Preview.less';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { accessibleContrast } from 'utils/accessibility/accessibility';
import { findClosestAccessibleColor, contrast } from 'utils/color/color';

function mapStateToProps(state) {
  return {
    textColor: state.textColor,
    fontSize: state.fontSize,
    isFontBold: state.isFontBold,
    backgroundColor: state.backgroundColor,
    accessibilityLevel: state.accessibilityLevel
  };
}

class Preview extends Component {
  static propTypes = {
    textColor: PropTypes.object.isRequired,
    fontSize: PropTypes.object.isRequired,
    isFontBold: PropTypes.bool.isRequired,
    backgroundColor: PropTypes.object.isRequired,
    accessibilityLevel: PropTypes.string.isRequired,
  };

  contrast(color1, color2) {
    return Math.round(1000 * contrast(color1, color2)) / 1000;
  }

  render() {
    const { textColor, fontSize, isFontBold,
            backgroundColor, accessibilityLevel } = this.props;
    const contrastRatio = accessibleContrast(accessibilityLevel, fontSize, isFontBold);
    const containerStyle = {
      fontSize: fontSize.value,
      fontWeight: isFontBold ? 'bold' : 'normal'
    };
    const originalStyle = {
      color: textColor.value,
      backgroundColor: backgroundColor.value
    };
    const newBackgroundStyle = {
      color: textColor.value,
      backgroundColor: findClosestAccessibleColor(backgroundColor.value, textColor.value, contrastRatio)
    };
    const newTextStyle = {
      color: findClosestAccessibleColor(textColor.value, backgroundColor.value, contrastRatio),
      backgroundColor: backgroundColor.value
    };

    return (
      <div className={styles.container} style={containerStyle}>
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
            <p>{textColor.value} text</p>
            <p>{backgroundColor.value} background</p>
            <p>contrast: {this.contrast(originalStyle.color, originalStyle.backgroundColor)}</p>
          </div>
          <div className={styles.newTextColor + ' ' + styles.preview}
               style={newTextStyle}>
            <h2 className={styles.previewHeader}>new text color</h2>
            <p>{newTextStyle.color} text</p>
            <p>contrast: {this.contrast(newTextStyle.color, newTextStyle.backgroundColor)}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Preview);
