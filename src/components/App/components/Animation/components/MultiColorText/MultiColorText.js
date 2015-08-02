import styles from './MultiColorText.less';

import React, { Component, PropTypes } from 'react';

export default class MultiColorText extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
    lineHeight: PropTypes.number.isRequired,
    topColor: PropTypes.string.isRequired,
    bottomColor: PropTypes.string.isRequired,
    topHeight: PropTypes.number.isRequired
  };

  render() {
    const { text, fontSize, lineHeight,
            topColor, bottomColor, topHeight } = this.props;
    const containerStyle = {
      lineHeight: lineHeight + 'px',
      height: lineHeight,
      fontSize: fontSize
    };
    const topStyle = {
      height: topHeight
    };
    const topTextStyle = {
      color: topColor
    };
    const bottomStyle = {
      height: lineHeight - topHeight
    };
    const bottomTextStyle = {
      color: bottomColor,
      transform: `translateY(-${topHeight}px)`
    };

    return (
      <div className={styles.container} style={containerStyle}>
        <div className={styles.top} style={topStyle}>
          <div style={topTextStyle}>
            {text}
          </div>
        </div>
        <div className={styles.bottom} style={bottomStyle}>
          <div style={bottomTextStyle}>
            {text}
          </div>
        </div>
      </div>
    );
  }
}
