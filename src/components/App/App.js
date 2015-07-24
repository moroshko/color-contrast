import styles from './App.less';

import React, { Component, PropTypes } from 'react';
import * as actions from 'flux/actions';
import DesiredContrastRatio from 'DesiredContrastRatio/DesiredContrastRatio';
import ConstantColor from 'ConstantColor/ConstantColor';
import ColorToAdjust from 'ColorToAdjust/ColorToAdjust';
import Preview from 'Preview/Preview';

export default class App extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  isPreviewVisible() {
    const { state } = this.props;

    return state.desiredContrastRatio.isValid &&
           state.constantColor.isValid &&
           state.colorToAdjust.isValid;
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <div className={styles.container}>
        <div>
          <div className={styles.field}>
            <DesiredContrastRatio
              {...state.desiredContrastRatio}
              onChange={value => dispatch(actions.updateDesiredContrastRatio(value))} />
          </div>
          <div className={styles.field}>
            <ConstantColor
              {...state.constantColor}
              onChange={value => dispatch(actions.updateConstantColor(value))} />
          </div>
          <div className={styles.field}>
            <ColorToAdjust
              {...state.colorToAdjust}
              onChange={value => dispatch(actions.updateColorToAdjust(value))} />
          </div>
        </div>
        <div className={styles.preview}>
          {
            this.isPreviewVisible() &&
            <Preview
              constantColor={state.constantColor.value}
              colorToAdjust={state.colorToAdjust.value}
              isBackgroundColorConstant={state.isBackgroundColorConstant} />
          }
        </div>
      </div>
    );
  }
}
