import { SvgProps } from 'react-native-svg';
import { ButtonState } from '../ui/button/types/ButtonProps';

export interface IconProps extends Omit<SvgProps, 'disabled'> {
  state?: ButtonState;
  disabledColor?: string;
  activeColor?: string;
}
