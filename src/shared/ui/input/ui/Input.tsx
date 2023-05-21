import { forwardRef } from 'react';
import { TextInput } from 'react-native';
import { InputProps } from '../types/InputProps';
import cn from 'classnames';

export const Input = forwardRef<TextInput, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <TextInput
        className={cn('px-4 py-3.5 rounded-full  bg-white', className)}
        {...props}
        ref={ref}
      />
    );
  }
);
