import styles from './App.less';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import accessibilityUtils from 'utils/accessibility';
import * as actionCreators from 'flux/actionCreators/app';
import AccessibilityLevel from 'AccessibilityLevel/AccessibilityLevel';
import BackgroundColor from 'BackgroundColor/BackgroundColor';
import SwitchColors from 'SwitchColors/SwitchColors';
import ForegroundColor from 'ForegroundColor/ForegroundColor';
import Font from 'Font/Font';
import Preview from 'Preview/Preview';
import Graph from 'Graph/Graph';

export default class App extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  isPreviewVisible() {
    const { state } = this.props;

    return state.backgroundColor.isValueValid &&
           state.backgroundColor.isHueValid &&
           state.backgroundColor.isSaturationValid &&
           state.backgroundColor.isLightnessValid &&
           state.foregroundColor.isValueValid &&
           state.foregroundColor.isHueValid &&
           state.foregroundColor.isSaturationValid &&
           state.foregroundColor.isLightnessValid &&
           state.fontSize.isValid;
  }

  render() {
    const { state, dispatch } = this.props;
    const { updateAccessibilityLevel, updateBackgroundColorValue,
            updateBackgroundColorHue, updateBackgroundColorSaturation,
            updateBackgroundColorLightness, switchColors,
            updateForegroundColorValue, updateForegroundColorHue,
            updateForegroundColorSaturation, updateForegroundColorLightness,
            updateFontSize, toggleIsFontBold } = actionCreators;

    return (
      <div className={styles.container}>
        <div>
          <div className={styles.field}>
            <AccessibilityLevel accessibilityLevel={state.accessibilityLevel}
                                {...bindActionCreators({ updateAccessibilityLevel }, dispatch)} />
          </div>
          <div className={styles.field}>
            <BackgroundColor {...state.backgroundColor}
                             updateValue={value => dispatch(updateBackgroundColorValue(value))}
                             updateHue={value => dispatch(updateBackgroundColorHue(value))}
                             updateSaturation={value => dispatch(updateBackgroundColorSaturation(value))}
                             updateLightness={value => dispatch(updateBackgroundColorLightness(value))} />
          </div>
          <div>
            <SwitchColors {...bindActionCreators({ switchColors }, dispatch)} />
          </div>
          <div className={styles.field}>
            <ForegroundColor {...state.foregroundColor}
                             updateValue={value => dispatch(updateForegroundColorValue(value))}
                             updateHue={value => dispatch(updateForegroundColorHue(value))}
                             updateSaturation={value => dispatch(updateForegroundColorSaturation(value))}
                             updateLightness={value => dispatch(updateForegroundColorLightness(value))} />
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
                <Preview accessibilityLevel={state.accessibilityLevel}
                         backgroundColor={state.backgroundColor.value}
                         foregroundColor={state.foregroundColor.value}
                         fontSize={state.fontSize.value}
                         isFontBold={state.isFontBold} />
                <Graph isBackgroundColor={true}
                       colorChannel={'lightness'}
                       backgroundColor={state.backgroundColor}
                       foregroundColor={state.foregroundColor}
                       accessibleContrast={accessibilityUtils.accessibleContrast(state.accessibilityLevel, state.fontSize.value, state.isFontBold)} />
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
