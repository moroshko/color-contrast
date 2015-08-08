import styles from './Editable.less';

import React, { Component, PropTypes } from 'react';

export default class Editable extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onEditEnd: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.escapePressed = false;
    this.valueBeforeEdit = null;

    this.onFocus = ::this.onFocus;
    this.onKeyUp = ::this.onKeyUp;
    this.onBlur = ::this.onBlur;
  }

  onFocus(event) {
    this.valueBeforeEdit = event.currentTarget.value;
  }

  onBlur(event) {
    const { onEditEnd } = this.props;

    onEditEnd(this.escapePressed ? this.valueBeforeEdit : event.currentTarget.value);
  }

  onKeyUp(event) {
    const input = event.currentTarget;

    this.escapePressed = (event.which === 27);

    if (event.which === 13 || event.which === 27) {
      input.blur();
    }
  }

  render() {
    const { value } = this.props;

    console.log('render', value);

    return (
      <input className={styles.input} type="text" defaultValue={value}
             onFocus={this.onFocus} onKeyUp={this.onKeyUp} onBlur={this.onBlur} />
    );
  }
}
