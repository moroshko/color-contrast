import styles from './Header.less';

import React, { Component, PropTypes } from 'react';
import { contrast } from 'utils/color/color';

export default class Header extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  };

  render() {
    const { backgroundColor, color } = this.props;
    const contrastRatio = Math.round(contrast(backgroundColor, color) * 1000) / 1000;

    return (
      <div className={styles.container} style={{ backgroundColor, color }}>
        <div>Automatically adjust colors to make them accessible</div>
        <div className={styles.contrast}>Contrast: {contrastRatio}</div>
      </div>
    );
  }
}
