import styles from './Editable.less';

import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

export default class Editable extends Component {
  static propTypes = {
    editMode: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onEditStart: PropTypes.func.isRequired,
    onEditEnd: PropTypes.func.isRequired
  };

  componentWillReceiveProps(nextProps) {
    const { editMode } = nextProps;

    setTimeout(() => {
      if (editMode) {
        findDOMNode(this.refs.input).focus();
      }
    });
  }

  render() {
    const { editMode, value, onChange, onEditStart, onEditEnd } = this.props;

    return (
      editMode ?
        <input className={styles.input} type="text" ref="input" value={value}
               onBlur={onEditEnd}
               onChange={event => onChange(event.currentTarget.value)}
               onKeyUp={event => { if (event.which === 13) { onEditEnd(); } }} /> :
        <span onClick={onEditStart}>{value}</span>
    );
  }
}
