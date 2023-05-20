import { IconProps } from './types';

export const getIconColor = (props: IconProps) => {
  const defaultColor = props.fill || '#fff';
  switch (props.state) {
    case 'disabled':
      return props?.disabledColor || defaultColor;
    case 'active':
      return props?.activeColor || defaultColor;
  }
  return defaultColor;
};
