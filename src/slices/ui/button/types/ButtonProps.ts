import { PressableProps } from 'react-native';
import { IconProps } from '../../../icons/types';

export type ButtonVariants = 'link' | 'success';

export type ButtonState = 'active' | 'disabled' | 'static';

export interface ButtonProps extends PressableProps {
  children: string | number;

  variant?: ButtonVariants;

  textClassName?: string;

  leftIcon?: (props: IconProps) => JSX.Element;
  leftIconProps?: IconProps;

  rightIcon?: (props: IconProps) => JSX.Element;
  rightIconProps?: IconProps;
}
