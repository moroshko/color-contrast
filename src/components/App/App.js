import styles from './App.less';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'flux/actionCreators';
import AccessibilityLevel from 'AccessibilityLevel/AccessibilityLevel';
import BackgroundColor from 'BackgroundColor/BackgroundColor';
import SwitchColors from 'SwitchColors/SwitchColors';
import ForegroundColor from 'ForegroundColor/ForegroundColor';
import Font from 'Font/Font';
import CurrentContrast from 'CurrentContrast/CurrentContrast';
import Preview from 'Preview/Preview';

export default class App extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  isPreviewVisible() {
    const { state } = this.props;

    return state.backgroundColor.isValid &&
           state.foregroundColor.isValid &&
           state.fontSize.isValid;
  }

  render() {
    const { state, dispatch } = this.props;
    const { updateAccessibilityLevel, updateBackgroundColor,
            switchColors, updateForegroundColor, updateFontSize,
            toggleIsFontBold } = actionCreators;

    return (
      <div className={styles.container}>
        <div>
          <div className={styles.field}>
            <AccessibilityLevel accessibilityLevel={state.accessibilityLevel}
                                {...bindActionCreators({ updateAccessibilityLevel }, dispatch)} />
          </div>
          <div className={styles.field}>
            <BackgroundColor {...state.backgroundColor}
                             {...bindActionCreators({ updateBackgroundColor }, dispatch)} />
          </div>
          <div>
            <SwitchColors {...bindActionCreators({ switchColors }, dispatch)} />
          </div>
          <div className={styles.field}>
            <ForegroundColor {...state.foregroundColor}
                             {...bindActionCreators({ updateForegroundColor }, dispatch)} />
          </div>
          <div className={styles.field}>
            <Font {...state.fontSize} isBold={state.isFontBold}
                  {...bindActionCreators({ updateFontSize, toggleIsFontBold }, dispatch)} />
          </div>
        </div>
        <div className={styles.preview}>
          {do {
            if (this.isPreviewVisible()) {
              <div>
                <CurrentContrast backgroundColor={state.backgroundColor.value}
                                 foregroundColor={state.foregroundColor.value} />
                <Preview accessibilityLevel={state.accessibilityLevel}
                         backgroundColor={state.backgroundColor.value}
                         foregroundColor={state.foregroundColor.value} />
              </div>
            } else {
              'Please fix errors'
            }
          }}
        </div>
      </div>
    );
  }
}
