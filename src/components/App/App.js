import styles from './App.less';

import React, { Component, PropTypes } from 'react';
import * as actionCreators from 'flux/actionCreators/app';
import Header from 'Header/Header';
import UserInput from 'UserInput/UserInput';
import Preview from 'Preview/Preview';

export default class App extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  render() {
    const { state, dispatch } = this.props;
    const { foregroundColor, backgroundColor, fontSize,
            isFontBold, accessibilityLevel } = state;
    const { updateForegroundColor, updateBackgroundColor, updateFontSize,
            toggleIsFontBold, updateAccessibilityLevel } = actionCreators;

    return (
      <div className={styles.container}>
        <Header />
        <UserInput foregroundColor={foregroundColor}
                   updateForegroundColor={value => dispatch(updateForegroundColor('value', value))}
                   fontSize={fontSize}
                   updateFontSize={value => dispatch(updateFontSize(value))}
                   isFontBold={isFontBold}
                   toggleIsFontBold={() => dispatch(toggleIsFontBold())}
                   backgroundColor={backgroundColor}
                   updateBackgroundColor={value => dispatch(updateBackgroundColor('value', value))}
                   accessibilityLevel={accessibilityLevel}
                   updateAccessibilityLevel={value => dispatch(updateAccessibilityLevel(value))} />
        <Preview foregroundColor={foregroundColor}
                 fontSize={fontSize}
                 isFontBold={isFontBold}
                 backgroundColor={backgroundColor}
                 accessibilityLevel={accessibilityLevel} />
      </div>
    );
  }
}
