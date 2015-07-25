import styles from './CurrentContrast.less';

import React, { Component, PropTypes } from 'react';
import colorUtils from 'utils/color';

export default class CurrentContrast extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    foregroundColor: PropTypes.string.isRequired
  };

  render() {
    const { backgroundColor, foregroundColor } = this.props;
    const contrast = colorUtils.contrast(backgroundColor, foregroundColor);

    return (
      <div className={styles.container}>
        Current contrast: {contrast}
      </div>
    );
  }
}
