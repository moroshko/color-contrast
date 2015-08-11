import styles from './Preview.less';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateTextColorCopied, updateBackgroundColorCopied } from 'flux/actionCreators/app';
import ReactZeroClipboard from 'react-zeroclipboard';
import { accessibleContrast } from 'utils/accessibility/accessibility';
import { findClosestAccessibleColor, contrast } from 'utils/color/color';

function mapStateToProps(state) {
  return {
    textColor: state.textColor,
    fontSize: state.fontSize,
    isFontBold: state.isFontBold,
    backgroundColor: state.backgroundColor,
    accessibilityLevel: state.accessibilityLevel,
    textColorCopied: state.textColorCopied,
    backgroundColorCopied: state.backgroundColorCopied
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateTextColorCopied: value => dispatch(updateTextColorCopied(value)),
    updateBackgroundColorCopied: value => dispatch(updateBackgroundColorCopied(value))
  };
}

class Preview extends Component {
  static propTypes = {
    textColor: PropTypes.object.isRequired,
    fontSize: PropTypes.object.isRequired,
    isFontBold: PropTypes.bool.isRequired,
    backgroundColor: PropTypes.object.isRequired,
    accessibilityLevel: PropTypes.string.isRequired,
    textColorCopied: PropTypes.bool.isRequired,
    backgroundColorCopied: PropTypes.bool.isRequired,
    updateTextColorCopied: PropTypes.func.isRequired,
    updateBackgroundColorCopied: PropTypes.func.isRequired
  };

  contrast(color1, color2) {
    return Math.round(1000 * contrast(color1, color2)) / 1000;
  }

  onBackgroundColorCopy() {
    const { updateBackgroundColorCopied } = this.props;

    updateBackgroundColorCopied(true);

    setTimeout(() => updateBackgroundColorCopied(false), 5000);
  }

  onTextColorCopy() {
    const { updateTextColorCopied } = this.props;

    updateTextColorCopied(true);

    setTimeout(() => updateTextColorCopied(false), 5000);
  }

  render() {
    const { textColor, fontSize, isFontBold,
            backgroundColor, accessibilityLevel,
            textColorCopied, backgroundColorCopied,
            updateTextColorCopied } = this.props;
    const contrastRatio =
      accessibleContrast(accessibilityLevel, parseInt(fontSize.value, 10), isFontBold);
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
          <div className={styles.previewContainer}>
            <h2 className={styles.previewTitle}>
              New background
            </h2>
            <ReactZeroClipboard text={newBackgroundStyle.backgroundColor}
                                onAfterCopy={::this.onBackgroundColorCopy}>
              <div className={styles.previewContent + ' ' + styles.previewContentCopyable}
                   style={newBackgroundStyle}>
                <p className={styles.previewNewColor}>
                  {newBackgroundStyle.backgroundColor}
                </p>
                <p className={styles.previewContrast}>
                  contrast: {this.contrast(newBackgroundStyle.color, newBackgroundStyle.backgroundColor)}
                </p>
              </div>
            </ReactZeroClipboard>
            {
              backgroundColorCopied &&
                <p className={styles.copiedToClipboard}>
                  Copied to clipboard
                </p>
            }
          </div>
          <div className={styles.previewContainer}>
            <h2 className={styles.previewTitle}>
              Original
            </h2>
            <div className={styles.previewContent} style={originalStyle}>
              <p className={styles.previewNewColor}>
                &nbsp;
              </p>
              <p className={styles.previewContrast}>
                contrast: {this.contrast(originalStyle.color, originalStyle.backgroundColor)}
              </p>
            </div>
          </div>
          <div className={styles.previewContainer}>
            <h2 className={styles.previewTitle}>
              New text color
            </h2>
            <ReactZeroClipboard text={newTextStyle.color}
                                onAfterCopy={::this.onTextColorCopy}>
              <div className={styles.previewContent + ' ' + styles.previewContentCopyable}
                   style={newTextStyle}>
                <p className={styles.previewNewColor}>
                  {newTextStyle.color}
                </p>
                <p className={styles.previewContrast}>
                  contrast: {this.contrast(newTextStyle.color, newTextStyle.backgroundColor)}
                </p>
              </div>
            </ReactZeroClipboard>
            {
              textColorCopied &&
                <p className={styles.copiedToClipboard}>
                  Copied to clipboard
                </p>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
