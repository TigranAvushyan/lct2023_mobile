import { FC } from 'react';
import { Path, Svg } from 'react-native-svg';

export const Star: FC = () => {
  return (
    <Svg width='38' height='39' viewBox='0 0 38 39' fill='none'>
      <Path
        d='M17.1761 3.18273L13.0262 11.9738L3.74134 13.3881C2.07629 13.6404 1.409 15.7851 2.61648 17.0134L9.33385 23.8524L7.74507 33.5134C7.45909 35.2596 9.21946 36.5677 10.6938 35.751L19 31.1894L27.3062 35.751C28.7805 36.561 30.5409 35.2596 30.2549 33.5134L28.6662 23.8524L35.3835 17.0134C36.591 15.7851 35.9237 13.6404 34.2587 13.3881L24.9738 11.9738L20.8239 3.18273C20.0804 1.61573 17.926 1.59581 17.1761 3.18273Z'
        fill='#FFE600'
        stroke='#383E54'
        strokeWidth='4'
      />
    </Svg>
  );
};
