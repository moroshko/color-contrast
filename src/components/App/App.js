import styles from './App.less';

import React, { Component, PropTypes } from 'react';
import color from 'color';
import * as actions from 'flux/actions';
import DesiredContrastRatio from 'DesiredContrastRatio/DesiredContrastRatio';
import ConstantColor from 'ConstantColor/ConstantColor';
import ColorToAdjust from 'ColorToAdjust/ColorToAdjust';

export default class App extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  render() {
    const { state, dispatch } = this.props;

    return (
      <div>
        <DesiredContrastRatio
          className={styles.field}
          labelClassName={styles.label}
          value={state.desiredContrastRatio}
          onChange={value => dispatch(actions.updateDesiredContrastRatio(value))} />

        <ConstantColor
          className={styles.field}
          labelClassName={styles.label}
          value={state.constantColor}
          onChange={value => dispatch(actions.updateConstantColor(value))} />

        <ColorToAdjust
          className={styles.field}
          labelClassName={styles.label}
          value={state.colorToAdjust}
          onChange={value => dispatch(actions.updateColorToAdjust(value))} />
      </div>
    );
  }
}
