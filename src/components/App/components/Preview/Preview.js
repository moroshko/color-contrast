import styles from './Preview.less';

import React, { Component, PropTypes } from 'react';

export default class Preview extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    foregroundColor: PropTypes.string.isRequired
  };

  render() {
    const { backgroundColor, foregroundColor } = this.props;

    return (
      <div className={styles.container}
           style={{ color: '#' + foregroundColor, backgroundColor: '#' + backgroundColor }}>
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
