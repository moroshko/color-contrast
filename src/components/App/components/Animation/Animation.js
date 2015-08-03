import styles from './Animation.less';

import React, { Component, PropTypes } from 'react';
import { randomColor, findClosestAccessibleColor } from 'utils/color/color';
import MultiColorText from 'MultiColorText/MultiColorText';

export default class Animation extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    pagesCount: PropTypes.number.isRequired,
    pageWidth: PropTypes.number.isRequired,
    pageHeight: PropTypes.number.isRequired,
    textFontSize: PropTypes.number.isRequired,
    textLineHeight: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);

    const { pagesCount, pageHeight, textLineHeight } = props;

    this.accessibleContrast = 4.5;

    let pages = [];

    for (let i = 0; i <= pagesCount; i++) {
      pages.push({
        backgroundColor: randomColor()
      });
    }

    this.topTextPageIndex = Math.floor((pagesCount - 1) / 2);

    const color = '#ff0000';
    const topColor = findClosestAccessibleColor(color, pages[this.topTextPageIndex].backgroundColor, this.accessibleContrast);
    const bottomColor = findClosestAccessibleColor(color, pages[this.topTextPageIndex + 1].backgroundColor, this.accessibleContrast);

    this.state = {
      pages,
      topColor,
      bottomColor,
      offset: 0,
      topTextHeight: Math.floor(pagesCount % 2 === 0 ? textLineHeight / 2 : (pageHeight + textLineHeight) / 2)
    };

    this.intervalId = setInterval(::this.move, 50);
  }

  getNextState() {
    let { pages, topColor, bottomColor, offset, topTextHeight } = this.state;
    const { pagesCount, pageHeight, textLineHeight } = this.props;

    if (offset === pageHeight) {
      pages.shift();
      pages.push({
        backgroundColor: randomColor()
      });
      offset = 0;
    } else {
      offset += 1;
    }

    if (topTextHeight === 0) {
      topTextHeight = pageHeight;
      topColor = bottomColor;
      bottomColor = findClosestAccessibleColor(topColor, pages[this.topTextPageIndex + 2].backgroundColor, this.accessibleContrast);
    } else {
      topTextHeight -= 1;
    }

    return {
      pages,
      topColor,
      bottomColor,
      offset,
      topTextHeight
    };
  }

  move() {
    this.setState(this.getNextState());
  }

  render() {
    const { text, pagesCount, pageWidth, pageHeight, textFontSize, textLineHeight } = this.props;
    const { pages, offset, topTextHeight, topColor, bottomColor } = this.state;
    const containerStyle = {
      width: pageWidth,
      height: pagesCount * pageHeight,
      borderRadius: pageWidth / 4
    };
    const backgroundContainerStyle = {
      transform: `translateY(-${offset}px)`
    };
    const textContainerStyle = {
      width: pageWidth,
      left: 0,
      top: (containerStyle.height - textLineHeight) / 2
    };

    return (
      <div className={styles.container} style={containerStyle}>
        <div style={backgroundContainerStyle}>
          {
            pages.map((page, index) => (
              <div style={{ width: pageWidth,
                            height: pageHeight,
                            backgroundColor: page.backgroundColor }}
                   key={index} />
            ))
          }
        </div>
        <div className={styles.textContainer} style={textContainerStyle}>
          <MultiColorText text={text}
                          fontSize={textFontSize}
                          lineHeight={textLineHeight}
                          topColor={topColor}
                          bottomColor={bottomColor}
                          topHeight={topTextHeight} />
        </div>
      </div>
    );
  }
}
