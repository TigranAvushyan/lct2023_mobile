import { useState } from 'react';

const getItem = <T, K>(isActive: boolean, item?: [T, K]) => {
  if (item) {
    return isActive ? item[0] : item[1];
  }
  return isActive;
};

export const useToggle = <T, K>(init = false, item?: [T, K]) => {
  const [active, setActive] = useState<boolean>(init);

  const setTrue = () => {
    setActive(true);
  };
  const setFalse = () => {
    setActive(false);
  };
  const toggle = () => {
    setActive((i) => !i);
  };

  return {
    active: getItem(active, item),
    toggle,
    setTrue,
    setFalse,
  };
};
