import styles from './App.less';

import React, { Component, PropTypes } from 'react';
import color from 'color';
import DesiredContrastRatio from 'DesiredContrastRatio/DesiredContrastRatio';
import ConstantColor from 'ConstantColor/ConstantColor';
import ColorToAdjust from 'ColorToAdjust/ColorToAdjust';

export default class App extends Component {
  static propTypes = {
    updateDesiredContrastRatio: PropTypes.func.isRequired,
    updateConstantColor: PropTypes.func.isRequired,
    updateColorToAdjust: PropTypes.func.isRequired
  };

  render() {
    const {
      state,
      updateDesiredContrastRatio,
      updateConstantColor,
      updateColorToAdjust
    } = this.props;

    return (
      <div>
        <DesiredContrastRatio className={styles.field}
                              labelClassName={styles.label}
                              value={state.desiredContrastRatio}
                              onChange={updateDesiredContrastRatio} />
        <ConstantColor className={styles.field}
                       labelClassName={styles.label}
                       value={state.constantColor}
                       onChange={updateConstantColor} />
        <ColorToAdjust className={styles.field}
                       labelClassName={styles.label}
                       value={state.colorToAdjust}
                       onChange={updateColorToAdjust} />
      </div>
    );
  }
}
