import styles from './UserInput.less';

import React, { Component, PropTypes } from 'react';
import Editable from 'Editable/Editable';
import Toggle from 'Toggle/Toggle';

export default class UserInput extends Component {
  static propTypes = {
    foregroundColor: PropTypes.object.isRequired,
    updateForegroundColor: PropTypes.func.isRequired,
    backgroundColor: PropTypes.object.isRequired,
    updateBackgroundColor: PropTypes.func.isRequired,
    fontSize: PropTypes.object.isRequired,
    updateFontSize: PropTypes.func.isRequired,
    isFontBold: PropTypes.bool.isRequired,
    toggleIsFontBold: PropTypes.func.isRequired,
    accessibilityLevel: PropTypes.string.isRequired,
    updateAccessibilityLevel: PropTypes.func.isRequired
  };

  render() {
    const { foregroundColor, updateForegroundColor,
            backgroundColor, updateBackgroundColor,
            fontSize, updateFontSize,
            isFontBold, toggleIsFontBold,
            accessibilityLevel, updateAccessibilityLevel } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div>
            My text color is
            <span className={styles.colorContainer}>
              <Editable value={foregroundColor.value}
                        onEditEnd={updateForegroundColor} />
            </span>
            at
            <span className={styles.fontSizeContainer}>
              <Editable value={fontSize.value}
                        onEditEnd={updateFontSize} />
            </span>
            px and
            <span className={styles.fontWeightContainer}>
              <Toggle values={['regular', 'bold']}
                      currentValue={isFontBold ? 'bold' : 'regular'}
                      onChange={toggleIsFontBold} />
            </span>
            weight
          </div>
          <div>
            My background color is
            <span className={styles.colorContainer}>
              <Editable value={backgroundColor.value}
                        onEditEnd={updateBackgroundColor} />
            </span>
          </div>
          <div>
            My design needs to be
            <span className={styles.accessibilityLevelContainer}>
              <Toggle values={['AA', 'AAA']}
                      currentValue={accessibilityLevel}
                      onChange={updateAccessibilityLevel} />
            </span>
            compliant
          </div>
        </div>
      </div>
    );
  }
}