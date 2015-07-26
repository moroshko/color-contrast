import styles from './ForegroundColor.less';

import React, { Component, PropTypes } from 'react';
import Color from 'Color/Color';

export default class ForegroundColor extends Component {
  static propTypes = {
    isValid: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    updateValue: PropTypes.func.isRequired,
    hue: PropTypes.number.isRequired,
    updateHue: PropTypes.func.isRequired,
    saturation: PropTypes.number.isRequired,
    updateSaturation: PropTypes.func.isRequired,
    lightness: PropTypes.number.isRequired,
    updateLightness: PropTypes.func.isRequired
  };

  render() {
    const { isValid, value, updateValue, hue, updateHue, saturation,
            updateSaturation, lightness, updateLightness } = this.props;
    const id = 'foreground-color';

    return (
      <div>
        <label className={styles.label} htmlFor={id}>
          Foreground color:
        </label>
        <Color id={id} isValid={isValid}
               value={value} updateValue={updateValue}
               hue={hue} updateHue={updateHue}
               saturation={saturation} updateSaturation={updateSaturation}
               lightness={lightness} updateLightness={updateLightness} />
      </div>
    );
  }
}
