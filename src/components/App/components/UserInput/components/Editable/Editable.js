import styles from './Editable.less';

import React, { Component, PropTypes } from 'react';

export default class Editable extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onEditEnd: PropTypes.func.isRequired
  };

  onKeyUp(event) {
    if (event.which !== 13) {
      return;
    }

    const { onEditEnd } = this.props;
    const input = event.currentTarget;

    onEditEnd(input.value);

    input.blur();
  }

  render() {
    const { value } = this.props;

    return (
      <input className={styles.input} type="text" defaultValue={value}
             onKeyUp={::this.onKeyUp} />
    );
  }
}
