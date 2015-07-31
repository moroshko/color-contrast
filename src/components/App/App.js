import styles from './App.less';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import accessibilityUtils from 'utils/accessibility/accessibility';
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
    const { updateAccessibilityLevel, updateBackgroundColor, switchColors,
            updateForegroundColor, updateFontSize, toggleIsFontBold,
            updateFocusedChannel } = actionCreators;

    return (
      <div className={styles.container}>
        <div>
          <div className={styles.field}>
            <AccessibilityLevel accessibilityLevel={state.accessibilityLevel}
                                {...bindActionCreators({ updateAccessibilityLevel }, dispatch)} />
          </div>
          <div className={styles.field}>
            <BackgroundColor {...state.backgroundColor}
                             updateValue={value => dispatch(updateBackgroundColor('value', value))}
                             updateHue={value => dispatch(updateBackgroundColor('hue', value))}
                             onHueFocus={() => dispatch(updateFocusedChannel(true, 'hue'))}
                             updateSaturation={value => dispatch(updateBackgroundColor('saturation', value))}
                             onSaturationFocus={() => dispatch(updateFocusedChannel(true, 'saturation'))}
                             updateLightness={value => dispatch(updateBackgroundColor('lightness', value))}
                             onLightnessFocus={() => dispatch(updateFocusedChannel(true, 'lightness'))} />
          </div>
          <div>
            <SwitchColors {...bindActionCreators({ switchColors }, dispatch)} />
          </div>
          <div className={styles.field}>
            <ForegroundColor {...state.foregroundColor}
                             updateValue={value => dispatch(updateForegroundColor('value', value))}
                             updateHue={value => dispatch(updateForegroundColor('hue', value))}
                             onHueFocus={() => dispatch(updateFocusedChannel(false, 'hue'))}
                             updateSaturation={value => dispatch(updateForegroundColor('saturation', value))}
                             onSaturationFocus={() => dispatch(updateFocusedChannel(false, 'saturation'))}
                             updateLightness={value => dispatch(updateForegroundColor('lightness', value))}
                             onLightnessFocus={() => dispatch(updateFocusedChannel(false, 'lightness'))} />
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
                {do {
                  if (state.focusedChannel !== null) {
                    <Graph {...state.focusedChannel}
                           backgroundColor={state.backgroundColor}
                           foregroundColor={state.foregroundColor}
                           accessibleContrast={accessibilityUtils.accessibleContrast(state.accessibilityLevel, state.fontSize.value, state.isFontBold)} />
                  }
                }}
                <Preview accessibilityLevel={state.accessibilityLevel}
                         backgroundColor={state.backgroundColor.value}
                         foregroundColor={state.foregroundColor.value}
                         fontSize={state.fontSize.value}
                         isFontBold={state.isFontBold} />
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
