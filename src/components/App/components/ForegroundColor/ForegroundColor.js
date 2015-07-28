import styles from './ForegroundColor.less';

import React, { Component, PropTypes } from 'react';
import Color from 'Color/Color';

export default class ForegroundColor extends Component {
  static propTypes = {
    isValueValid: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    updateValue: PropTypes.func.isRequired,
    isHueValid: PropTypes.bool.isRequired,
    hue: PropTypes.string.isRequired,
    updateHue: PropTypes.func.isRequired,
    onHueFocus: PropTypes.func.isRequired,
    isSaturationValid: PropTypes.bool.isRequired,
    saturation: PropTypes.string.isRequired,
    updateSaturation: PropTypes.func.isRequired,
    onSaturationFocus: PropTypes.func.isRequired,
    isLightnessValid: PropTypes.bool.isRequired,
    lightness: PropTypes.string.isRequired,
    updateLightness: PropTypes.func.isRequired,
    onLightnessFocus: PropTypes.func.isRequired
  };

  render() {
    const { isValueValid, value, updateValue, isHueValid, hue, updateHue,
            onHueFocus, isSaturationValid, saturation, updateSaturation,
            onSaturationFocus, isLightnessValid, lightness, updateLightness,
            onLightnessFocus } = this.props;
    const id = 'foreground-color';

    return (
      <div>
        <label className={styles.label} htmlFor={id}>
          Foreground color:
        </label>
        <Color id={id} isValueValid={isValueValid}
               value={value} updateValue={updateValue}
               isHueValid={isHueValid} hue={hue} updateHue={updateHue}
               onHueFocus={onHueFocus} isSaturationValid={isSaturationValid}
               saturation={saturation} updateSaturation={updateSaturation}
               onSaturationFocus={onSaturationFocus}
               isLightnessValid={isLightnessValid} lightness={lightness}
               updateLightness={updateLightness}
               onLightnessFocus={onLightnessFocus} />
      </div>
    );
  }
}
