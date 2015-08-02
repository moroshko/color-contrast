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
    textWidth: PropTypes.number.isRequired,
    textFontSize: PropTypes.number.isRequired,
    textLineHeight: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);

    this.spaceBelowText = 14; // Magic number

    const { pagesCount, pageHeight, textLineHeight } = props;

    this.accessibleContrast = 4.5;
    this.enterOffset = (pageHeight - textLineHeight) / 2 + this.spaceBelowText;

    let pages = [];

    for (let i = 0; i <= pagesCount; i++) {
      pages.push({
        backgroundColor: randomColor()
      });
    }

    this.topTextPageIndex = Math.floor(pagesCount / 2);

    const color = '#ff0000';
    const topColor = findClosestAccessibleColor(color, pages[this.topTextPageIndex].backgroundColor, this.accessibleContrast);
    const bottomColor = findClosestAccessibleColor(color, pages[this.topTextPageIndex + 1].backgroundColor, this.accessibleContrast);

    this.state = {
      pages,
      topColor,
      bottomColor,
      offset: 0,
      topTextHeight: textLineHeight
    };

    this.intervalId = setInterval(::this.move, 10);
  }

  getNextState() {
    let { pages, topColor, bottomColor, offset } = this.state;
    const { pageHeight, textLineHeight } = this.props;

    if (offset === pageHeight) {
      pages.shift();
      pages.push({
        backgroundColor: randomColor()
      });
      offset = 0;
      topColor = bottomColor;
      bottomColor = findClosestAccessibleColor(topColor, pages[this.topTextPageIndex + 1].backgroundColor, this.accessibleContrast);
    } else {
      offset += 1;
    }

    const topTextHeight = Math.min(
      textLineHeight,
      Math.max(
        0,
        this.enterOffset + textLineHeight - offset - this.spaceBelowText
      )
    );

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
    const { text, pagesCount, pageWidth, pageHeight,
            textWidth, textFontSize, textLineHeight } = this.props;
    const { pages, offset, topTextHeight, topColor, bottomColor } = this.state;
    const containerStyle = {
      height: pagesCount * pageHeight,
      borderRadius: pageWidth / 2
    };
    const backgroundContainerStyle = {
      transform: `translateY(-${offset}px)`
    };
    const textContainerStyle = {
      left: (pageWidth - textWidth) / 2,
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
