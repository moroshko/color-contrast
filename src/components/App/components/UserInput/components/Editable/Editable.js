import styles from './Editable.less';

import React, { Component, PropTypes } from 'react';

export default class Editable extends Component {
  static propTypes = {
    isValid: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    textAlign: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.valueBeforeEdit = null;

    this.onFocus = ::this.onFocus;
    this.onKeyUp = ::this.onKeyUp;
  }

  onFocus(event) {
    this.valueBeforeEdit = event.currentTarget.value;
  }

  onKeyUp(event) {
    const { onChange } = this.props;
    const input = event.currentTarget;

    switch (event.which) {
      case 13:
        input.blur();
        break;

      case 27:
        input.blur();
        onChange(this.valueBeforeEdit);
        break;
    }
  }

  render() {
    const { isValid, value, onChange, textAlign } = this.props;

    return (
      <input className={styles.input + ' ' + (isValid ? '' : styles.invalid)}
             type="text" value={value} style={{ textAlign }}
             onFocus={this.onFocus} onKeyUp={this.onKeyUp}
             onChange={event => onChange(event.currentTarget.value)} />
    );
  }
}
