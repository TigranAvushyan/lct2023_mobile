import { FC, useState } from 'react';
import { GestureResponderEvent, Pressable, Text } from 'react-native';
import { ButtonProps, ButtonState } from '../types/ButtonProps';
import cn from 'classnames';
import {
  getTextVariantClassNames,
  getWrapperVariantClassNames,
} from '../helper/styles';

export const Button: FC<ButtonProps> = ({
  className,
  textClassName,
  children,
  variant = 'success',
  leftIcon,
  leftIconProps,
  rightIcon,
  rightIconProps,
  onPressIn,
  onPressOut,
  ...props
}) => {
  const [state, setState] = useState<ButtonState>(
    props.disabled ? 'disabled' : 'static'
  );
  const pressIn = (event: GestureResponderEvent) => {
    setState('active');
    onPressIn && onPressIn(event);
  };
  const pressOut = (event: GestureResponderEvent) => {
    setState('static');
    onPressOut && onPressOut(event);
  };

  return (
    <Pressable
      {...props}
      onPressIn={pressIn}
      onPressOut={pressOut}
      className={cn(
        'flex items-center justify-center flex-row',
        getWrapperVariantClassNames(state, variant),
        className
      )}
    >
      {leftIcon &&
        leftIcon({
          state,
          ...leftIconProps,
        })}
      <Text
        className={cn(getTextVariantClassNames(state, variant), textClassName)}
      >
        {children}
      </Text>
      {rightIcon &&
        rightIcon({
          fill: 'red',
          state,
          ...rightIconProps,
        })}
    </Pressable>
  );
};
