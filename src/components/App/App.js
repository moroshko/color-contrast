import styles from './App.less';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { randomColor, findClosestAccessibleColor } from 'utils/color/color';
import accessibilityUtils from 'utils/accessibility/accessibility';
import * as actionCreators from 'flux/actionCreators/app';
import AccessibilityLevel from 'AccessibilityLevel/AccessibilityLevel';
import BackgroundColor from 'BackgroundColor/BackgroundColor';
import ForegroundColor from 'ForegroundColor/ForegroundColor';
import Font from 'Font/Font';
import Preview from 'Preview/Preview';
import Graph from 'Graph/Graph';

export default class App extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  render() {
    const { state, dispatch } = this.props;
    const { updateAccessibilityLevel, updateBackgroundColor,
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
          {/*
          <Graph {...state.focusedChannel}
                 backgroundColor={state.backgroundColor}
                 foregroundColor={state.foregroundColor}
                 accessibleContrast={accessibilityUtils.accessibleContrast(state.accessibilityLevel, state.fontSize.value, state.isFontBold)} />
          */}
          <Preview accessibilityLevel={state.accessibilityLevel}
                   backgroundColor={state.backgroundColor}
                   foregroundColor={state.foregroundColor}
                   fontSize={state.fontSize.value}
                   isFontBold={state.isFontBold}
                   updateBackgroundColorValue={value => dispatch(updateBackgroundColor('value', value))}
                   updateBackgroundColorEditMode={value => dispatch(updateBackgroundColor('editMode', value))}
                   updateForegroundColorValue={value => dispatch(updateForegroundColor('value', value))}
                   updateForegroundColorEditMode={value => dispatch(updateForegroundColor('editMode', value))} />
        </div>
      </div>
    );
  }
}
