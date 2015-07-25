import styles from './Preview.less';

import React, { Component, PropTypes } from 'react';
import colorUtils from 'utils/color';
import accessibility from 'utils/accessibility';
import AccessibilityIndicator from 'AccessibilityIndicator/AccessibilityIndicator';

export default class Preview extends Component {
  static propTypes = {
    accessibilityLevel: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    foregroundColor: PropTypes.string.isRequired
  };

  render() {
    const { accessibilityLevel, backgroundColor, foregroundColor } = this.props;
    const contrast = colorUtils.contrast(backgroundColor, foregroundColor);
    const { small, large } = accessibility[accessibilityLevel];

    return (
      <div className={styles.container}
           style={{ color: foregroundColor, backgroundColor: backgroundColor }}>
        <div className={styles.line} style={{ fontSize: '18px' }}>
          <div>React is awesome (18px)</div>
          <AccessibilityIndicator isAccessible={contrast > large} />
        </div>
        <div className={styles.line} style={{ fontSize: '14px', fontWeight: 'bold' }}>
          <div>Redux makes me smile (14px bold)</div>
          <AccessibilityIndicator isAccessible={contrast > large} />
        </div>
        <div className={styles.line} style={{ fontSize: '14px' }}>
          <div>CSS Modules are cool (14px)</div>
          <AccessibilityIndicator isAccessible={contrast > small} />
        </div>
      </div>
    );
  }
}
