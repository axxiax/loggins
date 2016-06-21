import React, { PropTypes, Component } from 'react';

import Radio from './Radio';
import css from './Radio.css';

/*
 * Example usage:
 * <RadioGroup name="example"
 *             onChange={this.handleRadio}
 *             selectedValue={this.state.radioVal}>
 *   {radio => (
 *     <span>
 *       {radio({value: 'Apple'})}
 *       <br/>
 *       {radio({value: 'Orange'})}
 *       <br/>
 *       {radio({value: 'Banana'})}
 *     </span>
 *   )}
 * </RadioGroup>
 */

export default class RadioGroup extends Component {
  render() {
    const {
      className,
      onChange,
      children,
      selectedValue,
      name,
    } = this.props;
    return (
      <div className={[css.group, className].join(' ')}>
        {children && children(props =>
          <Radio
            name={name}
            onChange={onChange}
            selectedValue={selectedValue}
            {...props}
          />
        )}
      </div>
    );
  }
}

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,

  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  giant: PropTypes.bool,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
