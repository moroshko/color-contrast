import styles from './Preview.less';

import React, { Component, PropTypes } from 'react';
import colorUtils from 'utils/color/color';
import accessibilityUtils from 'utils/accessibility/accessibility';
import Editable from 'Editable/Editable';

export default class Preview extends Component {
  static propTypes = {
    accessibilityLevel: PropTypes.string.isRequired,
    backgroundColor: PropTypes.object.isRequired,
    foregroundColor: PropTypes.object.isRequired,
    fontSize: PropTypes.string.isRequired,
    isFontBold: PropTypes.bool.isRequired,
    updateBackgroundColorValue: PropTypes.func.isRequired,
    updateBackgroundColorEditMode: PropTypes.func.isRequired,
    updateForegroundColorValue: PropTypes.func.isRequired,
    updateForegroundColorEditMode: PropTypes.func.isRequired
  };

  render() {
    const { accessibilityLevel, backgroundColor, foregroundColor,
            fontSize, isFontBold,
            updateBackgroundColorValue, updateBackgroundColorEditMode,
            updateForegroundColorValue, updateForegroundColorEditMode } = this.props;
    //const contrast = colorUtils.contrast(backgroundColor.value, foregroundColor.value);
    const accessibleContrast =
      accessibilityUtils.accessibleContrast(accessibilityLevel, fontSize, isFontBold);
    //const isAccessible = (contrast >= accessibleContrast);
    const style = {
      color: foregroundColor.value,
      backgroundColor: backgroundColor.value,
      fontSize: fontSize + 'px',
      fontWeight: isFontBold ? 'bold' : 'normal'
    };

    return (
      <div className={styles.container}>
        {/*
        <div className={styles.currentContrast}>
          Current contrast: {contrast}
        </div>
        */}
        <div className={styles.accessibleContrast}>
          Accessible contrast: {accessibleContrast}
        </div>
        {/*
        <div className={styles.isAccessible}>
          {do {
            if (isAccessible) {
              <span className={styles.accessible}>Accessible</span>
            } else {
              <span className={styles.notAccessible}>Not accessible</span>
            }
          }}
        </div>
        */}
        <div className={styles.text} style={style}>
          <div>
            Background Color <Editable editMode={backgroundColor.editMode}
                                       value={backgroundColor.value}
                                       onChange={updateBackgroundColorValue}
                                       onEditStart={() => updateBackgroundColorEditMode(true)}
                                       onEditEnd={() => updateBackgroundColorEditMode(false)} />
          </div>
          <div>
            Color <Editable editMode={foregroundColor.editMode}
                            value={foregroundColor.value}
                            onChange={updateForegroundColorValue}
                            onEditStart={() => updateForegroundColorEditMode(true)}
                            onEditEnd={() => updateForegroundColorEditMode(false)} />
          </div>

        </div>
      </div>
    );
  }
}
