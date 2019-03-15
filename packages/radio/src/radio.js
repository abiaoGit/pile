import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  compose,
  prefixClsProperty,
  sizeProperty,
  sizes,
} from '@pile/shared';
import { IfComponent } from '@pile/condition';
import { compose as composed, withState, withHandlers } from 'recompose'

const enhanced = composed(
  withState('checked', 'updateValue', (props) => {
    return props.checked
  }),
  withHandlers({
    onClick: props => (value) => event => {
      if (props.disabled) return null
      props.updateValue(true)
      props.onChange(value)
    }
  })
)

const Radio = enhanced(({
  prefixCls, className, onClick, checked, disabled, value, children, clsicon,
  ...props
}) => {
  const cls = classNames({
    [`${prefixCls}-radio`]: true,
    [className]: className,
  });
  
  if (!clsicon) {
    if (checked) {
      clsicon = classNames({
        [`${prefixCls}-radio-icon`]: true,
        [`${prefixCls}-radio-checked`]: true,
        [`${prefixCls}-radio-disabled`]: disabled,
      });
    } else {
      clsicon = classNames({
        [`${prefixCls}-radio-icon`]: true,
        [`${prefixCls}-radio-no`]: true,
        [`${prefixCls}-radio-disabled-no`]: disabled,
      });
    }
  }

  return (
    <div className={cls} >
      <label className={`${prefixCls}-radio-label`} htmlFor={`${prefixCls}-radio-${value}`} onClick={onClick(value)}>
        <span id={`${prefixCls}-radio-${value}`} className={clsicon}></span>
        <span className={`${prefixCls}-radio-text`}>{children}</span>
      </label>
    </div>)
})

// Button.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node,
//   ]).isRequired,
//   type: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger']),
//   nativeType: PropTypes.oneOf(['button', 'submit', 'reset']),
//   block: PropTypes.bool,
//   disabled: PropTypes.bool,
//   line: PropTypes.bool,
//   icon: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.node,
//   ]),
//   loading: PropTypes.bool,
//   text: PropTypes.bool,
//   href: PropTypes.string,
//   radius: PropTypes.bool,
//   circle: PropTypes.bool,
// };

// Button.defaultProps = {
//   type: 'default',
//   nativeType: 'button',
//   block: false,
//   disabled: false,
//   line: false,
//   icon: null,
//   loading: false,
//   text: false,
//   href: null,
//   radius: true,
//   circle: false,
// };

const enhance = compose(
  sizeProperty([sizes.SMALL, sizes.LARGE]),
  prefixClsProperty,
);

export default enhance(Radio);