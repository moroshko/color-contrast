import styles from './Preview.less';

import React, { Component, PropTypes } from 'react';

export default class Preview extends Component {
  static propTypes = {
    constantColor: PropTypes.string.isRequired,
    colorToAdjust: PropTypes.string.isRequired,
    isBackgroundColorConstant: PropTypes.bool.isRequired
  };

  render() {
    const { constantColor, colorToAdjust, isBackgroundColorConstant } = this.props;
    const color = (isBackgroundColorConstant ? colorToAdjust : constantColor);
    const backgroundColor = (isBackgroundColorConstant ? constantColor : colorToAdjust);

    return (
      <div className={styles.container}
           style={{ color: '#' + color, backgroundColor: '#' + backgroundColor }}>
        <div className={styles.line} style={{ fontSize: '18px' }}>
          React is awesome (18px)
        </div>
        <div className={styles.line} style={{ fontSize: '14px', fontWeight: 'bold' }}>
          Redux makes me smile (14px bold)
        </div>
        <div className={styles.line} style={{ fontSize: '14px' }}>
          CSS Modules are cool (14px)
        </div>
      </div>
    );
  }
}
