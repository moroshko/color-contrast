import styles from './CurrentContrast.less';

import React, { Component, PropTypes } from 'react';
import colorUtils from 'utils/color';

export default class CurrentContrast extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    foregroundColor: PropTypes.string.isRequired,
    desiredContrastRatio: PropTypes.string.isRequired
  };

  render() {
    const { backgroundColor, foregroundColor } = this.props;
    const desiredContrastRatio = parseFloat(this.props.desiredContrastRatio);
    const contrast = colorUtils.contrast(backgroundColor, foregroundColor);
    const className = contrast >= desiredContrastRatio ? styles.accessible : styles.notAccessible;

    return (
      <div className={styles.container}>
        Current contrast: <span className={className}>{contrast}</span>
      </div>
    );
  }
}
