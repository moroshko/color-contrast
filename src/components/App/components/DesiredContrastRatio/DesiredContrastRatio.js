import React, { Component, PropTypes } from 'react';

export default class DesiredContrastRatio extends Component {
  static propTypes = {
    className: PropTypes.string,
    labelClassName: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  render() {
    const { className, labelClassName, value, onChange } = this.props;
    const id = 'contrast-ratio';

    return (
      <div className={className}>
        <label className={labelClassName} htmlFor={id}>
          Desired contrast ratio:
        </label>
        <input id={id} type="text" value={value}
               onChange={event => onChange(event.currentTarget.value)} />
      </div>
    );
  }
}
