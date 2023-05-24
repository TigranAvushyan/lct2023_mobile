import { useState } from 'react';

export const useToggle = (init = false) => {
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
    active,
    toggle,
    setTrue,
    setFalse,
  };
};
