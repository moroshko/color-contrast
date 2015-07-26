import styles from './Color.less';

import React, { Component, PropTypes } from 'react';

export default class Color extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
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
    const { id, isValid, value, updateValue, hue, updateHue, saturation,
            updateSaturation, lightness, updateLightness } = this.props;

    return (
      <span>
        <input id={id} className={styles.stringField + (isValid ? '' : ' ' + styles.error)}
               type="text" value={value}
               onChange={event => updateValue(event.currentTarget.value)} />
        <label className={styles.hslLabel} htmlFor={id + '-h'}>H:</label>
        <input id={id + '-h'} className={styles.hslField}
               type="number" value={hue}
               onChange={event => updateHue(event.currentTarget.value)} />
        <label className={styles.hslLabel} htmlFor={id + '-s'}>S:</label>
        <input id={id + '-s'} className={styles.hslField}
               type="number" value={saturation}
               onChange={event => updateSaturation(event.currentTarget.value)} />
        <label className={styles.hslLabel} htmlFor={id + '-l'}>L:</label>
        <input id={id + '-l'} className={styles.hslField}
               type="number" value={lightness}
               onChange={event => updateLightness(event.currentTarget.value)} />
      </span>
    );
  }
}
