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
    isSaturationValid: PropTypes.bool.isRequired,
    saturation: PropTypes.string.isRequired,
    updateSaturation: PropTypes.func.isRequired,
    isLightnessValid: PropTypes.bool.isRequired,
    lightness: PropTypes.string.isRequired,
    updateLightness: PropTypes.func.isRequired
  };

  render() {
    const { isValueValid, value, updateValue, isHueValid, hue, updateHue,
            isSaturationValid, saturation, updateSaturation, isLightnessValid,
            lightness, updateLightness } = this.props;
    const id = 'foreground-color';

    return (
      <div>
        <label className={styles.label} htmlFor={id}>
          Foreground color:
        </label>
        <Color id={id} isValueValid={isValueValid}
               value={value} updateValue={updateValue}
               isHueValid={isHueValid} hue={hue} updateHue={updateHue}
               isSaturationValid={isSaturationValid} saturation={saturation}
               updateSaturation={updateSaturation}
               isLightnessValid={isLightnessValid} lightness={lightness}
               updateLightness={updateLightness} />
      </div>
    );
  }
}
