import styles from './UserInput.less';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateForegroundColor, updateFontSize, toggleIsFontBold,
         updateBackgroundColor, updateAccessibilityLevel } from 'flux/actionCreators/app';
import Editable from 'Editable/Editable';
import Toggle from 'Toggle/Toggle';

function mapStateToProps(state) {
  return {
    foregroundColor: state.foregroundColor,
    fontSize: state.fontSize,
    isFontBold: state.isFontBold,
    backgroundColor: state.backgroundColor,
    accessibilityLevel: state.accessibilityLevel
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateForegroundColor: value => dispatch(updateForegroundColor('value', value)),
    updateFontSize: value => dispatch(updateFontSize(value)),
    toggleIsFontBold: () => dispatch(toggleIsFontBold()),
    updateBackgroundColor: value => dispatch(updateBackgroundColor('value', value)),
    updateAccessibilityLevel: value => dispatch(updateAccessibilityLevel(value))
  };
}

class UserInput extends Component {
  static propTypes = {
    foregroundColor: PropTypes.object.isRequired,
    updateForegroundColor: PropTypes.func.isRequired,
    fontSize: PropTypes.object.isRequired,
    updateFontSize: PropTypes.func.isRequired,
    isFontBold: PropTypes.bool.isRequired,
    toggleIsFontBold: PropTypes.func.isRequired,
    backgroundColor: PropTypes.object.isRequired,
    updateBackgroundColor: PropTypes.func.isRequired,
    accessibilityLevel: PropTypes.string.isRequired,
    updateAccessibilityLevel: PropTypes.func.isRequired
  };

  render() {
    const { foregroundColor, updateForegroundColor,
            fontSize, updateFontSize,
            isFontBold, toggleIsFontBold,
            backgroundColor, updateBackgroundColor,
            accessibilityLevel, updateAccessibilityLevel } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div>
            My text color is
            <span className={styles.colorContainer}>
              <Editable isValid={foregroundColor.isValueValid}
                        value={foregroundColor.value}
                        onChange={updateForegroundColor}
                        textAlign="center" />
            </span>
            at
            <span className={styles.fontSizeContainer}>
              <Editable isValid={fontSize.isValid}
                        value={fontSize.value}
                        onChange={updateFontSize}
                        textAlign="right" />
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
              <Editable isValid={backgroundColor.isValueValid}
                        value={backgroundColor.value}
                        onChange={updateBackgroundColor}
                        textAlign="center" />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserInput);
