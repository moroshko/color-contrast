import styles from './Color.less';

import React, { Component, PropTypes } from 'react';

export default class Color extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
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
    const { id, isValueValid, value, updateValue, isHueValid, hue, updateHue,
            onHueFocus, isSaturationValid, saturation, updateSaturation,
            onSaturationFocus, isLightnessValid, lightness, updateLightness,
            onLightnessFocus } = this.props;

    return (
      <span>
        <input id={id} type="text" value={value}
               className={styles.stringField + (isValueValid ? '' : ' ' + styles.error)}
               onChange={event => updateValue(event.currentTarget.value)} />
        <label className={styles.hslLabel} htmlFor={id + '-h'}>H:</label>
        <input id={id + '-h'} type="number" min="0" max="360" value={hue}
               className={styles.hslField + (isHueValid ? '' : ' ' + styles.error)}
               onChange={event => updateHue(event.currentTarget.value)}
               onFocus={onHueFocus} />
        <label className={styles.hslLabel} htmlFor={id + '-s'}>S:</label>
        <input id={id + '-s'} type="number" min="0" max="100" value={saturation}
               className={styles.hslField + (isSaturationValid ? '' : ' ' + styles.error)}
               onChange={event => updateSaturation(event.currentTarget.value)}
               onFocus={onSaturationFocus} />
        <label className={styles.hslLabel} htmlFor={id + '-l'}>L:</label>
        <input id={id + '-l'} type="number" min="0" max="100" value={lightness}
               className={styles.hslField + (isLightnessValid ? '' : ' ' + styles.error)}
               onChange={event => updateLightness(event.currentTarget.value)}
               onFocus={onLightnessFocus} />
      </span>
    );
  }
}
