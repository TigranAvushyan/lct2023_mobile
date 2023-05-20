import { ButtonState, ButtonVariants } from '../types/ButtonProps';
import cn from 'classnames';

export const getWrapperVariantClassNames = (
  state: ButtonState,
  variant?: ButtonVariants
) => {
  const buttonCommon = 'py-3 w-full rounded-full';
  switch (variant) {
    case 'success':
      return cn(buttonCommon, 'bg-green');
    case 'link':
      return 'color-white';
  }
};

export const getTextVariantClassNames = (
  state: ButtonState,
  variant?: ButtonVariants
) => {
  const buttonCommon = 'font-bold text-lg';
  switch (variant) {
    case 'success':
      return cn(buttonCommon, 'color-white');
    case 'link':
      return 'color-white';
  }
};
