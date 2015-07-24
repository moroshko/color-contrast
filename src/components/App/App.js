import styles from './App.less';

import React, { Component, PropTypes } from 'react';
import * as actions from 'flux/actions';
import DesiredContrastRatio from 'DesiredContrastRatio/DesiredContrastRatio';
import BackgroundColor from 'BackgroundColor/BackgroundColor';
import ForegroundColor from 'ForegroundColor/ForegroundColor';
import Preview from 'Preview/Preview';

export default class App extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  isPreviewVisible() {
    const { state } = this.props;

    return state.desiredContrastRatio.isValid &&
           state.backgroundColor.isValid &&
           state.foregroundColor.isValid;
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
            <BackgroundColor
              {...state.backgroundColor}
              onChange={value => dispatch(actions.updateBackgroundColor(value))} />
          </div>
          <div className={styles.field}>
            <ForegroundColor
              {...state.foregroundColor}
              onChange={value => dispatch(actions.updateForegroundColor(value))} />
          </div>
        </div>
        <div className={styles.preview}>
          {
            this.isPreviewVisible() &&
            <Preview
              backgroundColor={state.backgroundColor.value}
              foregroundColor={state.foregroundColor.value} />
          }
        </div>
      </div>
    );
  }
}
